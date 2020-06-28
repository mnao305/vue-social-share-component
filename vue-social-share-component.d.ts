import Vue, { PluginFunction, VueConstructor } from 'vue'

interface InstallFunction extends PluginFunction<any> {
  installed?: boolean;
}

declare const VueSocialShareComponent: { install: InstallFunction }
export default VueSocialShareComponent

export const SocialShareComponent: VueConstructor<Vue>
export const SocialShareButton: VueConstructor<Vue>
