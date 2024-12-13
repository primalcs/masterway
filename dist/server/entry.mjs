import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/about",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/about", "definedBy": "/pages/about/" },
    loadConfigValuesAll: () => import("./entries/pages_about.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/star-wars/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars/@id", "definedBy": "/pages/star-wars/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_-id.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/star-wars/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars", "definedBy": "/pages/star-wars/index/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_index.mjs"),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/renderer/+config.ts", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {}
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-RRwB4qvT.js": {
    "file": "assets/chunks/chunk-RRwB4qvT.js",
    "name": "_onRenderClient",
    "css": [
      "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
      "assets/static/renderer_Layout-031b266d.CEjdw0pU.css"
    ],
    "assets": [
      "assets/static/logo.BDQBhfUN.svg"
    ]
  },
  "_chunk-reC44fgb.js": {
    "file": "assets/chunks/chunk-reC44fgb.js",
    "name": "useData",
    "imports": [
      "_chunk-RRwB4qvT.js"
    ]
  },
  "_pages_about_code-10d2d77a.BG6NPEYo.css": {
    "file": "assets/static/pages_about_code-10d2d77a.BG6NPEYo.css",
    "src": "_pages_about_code-10d2d77a.BG6NPEYo.css"
  },
  "_renderer_Layout-031b266d.CEjdw0pU.css": {
    "file": "assets/static/renderer_Layout-031b266d.CEjdw0pU.css",
    "src": "_renderer_Layout-031b266d.CEjdw0pU.css"
  },
  "_renderer_css_index-e8e12f67.Cy_hbeh9.css": {
    "file": "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
    "src": "_renderer_css_index-e8e12f67.Cy_hbeh9.css"
  },
  "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.C-sJxmzh.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/about",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index"
    ]
  },
  "renderer/logo.svg": {
    "file": "assets/static/logo.BDQBhfUN.svg",
    "src": "renderer/logo.svg"
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.DLmfwL9t.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-RRwB4qvT.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
      "assets/static/renderer_Layout-031b266d.CEjdw0pU.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/about": {
    "file": "assets/entries/pages_about.BexAZ876.js",
    "name": "entries/pages/about",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/about",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-RRwB4qvT.js"
    ],
    "css": [
      "assets/static/pages_about_code-10d2d77a.BG6NPEYo.css",
      "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
      "assets/static/renderer_Layout-031b266d.CEjdw0pU.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.kxJB91-y.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-RRwB4qvT.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
      "assets/static/renderer_Layout-031b266d.CEjdw0pU.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id": {
    "file": "assets/entries/pages_star-wars_-id.CVRW8B5K.js",
    "name": "entries/pages/star-wars/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-RRwB4qvT.js",
      "_chunk-reC44fgb.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
      "assets/static/renderer_Layout-031b266d.CEjdw0pU.css"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index": {
    "file": "assets/entries/pages_star-wars_index.z-vdE-wb.js",
    "name": "entries/pages/star-wars/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-RRwB4qvT.js",
      "_chunk-reC44fgb.js"
    ],
    "css": [
      "assets/static/renderer_css_index-e8e12f67.Cy_hbeh9.css",
      "assets/static/renderer_Layout-031b266d.CEjdw0pU.css"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.209",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
