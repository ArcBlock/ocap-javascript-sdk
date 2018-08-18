git config --local user.name "wangshijun"
git config --local user.email "wangshijun2010@gmail.com"

git remote remove origin
git remote add origin "https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"

changed=$(lerna changed)
if ["$changed" = ""]; then
  echo "No packages to publish, exit"
  exit
fi

DEBUG=* node tools/setup-ci.js

git checkout master
git commit -am "update yarn.lock file"

VERSION=$(cat version | awk '{$1=$1;print}')
lerna publish $VERSION --yes
