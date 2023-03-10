import Vue from "vue";
import SvgIcon from "@/components/SvgIcon"; // svg component

// register globally
Vue.component("svg-icon", SvgIcon);

const req = require.context("./svg", false, /\.svg$/);
const keys = req.keys();
keys.map((item) => req(item));
// const requireAll = (requireContext) =>
//   requireContext.keys().map(requireContext);
// requireAll(req);
