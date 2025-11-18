"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Boxes, Zap } from "lucide-react";

const tabs = [
  {
    id: "terraform",
    name: "Terraform",
    icon: Code2,
    code: `provider "twingate" {
  api_token = var.tg_api_key
  network   = var.tg_network
}

resource "twingate_remote_network" "data_network" {
  name = "data-engineering"
}

resource "twingate_groups" "devops" {
  name = "DevOps"
}

resource "twingate_resource" "database" {
  name              = "Production Database"
  address           = "db.internal.company.com"
  remote_network_id = twingate_remote_network.data_network.id
}

resource "twingate_service_account" "ci_cd" {
  name = "CI/CD Pipeline"
}`
  },
  {
    id: "pulumi",
    name: "Pulumi",
    icon: Boxes,
    code: `import * as twingate from "@twingate/pulumi-twingate";

const network = new twingate.RemoteNetwork("data-network", {
    name: "data-engineering",
});

const group = new twingate.Group("devops", {
    name: "DevOps",
});

const resource = new twingate.Resource("database", {
    name: "Production Database",
    address: "db.internal.company.com",
    remoteNetworkId: network.id,
});`
  },
  {
    id: "api",
    name: "API",
    icon: Zap,
    code: `curl -X POST https://api.twingate.com/v1/resources \\
  -H "Authorization: Bearer $API_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Production Database",
    "address": "db.internal.company.com",
    "remoteNetworkId": "network_id_here",
    "protocols": {
      "tcp": {
        "policy": "RESTRICTED",
        "ports": [5432]
      }
    }
  }'`
  }
];

export function AutomationSection() {
  const [activeTab, setActiveTab] = useState("terraform");
  const currentTab = tabs.find(tab => tab.id === activeTab) || tabs[0];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Zero Trust as Code
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Automate your journey to Zero Trust
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our API-first design easily integrates with your stack, no changes to infrastructure needed. 
              Just choose your IaC, choose your VPC, and deploy.
            </p>

            <Card className="bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-6">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "Twingate is a powerful platform that allows us to programmatically deploy and maintain 
                  a zero trust approach to our infrastructure."
                </p>
                <div>
                  <p className="font-semibold text-foreground">Paul Guthrie</p>
                  <p className="text-sm text-muted-foreground">Information Security Officer, Blend</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Code Block */}
          <div>
            <Card className="bg-card border-border/50 overflow-hidden">
              <div className="border-b border-border/50 p-4">
                <div className="flex gap-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <Button
                        key={tab.id}
                        variant={activeTab === tab.id ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setActiveTab(tab.id)}
                        className="gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        {tab.name}
                      </Button>
                    );
                  })}
                </div>
              </div>
              <CardContent className="p-0">
                <div className="bg-slate-950 p-6 overflow-x-auto">
                  <pre className="text-sm text-slate-300 font-mono">
                    <code>{currentTab.code}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
