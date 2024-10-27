#Configuration

terraform {
  required_providers {
    linode = {
      source  = "linode/linode"
      version = "~>2.30.0"
    }
  }
}

provider "linode" {
  token = var.linode_api_key
}

#Resources

resource "linode_instance" "jenkins" {
  label           = "jenkins"
  image           = "linode/ubuntu22.04"
  region          = "us-central"
  type            = "g6-standard-1"
  root_pass       = "Ikts@34924517"
  tags       = ["jenkins", "devops"]
}

resource "linode_lke_cluster" "k8s" {
    label       = "k8s"
    k8s_version = "1.31"
    region      = "us-central"
    tags        = ["app", "devops"]

    pool {
        type  = "g6-standard-1"
        count = 2
    }
}

#Variables

variable "region" {
  type = string
  default = "us-central"
}

variable "linode_api_key" { # lembrar de criar um arquivo tfvars e colocar a key =)
  type = string
  default = ""
}

variable "jenkins_root_pwd" { # lembrar de criar um arquivo tfvars e colocar a password =)
  type = string
  default = ""
}

#Outputs

output "jenkins_ip" {
  value = linode_instance.jenkins.ip_address
}

resource "local_file" "k8s_config" {
  content  = linode_lke_cluster.k8s.kubeconfig
  filename = "./config"
}