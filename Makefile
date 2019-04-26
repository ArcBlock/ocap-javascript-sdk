TOP_DIR=.
README=$(TOP_DIR)/README.md

VERSION=$(strip $(shell cat version))

build:
	@echo  
	echo "Building the software..."
	yarn build

init: install dep
	@echo  
	echo "Initializing the repo..."

travis-init: install dep
	@echo  
	echo "Initialize software required for travis (normally ubuntu software)"

install:
	@echo  
	echo "Install software required for this repo..."
	npm install -g lerna
	npm install -g yarn

dep:
	@echo  
	echo "Install dependencies required for this repo..."
	lerna bootstrap

pre-build: install dep
	@echo  
	echo "Running scripts before the build..."

post-build:
	@echo  
	echo "Running scripts after the build is done..."

all: pre-build build post-build
	@echo  

test:
	@echo  
	echo "Running test suites..."

lint:
	@echo  
	echo "Linting the software..."
	yarn lint

doc:
	@echo  
	echo "Building the documenation..."

precommit: dep lint doc build test
	@echo  

travis: precommit
	@echo  

travis-deploy:
	@echo  
	echo "Deploy the software by travis"

clean:
	@echo  
	echo "Cleaning the build..."

watch:
	@echo  
	make build
	echo "Watching templates and slides changes..."
	fswatch -o packages/ | xargs -n1 -I{} make build

run:
	@echo  
	echo "Running the software..."

include .makefiles/*.mk

.PHONY: build init travis-init install dep pre-build post-build all test doc precommit travis clean watch run bump-version create-pr
