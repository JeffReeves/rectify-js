#!/bin/bash
# purpose: add all remotes for repo
# author: Jeff Reeves

# define repository's stub for the URL
REPO_STUB='rectify-js'

# create the repo directory on bridges
ssh git@bridges "mkdir /git/rectify-js.git && cd /git/rectify-js.git && git config --global init.defaultBranch main && git init --bare && sed -i 's/master/main/' /git/rpi4-custom-os.git/HEAD"

# add bridges to git remote list
git remote add bridges git@bridges:/git/rectify-js.git

# add gitlab to git remote list
git remote add gitlab git@gitlab.com:JeffReeves/rectify-js.git

# add github to git remote list
git remote add github git@github.com:JeffReeves/rectify-js.git

# update origin to bridges
git remote set-url origin git@bridges:/git/rectify-js.git

# view all remotes
git remote -v

# open settings for gitlab and github in browser
#explorer.exe "https://gitlab.com/JeffReeves/rectify-js/-/settings/repository"
#explorer.exe "https://gitlab.com/JeffReeves/rectify-js/-/branches"
#explorer.exe "https://github.com/JeffReeves/rectify-js/settings/branches"
#explorer.exe "https://github.com/JeffReeves/rectify-js/branches"

