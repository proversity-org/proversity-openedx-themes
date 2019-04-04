.DEFAULT_GOAL := help
.PHONY: requirements

# include *.mk

# Generates a help message. Borrowed from https://github.com/pydanny/cookiecutter-djangopackage.
help: ## Display this help message
	@echo "Please use \`make <target>' where <target> is one of"
	@perl -nle'print $& if m{^[\.a-zA-Z_-]+:.*?## .*$$}' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m  %-25s\033[0m %s\n", $$1, $$2}'


theme = edx-platform/cabinet-theme
lang_targets = en fr
create_translations_catalogs: ## Create the initial configuration of .mo files for translation
	pybabel extract -F $(theme)/conf/locale/babel.cfg -o  $(theme)/conf/locale/django.pot --msgid-bugs-address=support@edunext.co --copyright-holder=eduNEXT $(theme)/*
	for lang in $(lang_targets) ; do \
        pybabel init -i $(theme)/conf/locale/django.pot -D django -d $(theme)/conf/locale/ -l $$lang ; \
        pybabel init -i $(theme)/conf/locale/django.pot -D djangojs -d $(theme)/conf/locale/ -l $$lang ; \
    done


update_translations: ## update strings to be translated
	pybabel extract -F $(theme)/conf/locale/babel.cfg -o $(theme)/conf/locale/django.pot $(theme)/*
	pybabel update -N -D django -i $(theme)/conf/locale/django.pot -d $(theme)/conf/locale/
	pybabel update -N -D djangojs -i $(theme)/conf/locale/django.pot -d $(theme)/conf/locale/
	#rm $(theme)/conf/locale/django.pot


compile_translations: ## compile .mo files into .po files
	pybabel compile -f -D django -d $(theme)/conf/locale/; \
	pybabel compile -f -D djangojs -d $(theme)/conf/locale/
