import { f as ref, o as onMounted, c as createElementBlock, b as createBaseVNode, e as createTextVNode, t as toDisplayString, r as renderSlot, a as openBlock } from "./index-DDtmJJxW.js";
const _hoisted_1 = { class: "about" };
const _hoisted_2 = { hidden: "true" };
const _sfc_main = {
  __name: "projectView",
  setup(__props) {
    const aboutContent = ref("");
    onMounted(() => {
      console.log(document.getElementsByClassName("about")["0"].attributes.getNamedItem("name").textContent.replace("/project", ""));
      fetch("/portfolio/" + document.getElementsByClassName("about")["0"].attributes.getNamedItem("name").textContent.replace("/project", "")).then((response) => response.text()).then((data) => document.getElementsByClassName("about")["0"].innerHTML = data).catch((error) => console.error(error));
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        _cache[0] || (_cache[0] = createBaseVNode("p", { class: "log" }, null, -1)),
        createTextVNode(" " + toDisplayString(aboutContent.value) + " ", 1),
        createBaseVNode("i", _hoisted_2, [
          renderSlot(_ctx.$slots, "name")
        ])
      ]);
    };
  }
};
export {
  _sfc_main as default
};