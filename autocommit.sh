#!/usr/bin/env bash

#####################################################################
### Please set the paths accordingly. In case you don't have all  ###
### the listed folders, just keep that line commented out.        ###
#####################################################################
### Path to your config folder you want to back up
config_folder=~/Ted # this is the backup repo, not the klipper directory

### Path to your Klipper folder, by default that is '~/klipper'
klipper_folder=~/klipper

### Path to your Moonraker folder, by default that is '~/moonraker'
moonraker_folder=~/moonraker

### Path to your Mainsail folder, by default that is '~/mainsail'
#mainsail_folder=~/mainsail

### Path to your Fluidd folder, by default that is '~/fluidd'
fluidd_folder=~/fluidd

#####################################################################
#####################################################################


#####################################################################
################ !!! DO NOT EDIT BELOW THIS LINE !!! ################
#####################################################################
grab_version() {
  local klipper_commit moonraker_commit
  local mainsail_ver fluidd_ver

  if [[ -n ${klipper_folder} ]]; then
    cd "${klipper_folder}"
    klipper_commit=$(git rev-parse --short=7 HEAD)
    m1="Klipper on commit: ${klipper_commit}"
  fi
  if [[ -n ${moonraker_folder} ]]; then
    cd "${moonraker_folder}"
    moonraker_commit=$(git rev-parse --short=7 HEAD)
    m2="Moonraker on commit: ${moonraker_commit}"
  fi
  if [[ -n ${mainsail_folder} ]]; then
    mainsail_ver=$(head -n 1 "${mainsail_folder}/.version")
    m3="Mainsail version: ${mainsail_ver}"
  fi
  if [[ -n ${fluidd_folder} ]]; then
    fluidd_ver=$(head -n 1 "${fluidd_folder}/.version")
    m4="Fluidd version: ${fluidd_ver}"
  fi
}

push_config() {
  # This original srcipt is a bit different from what I need it for, so I added this.
  # It copies the files to be backed up into the repo folder, then commits those changes.
  cp -r -p -u -v ~/klipper_config ~/klipper_logs ~/printer_data ~/Ted
  # -r copy directories recursively
  # -p preserves ownership and timestamps of the original files
  # -u copy only when the SOURCE file is newer than the destination file or when the destination file is missing
  # -v explain what is being done

  local current_date
  cd "${config_folder}" || exit 1
  git pull
  git add .
  current_date=$(date +"%Y-%m-%d %T")
  git commit -m "Autocommit from ${current_date}" -m "${m1}" -m "${m2}" -m "${m3}" -m "${m4}"
  git push
}

grab_version
push_config
