import { _ as _export_sfc, o as onMounted, a as openBlock, c as createElementBlock, r as renderSlot, b as createBaseVNode, d as createVNode, w as withCtx, F as Fragment, e as createTextVNode } from "./index-BEffCoc7.js";
const _hoisted_1$5 = {
  href: "/",
  id: "redirect"
};
const _sfc_main$7 = {
  __name: "WelcomeItem",
  setup(__props) {
    onMounted(() => {
      Object.keys(document.getElementsByTagName("a")).map((ite) => {
        const item = document.getElementsByTagName("a")[ite];
        if (item.id) {
          console.log(item.href.includes("project"));
          if (!item.href.includes("project")) {
            item.href = item.href + "portfolio/project/" + item.textContent.split("/")[item.textContent.split("/").length - 1];
          }
          console.log(item.href);
        }
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("a", _hoisted_1$5, [
        renderSlot(_ctx.$slots, "heading", { id: "name" }, void 0, true)
      ]);
    };
  }
};
const WelcomeItem = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-0f35ce7d"]]);
const _sfc_main$6 = {};
const _hoisted_1$4 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "17",
  fill: "currentColor"
};
function _sfc_render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$4, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M11 2.253a1 1 0 1 0-2 0h2zm-2 13a1 1 0 1 0 2 0H9zm.447-12.167a1 1 0 1 0 1.107-1.666L9.447 3.086zM1 2.253L.447 1.42A1 1 0 0 0 0 2.253h1zm0 13H0a1 1 0 0 0 1.553.833L1 15.253zm8.447.833a1 1 0 1 0 1.107-1.666l-1.107 1.666zm0-14.666a1 1 0 1 0 1.107 1.666L9.447 1.42zM19 2.253h1a1 1 0 0 0-.447-.833L19 2.253zm0 13l-.553.833A1 1 0 0 0 20 15.253h-1zm-9.553-.833a1 1 0 1 0 1.107 1.666L9.447 14.42zM9 2.253v13h2v-13H9zm1.553-.833C9.203.523 7.42 0 5.5 0v2c1.572 0 2.961.431 3.947 1.086l1.107-1.666zM5.5 0C3.58 0 1.797.523.447 1.42l1.107 1.666C2.539 2.431 3.928 2 5.5 2V0zM0 2.253v13h2v-13H0zm1.553 13.833C2.539 15.431 3.928 15 5.5 15v-2c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM5.5 15c1.572 0 2.961.431 3.947 1.086l1.107-1.666C9.203 13.523 7.42 13 5.5 13v2zm5.053-11.914C11.539 2.431 12.928 2 14.5 2V0c-1.92 0-3.703.523-5.053 1.42l1.107 1.666zM14.5 2c1.573 0 2.961.431 3.947 1.086l1.107-1.666C18.203.523 16.421 0 14.5 0v2zm3.5.253v13h2v-13h-2zm1.553 12.167C18.203 13.523 16.421 13 14.5 13v2c1.573 0 2.961.431 3.947 1.086l1.107-1.666zM14.5 13c-1.92 0-3.703.523-5.053 1.42l1.107 1.666C11.539 15.431 12.928 15 14.5 15v-2z" }, null, -1)
  ]));
}
const DocumentationIcon = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$4]]);
const _sfc_main$5 = {};
const _hoisted_1$3 = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  "aria-hidden": "true",
  role: "img",
  class: "iconify iconify--mdi",
  width: "24",
  height: "24",
  preserveAspectRatio: "xMidYMid meet",
  viewBox: "0 0 24 24"
};
function _sfc_render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$3, _cache[0] || (_cache[0] = [
    createBaseVNode("path", {
      d: "M20 18v-4h-3v1h-2v-1H9v1H7v-1H4v4h16M6.33 8l-1.74 4H7v-1h2v1h6v-1h2v1h2.41l-1.74-4H6.33M9 5v1h6V5H9m12.84 7.61c.1.22.16.48.16.8V18c0 .53-.21 1-.6 1.41c-.4.4-.85.59-1.4.59H4c-.55 0-1-.19-1.4-.59C2.21 19 2 18.53 2 18v-4.59c0-.32.06-.58.16-.8L4.5 7.22C4.84 6.41 5.45 6 6.33 6H7V5c0-.55.18-1 .57-1.41C7.96 3.2 8.44 3 9 3h6c.56 0 1.04.2 1.43.59c.39.41.57.86.57 1.41v1h.67c.88 0 1.49.41 1.83 1.22l2.34 5.39z",
      fill: "currentColor"
    }, null, -1)
  ]));
}
const ToolingIcon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$3]]);
const _sfc_main$4 = {};
const _hoisted_1$2 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "18",
  height: "20",
  fill: "currentColor"
};
function _sfc_render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$2, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M11.447 8.894a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm0 1.789a1 1 0 1 0 .894-1.789l-.894 1.789zM7.447 7.106a1 1 0 1 0-.894 1.789l.894-1.789zM10 9a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0H8zm9.447-5.606a1 1 0 1 0-.894-1.789l.894 1.789zm-2.894-.789a1 1 0 1 0 .894 1.789l-.894-1.789zm2 .789a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zM18 5a1 1 0 1 0-2 0h2zm-2 2.5a1 1 0 1 0 2 0h-2zm-5.447-4.606a1 1 0 1 0 .894-1.789l-.894 1.789zM9 1l.447-.894a1 1 0 0 0-.894 0L9 1zm-2.447.106a1 1 0 1 0 .894 1.789l-.894-1.789zm-6 3a1 1 0 1 0 .894 1.789L.553 4.106zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zm-2-.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 2.789a1 1 0 1 0 .894-1.789l-.894 1.789zM2 5a1 1 0 1 0-2 0h2zM0 7.5a1 1 0 1 0 2 0H0zm8.553 12.394a1 1 0 1 0 .894-1.789l-.894 1.789zm-1.106-2.789a1 1 0 1 0-.894 1.789l.894-1.789zm1.106 1a1 1 0 1 0 .894 1.789l-.894-1.789zm2.894.789a1 1 0 1 0-.894-1.789l.894 1.789zM8 19a1 1 0 1 0 2 0H8zm2-2.5a1 1 0 1 0-2 0h2zm-7.447.394a1 1 0 1 0 .894-1.789l-.894 1.789zM1 15H0a1 1 0 0 0 .553.894L1 15zm1-2.5a1 1 0 1 0-2 0h2zm12.553 2.606a1 1 0 1 0 .894 1.789l-.894-1.789zM17 15l.447.894A1 1 0 0 0 18 15h-1zm1-2.5a1 1 0 1 0-2 0h2zm-7.447-5.394l-2 1 .894 1.789 2-1-.894-1.789zm-1.106 1l-2-1-.894 1.789 2 1 .894-1.789zM8 9v2.5h2V9H8zm8.553-4.894l-2 1 .894 1.789 2-1-.894-1.789zm.894 0l-2-1-.894 1.789 2 1 .894-1.789zM16 5v2.5h2V5h-2zm-4.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zm-2.894-1l-2 1 .894 1.789 2-1L8.553.106zM1.447 5.894l2-1-.894-1.789-2 1 .894 1.789zm-.894 0l2 1 .894-1.789-2-1-.894 1.789zM0 5v2.5h2V5H0zm9.447 13.106l-2-1-.894 1.789 2 1 .894-1.789zm0 1.789l2-1-.894-1.789-2 1 .894 1.789zM10 19v-2.5H8V19h2zm-6.553-3.894l-2-1-.894 1.789 2 1 .894-1.789zM2 15v-2.5H0V15h2zm13.447 1.894l2-1-.894-1.789-2 1 .894 1.789zM18 15v-2.5h-2V15h2z" }, null, -1)
  ]));
}
const EcosystemIcon = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2]]);
const _sfc_main$3 = {};
const _hoisted_1$1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M15 4a1 1 0 1 0 0 2V4zm0 11v-1a1 1 0 0 0-1 1h1zm0 4l-.707.707A1 1 0 0 0 16 19h-1zm-4-4l.707-.707A1 1 0 0 0 11 14v1zm-4.707-1.293a1 1 0 0 0-1.414 1.414l1.414-1.414zm-.707.707l-.707-.707.707.707zM9 11v-1a1 1 0 0 0-.707.293L9 11zm-4 0h1a1 1 0 0 0-1-1v1zm0 4H4a1 1 0 0 0 1.707.707L5 15zm10-9h2V4h-2v2zm2 0a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2zm1 1v6h2V7h-2zm0 6a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2zm-1 1h-2v2h2v-2zm-3 1v4h2v-4h-2zm1.707 3.293l-4-4-1.414 1.414 4 4 1.414-1.414zM11 14H7v2h4v-2zm-4 0c-.276 0-.525-.111-.707-.293l-1.414 1.414C5.42 15.663 6.172 16 7 16v-2zm-.707 1.121l3.414-3.414-1.414-1.414-3.414 3.414 1.414 1.414zM9 12h4v-2H9v2zm4 0a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2zm3-3V3h-2v6h2zm0-6a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2zm-3-3H3v2h10V0zM3 0a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V0zM0 3v6h2V3H0zm0 6a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1H0zm3 3h2v-2H3v2zm1-1v4h2v-4H4zm1.707 4.707l.586-.586-1.414-1.414-.586.586 1.414 1.414z" }, null, -1)
  ]));
}
const CommunityIcon = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1]]);
const _sfc_main$2 = {};
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  fill: "currentColor"
};
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1, _cache[0] || (_cache[0] = [
    createBaseVNode("path", { d: "M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.666.105 5.5 5.5 0 0 0-.114 7.665L10 18.78l8.39-8.4a5.5 5.5 0 0 0-.114-7.665 5.5 5.5 0 0 0-7.666-.105l-.61.61z" }, null, -1)
  ]));
}
const SupportIcon = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render]]);
const _sfc_main$1 = {
  __name: "TheWelcome",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _cache[5] || (_cache[5] = createBaseVNode("p", null, null, -1)),
        _cache[6] || (_cache[6] = createBaseVNode("p", null, null, -1)),
        createVNode(WelcomeItem, null, {
          icon: withCtx(() => [
            createVNode(DocumentationIcon)
          ]),
          heading: withCtx(() => _cache[0] || (_cache[0] = [
            createTextVNode("RGPD")
          ])),
          _: 1
        }),
        _cache[7] || (_cache[7] = createBaseVNode("p", null, null, -1)),
        _cache[8] || (_cache[8] = createBaseVNode("p", null, null, -1)),
        createVNode(WelcomeItem, null, {
          icon: withCtx(() => [
            createVNode(ToolingIcon)
          ]),
          heading: withCtx(() => _cache[1] || (_cache[1] = [
            createTextVNode("portfolio")
          ])),
          _: 1
        }),
        _cache[9] || (_cache[9] = createBaseVNode("p", null, null, -1)),
        _cache[10] || (_cache[10] = createBaseVNode("p", null, null, -1)),
        _cache[11] || (_cache[11] = createBaseVNode("p", null, null, -1)),
        _cache[12] || (_cache[12] = createBaseVNode("p", null, null, -1)),
        createVNode(WelcomeItem, null, {
          icon: withCtx(() => [
            createVNode(EcosystemIcon)
          ]),
          heading: withCtx(() => _cache[2] || (_cache[2] = [
            createTextVNode("Ecosystem")
          ])),
          _: 1
        }),
        _cache[13] || (_cache[13] = createBaseVNode("p", null, null, -1)),
        _cache[14] || (_cache[14] = createBaseVNode("p", null, null, -1)),
        createVNode(WelcomeItem, null, {
          icon: withCtx(() => [
            createVNode(CommunityIcon)
          ]),
          heading: withCtx(() => _cache[3] || (_cache[3] = [
            createTextVNode("Community")
          ])),
          _: 1
        }),
        _cache[15] || (_cache[15] = createBaseVNode("p", null, null, -1)),
        _cache[16] || (_cache[16] = createBaseVNode("p", null, null, -1)),
        createVNode(WelcomeItem, null, {
          icon: withCtx(() => [
            createVNode(SupportIcon)
          ]),
          heading: withCtx(() => _cache[4] || (_cache[4] = [
            createTextVNode("Support Vue")
          ])),
          _: 1
        })
      ], 64);
    };
  }
};
const _sfc_main = {
  __name: "HomeView",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("main", null, [
        _cache[0] || (_cache[0] = createTextVNode(" bien le bonjour voici mes différent projet ")),
        createVNode(_sfc_main$1)
      ]);
    };
  }
};
export {
  _sfc_main as default
};