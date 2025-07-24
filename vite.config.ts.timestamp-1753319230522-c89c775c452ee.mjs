// vite.config.ts
import { resolve } from "path";
import { defineConfig } from "file:///Users/dasadishree/Desktop/techfluences/TechfluencesDemo/node_modules/vite/dist/node/index.js";
import react from "file:///Users/dasadishree/Desktop/techfluences/TechfluencesDemo/node_modules/@vitejs/plugin-react/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/dasadishree/Desktop/techfluences/TechfluencesDemo";
var root = resolve(__vite_injected_original_dirname, "src");
var outDir = resolve(__vite_injected_original_dirname, "dist");
var vite_config_default = defineConfig({
  root,
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        blog: resolve(root, "blogpage.html"),
        blogjs: resolve(root, "blog.tsx"),
        team: resolve(root, "team.html"),
        spotlight: resolve(root, "spotlight.html"),
        resources: resolve(root, "resources.html"),
        tutorial: resolve(root, "tutorial.html"),
        "valentine": resolve(root, "tutorial-pages/valentine.html"),
        "pythonbasics": resolve(root, "tutorial-pages/pythonbasics.html"),
        "cybersecurity-catastrophe": resolve(root, "blog-pages/cybersecurity-catastrophe.html"),
        "history-of-coding": resolve(root, "blog-pages/history-of-coding.html"),
        "web-dev-basics": resolve(root, "blog-pages/web-dev-basics.html"),
        "history-of-debugging": resolve(root, "blog-pages/history-of-debugging.html"),
        "cybersecurity-basics": resolve(root, "blog-pages/cybersecurity-basics.html"),
        "ai-glow-up": resolve(root, "blog-pages/ai-glow-up.html"),
        "women-in-tech": resolve(root, "blog-pages/women-in-tech.html"),
        "grace-hopper": resolve(root, "blog-pages/grace-hopper.html"),
        "data-privacy": resolve(root, "blog-pages/data-privacy.html"),
        "reshma-saujani": resolve(root, "blog-pages/reshma-saujani.html"),
        "ethical-hacking": resolve(root, "blog-pages/ethical-hacking.html")
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFzYWRpc2hyZWUvRGVza3RvcC90ZWNoZmx1ZW5jZXMvVGVjaGZsdWVuY2VzRGVtb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Rhc2FkaXNocmVlL0Rlc2t0b3AvdGVjaGZsdWVuY2VzL1RlY2hmbHVlbmNlc0RlbW8vdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Rhc2FkaXNocmVlL0Rlc2t0b3AvdGVjaGZsdWVuY2VzL1RlY2hmbHVlbmNlc0RlbW8vdml0ZS5jb25maWcudHNcIjtpbXBvcnQge3Jlc29sdmV9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuXG5jb25zdCByb290ID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKVxuY29uc3Qgb3V0RGlyID0gcmVzb2x2ZShfX2Rpcm5hbWUsICdkaXN0Jylcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290LCBcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBidWlsZDp7XG4gICAgb3V0RGlyLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIHJvbGx1cE9wdGlvbnM6e1xuICAgICAgaW5wdXQ6e1xuICAgICAgICBtYWluOiByZXNvbHZlKHJvb3QsICdpbmRleC5odG1sJyksXG4gICAgICAgIGJsb2c6IHJlc29sdmUocm9vdCwgJ2Jsb2dwYWdlLmh0bWwnKSxcbiAgICAgICAgYmxvZ2pzOiByZXNvbHZlKHJvb3QsICdibG9nLnRzeCcpLFxuICAgICAgICB0ZWFtOiByZXNvbHZlKHJvb3QsICd0ZWFtLmh0bWwnKSxcbiAgICAgICAgc3BvdGxpZ2h0OiByZXNvbHZlKHJvb3QsICdzcG90bGlnaHQuaHRtbCcpLFxuICAgICAgICByZXNvdXJjZXM6IHJlc29sdmUocm9vdCwgJ3Jlc291cmNlcy5odG1sJyksXG4gICAgICAgIHR1dG9yaWFsOiByZXNvbHZlKHJvb3QsICd0dXRvcmlhbC5odG1sJyksXG4gICAgICAgICd2YWxlbnRpbmUnOiByZXNvbHZlKHJvb3QsICd0dXRvcmlhbC1wYWdlcy92YWxlbnRpbmUuaHRtbCcpLFxuICAgICAgICAncHl0aG9uYmFzaWNzJzogcmVzb2x2ZShyb290LCAndHV0b3JpYWwtcGFnZXMvcHl0aG9uYmFzaWNzLmh0bWwnKSxcbiAgICAgICAgJ2N5YmVyc2VjdXJpdHktY2F0YXN0cm9waGUnOiByZXNvbHZlKHJvb3QsICdibG9nLXBhZ2VzL2N5YmVyc2VjdXJpdHktY2F0YXN0cm9waGUuaHRtbCcpLFxuICAgICAgICAnaGlzdG9yeS1vZi1jb2RpbmcnOiByZXNvbHZlKHJvb3QsICdibG9nLXBhZ2VzL2hpc3Rvcnktb2YtY29kaW5nLmh0bWwnKSxcbiAgICAgICAgJ3dlYi1kZXYtYmFzaWNzJzogcmVzb2x2ZShyb290LCAnYmxvZy1wYWdlcy93ZWItZGV2LWJhc2ljcy5odG1sJyksXG4gICAgICAgICdoaXN0b3J5LW9mLWRlYnVnZ2luZyc6IHJlc29sdmUocm9vdCwgJ2Jsb2ctcGFnZXMvaGlzdG9yeS1vZi1kZWJ1Z2dpbmcuaHRtbCcpLFxuICAgICAgICAnY3liZXJzZWN1cml0eS1iYXNpY3MnOiByZXNvbHZlKHJvb3QsICdibG9nLXBhZ2VzL2N5YmVyc2VjdXJpdHktYmFzaWNzLmh0bWwnKSxcbiAgICAgICAgJ2FpLWdsb3ctdXAnOiByZXNvbHZlKHJvb3QsICdibG9nLXBhZ2VzL2FpLWdsb3ctdXAuaHRtbCcpLFxuICAgICAgICAnd29tZW4taW4tdGVjaCc6IHJlc29sdmUocm9vdCwgJ2Jsb2ctcGFnZXMvd29tZW4taW4tdGVjaC5odG1sJyksXG4gICAgICAgICdncmFjZS1ob3BwZXInOiByZXNvbHZlKHJvb3QsICdibG9nLXBhZ2VzL2dyYWNlLWhvcHBlci5odG1sJyksXG4gICAgICAgICdkYXRhLXByaXZhY3knOiByZXNvbHZlKHJvb3QsICdibG9nLXBhZ2VzL2RhdGEtcHJpdmFjeS5odG1sJyksXG4gICAgICAgICdyZXNobWEtc2F1amFuaSc6IHJlc29sdmUocm9vdCwgJ2Jsb2ctcGFnZXMvcmVzaG1hLXNhdWphbmkuaHRtbCcpLFxuICAgICAgICAnZXRoaWNhbC1oYWNraW5nJzogcmVzb2x2ZShyb290LCAnYmxvZy1wYWdlcy9ldGhpY2FsLWhhY2tpbmcuaHRtbCcpXG4gICAgICB9XG4gICAgfVxuICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwVixTQUFRLGVBQWM7QUFDaFgsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxXQUFXO0FBRmxCLElBQU0sbUNBQW1DO0FBSXpDLElBQU0sT0FBTyxRQUFRLGtDQUFXLEtBQUs7QUFDckMsSUFBTSxTQUFTLFFBQVEsa0NBQVcsTUFBTTtBQUV4QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQjtBQUFBLEVBQ0EsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU07QUFBQSxJQUNKO0FBQUEsSUFDQSxhQUFhO0FBQUEsSUFDYixlQUFjO0FBQUEsTUFDWixPQUFNO0FBQUEsUUFDSixNQUFNLFFBQVEsTUFBTSxZQUFZO0FBQUEsUUFDaEMsTUFBTSxRQUFRLE1BQU0sZUFBZTtBQUFBLFFBQ25DLFFBQVEsUUFBUSxNQUFNLFVBQVU7QUFBQSxRQUNoQyxNQUFNLFFBQVEsTUFBTSxXQUFXO0FBQUEsUUFDL0IsV0FBVyxRQUFRLE1BQU0sZ0JBQWdCO0FBQUEsUUFDekMsV0FBVyxRQUFRLE1BQU0sZ0JBQWdCO0FBQUEsUUFDekMsVUFBVSxRQUFRLE1BQU0sZUFBZTtBQUFBLFFBQ3ZDLGFBQWEsUUFBUSxNQUFNLCtCQUErQjtBQUFBLFFBQzFELGdCQUFnQixRQUFRLE1BQU0sa0NBQWtDO0FBQUEsUUFDaEUsNkJBQTZCLFFBQVEsTUFBTSwyQ0FBMkM7QUFBQSxRQUN0RixxQkFBcUIsUUFBUSxNQUFNLG1DQUFtQztBQUFBLFFBQ3RFLGtCQUFrQixRQUFRLE1BQU0sZ0NBQWdDO0FBQUEsUUFDaEUsd0JBQXdCLFFBQVEsTUFBTSxzQ0FBc0M7QUFBQSxRQUM1RSx3QkFBd0IsUUFBUSxNQUFNLHNDQUFzQztBQUFBLFFBQzVFLGNBQWMsUUFBUSxNQUFNLDRCQUE0QjtBQUFBLFFBQ3hELGlCQUFpQixRQUFRLE1BQU0sK0JBQStCO0FBQUEsUUFDOUQsZ0JBQWdCLFFBQVEsTUFBTSw4QkFBOEI7QUFBQSxRQUM1RCxnQkFBZ0IsUUFBUSxNQUFNLDhCQUE4QjtBQUFBLFFBQzVELGtCQUFrQixRQUFRLE1BQU0sZ0NBQWdDO0FBQUEsUUFDaEUsbUJBQW1CLFFBQVEsTUFBTSxpQ0FBaUM7QUFBQSxNQUNwRTtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
