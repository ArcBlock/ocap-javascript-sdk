TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build:
	@echo "Building the software..."
	@yarn build

init: install dep
	@echo "Initializing the repo..."

github-init: install dep
	@echo "Initialize software required for github (normally ubuntu software)"

install:
	@echo "Install software required for this repo..."
	@npm install -g lerna
	@npm install -g yarn

dep:
	@echo "Install dependencies required for this repo..."
	@lerna bootstrap

pre-build: install dep
	@echo "Running scripts before the build..."

post-build:
	@echo "Running scripts after the build is done..."

all: pre-build build post-build

test:
	@echo "Running test suites..."
	@yarn test

lint:
	@echo "Linting the software..."
	@yarn lint

doc:
	@echo "Building the documenation..."

precommit: dep lint doc build test

github-deploy:
	@echo "Deploy the software by github"

clean:
	@echo "Cleaning the build..."

watch:
	@make build
	@echo "Watching templates and slides changes..."
	@fswatch -o packages/ | xargs -n1 -I{} make build

run:
	@echo "Running the software..."

include .makefiles/*.mk

.PHONY: build init github-init install dep pre-build post-build all test doc precommit github clean watch run bump-version create-pr
