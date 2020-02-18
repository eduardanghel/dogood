GCLOUD_PROJECT:=$(shell gcloud config list project --format="value(core.project)")

.PHONY: all
all: deploy

.PHONY: create-cluster
create-cluster:
	gcloud container clusters create karmaapp \
  		--scopes "https://www.googleapis.com/auth/userinfo.email","cloud-platform" \
  		--num-nodes 3 --zone "europe-west1-b"

.PHONY: create-bucket
create-bucket:
	gsutil mb gs://$(GCLOUD_PROJECT)
	gsutil defacl set public-read gs://$(GCLOUD_PROJECT)

.PHONY: build
build:
	docker build -t gcr.io/$(GCLOUD_PROJECT)/karmaapp .

.PHONY: push
push: build
	gcloud docker -- push -- gcr.io/$(GCLOUD_PROJECT)/karmaapp

.PHONY: template
template:
	sed -i ".tmpl" "s/\$$GCLOUD_PROJECT/$(GCLOUD_PROJECT)/g" karmaapp.yaml

.PHONY: deploy
deploy: push template
	kubectl create -f karmaapp.yaml

.PHONY: update
update:
	kubectl patch deployment karmaapp -p "{\"spec\":{\"template\":{\"metadata\":{\"labels\":{\"date\":\"`date +'%s'`\"}}}}}"

.PHONY: delete
delete:
	kubectl delete rc karmaapp
	kubectl delete service karmaapp
