/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars are explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  aboutSidebar: [
    {
      type: "category",
      label: "What is Jan?",
      link: { type: "doc", id: "about/about" },
      items: [
        //"about/roadmap",
        "community/community",
      ],
    },
    {
      type: "category",
      label: "Who we are",
      link: { type: "doc", id: "team/team" },
      items: ["team/join-us", "team/contributor-program"],
    },
    "wall-of-love",
    {
      type: "category",
      label: "How We Work",
      link: { type: "doc", id: "how-we-work" },
      items: [
        "how-we-work/strategy/strategy",
        "how-we-work/project-management/project-management",
        {
          type: "category",
          label: "Engineering",
          link: { type: "doc", id: "how-we-work/engineering/engineering" },
          items: [
            "how-we-work/engineering/ci-cd",
            "how-we-work/engineering/qa",
          ],
        },
        "how-we-work/product-design/product-design",
        "how-we-work/analytics/analytics",
        "how-we-work/website-docs/website-docs",
      ],
    },
    "acknowledgements",
    {
      type: "category",
      label: "FAQ",
      link: { type: "doc", id: "about/faq" },
      items:
        [],
    },
  ],
  productSidebar: [
    {
      type: "category",
      label: "Platforms",
      collapsible: false,
      items: [
        "platforms/desktop",
        "server-suite/home-server",
        // "server-suite/enterprise",
        // "platforms/mobile",
        // "platforms/hub",
      ],
    },
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Features",
      link: { type: "doc", id: "features/features" },
      items: [
        "features/local",
        "features/remote",
        "features/api-server",
        "features/extensions-framework",
        "features/agents-framework",
        "features/data-security",
      ],
    },
    // NOTE: Jan Server Suite will be torn out into it's own section in the future
    // {
    //   type: "category",
    //   label: "Jan Server Suite",
    //   link: { type: "doc", id: "server-suite/server-suite" },
    //   items: [
    //     "server-suite/admin-console",
    //     "server-suite/identity-access-management",
    //     "server-suite/audit-compliance",
    //     "server-suite/observability",
    //   ],
    // },
  ],
  solutionSidebar: [
    {
      type: "category",
      label: "Use Cases",
      collapsed: true,
      collapsible: true,
      items: ["solutions/ai-pc", "solutions/chatgpt-alternative"],
    },
    {
      type: "category",
      label: "Sectors",
      collapsed: true,
      collapsible: true,
      items: [
        "solutions/finance",
        "solutions/healthcare",
        "solutions/legal",
        "solutions/government",
      ],
    },
    {
      type: "category",
      label: "Organization Type",
      collapsed: true,
      collapsible: true,
      items: [
        "solutions/developers",
        "solutions/consultants",
        "solutions/startups",
        "solutions/enterprises",
      ],
    },
  ],

  pricingSidebar: ["pricing/pricing"],
  ecosystemSidebar: [
    "ecosystem/ecosystem",
    {
      type: "category",
      label: "Partners",
      link: { type: "doc", id: "partners/partners" },
      collapsible: true,
      items: ["partners/become-a-partner"],
    },
    {
      type: "category",
      label: "Integrations",
      link: { type: "doc", id: "integrations" },
      items: [
        {
          type: "autogenerated",
          dirName: "integrations",
        },
      ],
    },
  ],
  guidesSidebar: [
    {
      type: "category",
      label: "Get Started",
      collapsible: false,
      className: "head_Menu",
      items: [
        "guides/get-started/overview",
        "guides/get-started/quickstart",

        {
          type: "category",
          label: "Hardware Setup",
          className: "head_SubMenu",
          link: {
            type: 'doc',
            id: "guides/get-started/hardware-setup",
          },
          items: [
            "guides/get-started/settingup-gpu",
          ]
        },
        {
          type: "category",
          label: "Installation",
          className: "head_SubMenu",
          link: {
            type: 'doc',
            id: "guides/installation/README",
          },
          items: [
            "guides/installation/docker",
            "guides/installation/linux",
            "guides/installation/mac",
            "guides/installation/windows"
          ]
        },
      ]
    },
    {
      type: "category",
      label: "User Guides",
      collapsible: false,
      className: "head_Menu",
      items: [
        "guides/user-guides/overview-guides",
        "guides/user-guides/jan-data-folder",
        "guides/user-guides/manage-models",
        "guides/user-guides/manage-assistants",
        "guides/user-guides/manage-threads",
        "guides/user-guides/local-server",
        "guides/user-guides/advanced-settings"
      ]
    },
    {
      type: "category",
      label: "Inference Engines",
      collapsible: false,
      className: "head_Menu",
      items: [
        "guides/inference/overview-inference",
        {
          type: "category",
          label: "Local Engines",
          className: "head_SubMenu",
          link: {
            type: 'doc',
            id: "guides/local-providers/README",
          },
          items: [
            "guides/local-providers/llamacpp",
            "guides/local-providers/lmstudio",
            "guides/local-providers/ollama",
            "guides/local-providers/tensorrt",
          ]
        },
        {
          type: "category",
          label: "Remote Engines",
          className: "head_SubMenu",
          link: {
            type: 'doc',
            id: "guides/remote-providers/README",
          },
          items: [
            "guides/remote-providers/claude",
            "guides/remote-providers/groq",
            "guides/remote-providers/mistral",
            "guides/remote-providers/openai",
            "guides/remote-providers/remote-server-integration"
          ]
        },
      ]
    },
    {
      type: "category",
      label: "Extensions",
      collapsible: false,
      className: "head_Menu",
      items: [
        "guides/extensions/extensions",
      ]
    },
    {
      type: "category",
      label: "Integrations",
      collapsible: false,
      className: "head_Menu",
      items: [
        // "guides/integrations/overview-integration",
        {
          type: "category",
          label: "Integrations",
          className: "head_SubMenu",
          link: {
            type: 'doc',
            id: "guides/integrations/README",
          },
          items: [
            "guides/integrations/crewai",
            "guides/integrations/discord",
            "guides/integrations/interpreter",
            "guides/integrations/raycast",
            "guides/integrations/router",
            "guides/integrations/unsloth",
            "guides/integrations/vscode"
          ]
        },
      ]
    },
    {
      type: "category",
      label: "Troubleshooting",
      collapsible: false,
      className: "head_Menu",
      items: [
        "guides/troubleshooting",
      ]
    },
    // {
    //   type: "category",
    //   label: "Advanced Features",
    //   collapsible: false,
    //   className: "head_Menu",
    //   items: [
    //     {
    //       type: "category",
    //       label: "Advanced Settings",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/advanced-settings/advanced-settings",
    //       },
    //       items: [
    //         "guides/advanced-settings/http-proxy",
    //       ]
    //     },
    //     {
    //       type: "category",
    //       label: "Advanced Model Setup",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/models/README",
    //       },
    //       items: [
    //         "guides/models/customize-engine",
    //         "guides/models/import-models",
    //         "guides/models/integrate-remote",
    //       ]
    //     },
    //     {
    //       type: "category",
    //       label: "Inference Providers",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/providers/README",
    //       },
    //       items: [
    //         "guides/providers/llama-cpp",
    //         "guides/providers/tensorrt-llm",
    //       ]
    //     },
    //     {
    //       type: "category",
    //       label: "Extensions",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/extensions/README",
    //       },
    //       items: [
    //         "guides/extensions/import-ext",
    //         "guides/extensions/setup-ext",
    //       ]
    //     },
    //     {
    //       type: "category",
    //       label: "Integrations",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/integration/README",
    //       },
    //       items: [
    //         "guides/integration/azure",
    //         "guides/integration/discord",
    //         "guides/integration/groq",
    //         "guides/integration/lmstudio",
    //         "guides/integration/mistral",
    //         "guides/integration/ollama",
    //         "guides/integration/openinterpreter",
    //         "guides/integration/openrouter",
    //         "guides/integration/raycast",
    //         "guides/integration/vscode",
    //       ]
    //     },
    //   ]
    // },
    // {
    //   type: "category",
    //   label: "Troubleshooting",
    //   collapsible: false,
    //   className: "head_Menu",
    //   items: [
    //     {
    //       type: "category",
    //       label: "Error Codes",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/error-codes/README",
    //       },
    //       items: [
    //         "guides/error-codes/how-to-get-error-logs",
    //         "guides/error-codes/permission-denied",
    //         "guides/error-codes/something-amiss",
    //         "guides/error-codes/undefined-issue",
    //         "guides/error-codes/unexpected-token",
    //       ]
    //     },
    //     {
    //       type: "category",
    //       label: "Common Error",
    //       className: "head_SubMenu",
    //       link: {
    //         type: 'doc',
    //         id: "guides/common-error/README",
    //       },
    //       items: [
    //         "guides/common-error/broken-build",
    //         "guides/common-error/not-using-gpu",
    //       ]
    //     },
    //     "guides/faq"
    //   ]
    // },
  ],
  developerSidebar: [
    {
      type: "autogenerated",
      dirName: "developer",
    },
  ],
  releasesSidebar: [
    {
      type: "autogenerated",
      dirName: "releases",
    },
  ]
};

module.exports = sidebars;
