RELEASE_VERSION=v$(VERSION)
GIT_BRANCH=$(strip $(shell git symbolic-ref --short HEAD))
GIT_VERSION="$(strip $(shell git rev-parse --short HEAD))"
GIT_LOG=$(shell git log `git describe --tags --abbrev=0`..HEAD --pretty="tformat:%h | %s [%an]\n" | sed "s/\"/'/g")

release:
	@git config --local user.name "wangshijun"
	@git config --local user.email "wangshijun2010@gmail.com"
	@git tag -a $(RELEASE_VERSION) -m "Release $(RELEASE_VERSION). Revision is: $(GIT_VERSION)" | true
	@git push origin $(RELEASE_VERSION) | true

delete-release:
	@echo "Delete a release on $(RELEASE_VERSION)"
	@git tag -d $(RELEASE_VERSION) | true
	@git push -f -d origin $(RELEASE_VERSION) | true

bump-version:
	@echo "Bump version..."
	@.makefiles/bump_version.sh
	@test -f "package.json" && .makefiles/bump_node_version.sh

create-pr:
	@echo "Creating pull request..."
	@make bump-version || true
	@git add .;git commit -a -m "bump version";git push origin $(GIT_BRANCH)
	@hub pull-request

browse-pr:
	@hub browse -- pulls
