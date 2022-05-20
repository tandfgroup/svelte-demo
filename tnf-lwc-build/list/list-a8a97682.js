import { registerTemplate, sanitizeAttribute, registerDecorators, registerComponent, LightningElement, createElement } from '/lwc.js';

function stylesheet$3(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return ["@charset \"UTF-8\";article", shadowSelector, ",aside", shadowSelector, ",details", shadowSelector, ",figcaption", shadowSelector, ",figure", shadowSelector, ",footer", shadowSelector, ",header", shadowSelector, ",hgroup", shadowSelector, ",main", shadowSelector, ",menu", shadowSelector, ",nav", shadowSelector, ",section", shadowSelector, ",summary", shadowSelector, " {display: block;}audio", shadowSelector, ",canvas", shadowSelector, ",progress", shadowSelector, ",video", shadowSelector, " {display: inline-block;vertical-align: baseline;}audio:not([controls])", shadowSelector, " {display: none;height: 0;}template", shadowSelector, " {display: none;}a", shadowSelector, " {background-color: transparent;}a:active", shadowSelector, ",a:hover", shadowSelector, " {outline: 0;}abbr[title]", shadowSelector, " {border-bottom: 1px dotted;}b", shadowSelector, ",strong", shadowSelector, " {font-weight: bold;}dfn", shadowSelector, " {font-style: italic;}h1", shadowSelector, " {font-size: 2em;margin: 0.67em 0;}mark", shadowSelector, " {background: #ff0;color: #000;}small", shadowSelector, " {font-size: 80%;}sub", shadowSelector, ",sup", shadowSelector, " {font-size: 75%;line-height: 0;position: relative;vertical-align: baseline;}sup", shadowSelector, " {top: -0.5em;}sub", shadowSelector, " {bottom: -0.25em;}img", shadowSelector, " {border: 0;}figure", shadowSelector, " {margin: 1em 40px;}hr", shadowSelector, " {-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;height: 0;}pre", shadowSelector, " {overflow: auto;}code", shadowSelector, ",kbd", shadowSelector, ",pre", shadowSelector, ",samp", shadowSelector, " {font-family: monospace, monospace;font-size: 1em;}button", shadowSelector, ",input", shadowSelector, ",optgroup", shadowSelector, ",select", shadowSelector, ",textarea", shadowSelector, " {color: inherit;font: inherit;margin: 0;}button", shadowSelector, " {overflow: visible;}button", shadowSelector, ",select", shadowSelector, " {text-transform: none;}button", shadowSelector, ",input[type=\"button\"]", shadowSelector, ",input[type=\"reset\"]", shadowSelector, ",input[type=\"submit\"]", shadowSelector, " {-webkit-appearance: button;cursor: pointer;}button[disabled]", shadowSelector, ",input[disabled]", shadowSelector, " {cursor: default;}button", shadowSelector, "::-moz-focus-inner,input", shadowSelector, "::-moz-focus-inner {border: 0;padding: 0;}input", shadowSelector, " {line-height: normal;}input[type=\"checkbox\"]", shadowSelector, ",input[type=\"radio\"]", shadowSelector, " {-webkit-box-sizing: border-box;box-sizing: border-box;padding: 0;}input[type=\"number\"]", shadowSelector, "::-webkit-inner-spin-button,input[type=\"number\"]", shadowSelector, "::-webkit-outer-spin-button {height: auto;}input[type=\"search\"]", shadowSelector, " {-webkit-appearance: textfield;-moz-box-sizing: content-box;-webkit-box-sizing: content-box;box-sizing: content-box;}input[type=\"search\"]", shadowSelector, "::-webkit-search-cancel-button,input[type=\"search\"]", shadowSelector, "::-webkit-search-decoration {-webkit-appearance: none;}fieldset", shadowSelector, " {border: 1px solid #c0c0c0;margin: 0 2px;padding: 0.35em 0.625em 0.75em;}legend", shadowSelector, " {border: 0;padding: 0;}textarea", shadowSelector, " {overflow: auto;}optgroup", shadowSelector, " {font-weight: bold;}table", shadowSelector, " {border-collapse: collapse;border-spacing: 0;}td", shadowSelector, ",th", shadowSelector, " {padding: 0;}*", shadowSelector, ",*", shadowSelector, ":before,*", shadowSelector, ":after {-webkit-box-sizing: border-box;box-sizing: border-box;}", shadowSelector, "::-webkit-input-placeholder {color: #747474;font-weight: 400;opacity: 1;}", shadowSelector, "::-moz-placeholder {color: #747474;font-weight: 400;opacity: 1;}:-ms-input-placeholder", shadowSelector, " {color: #747474;font-weight: 400;opacity: 1;}", shadowSelector, "::-ms-input-placeholder {color: #747474;font-weight: 400;opacity: 1;}", shadowSelector, "::placeholder {color: #747474;font-weight: 400;opacity: 1;}", shadowSelector, "::-moz-selection {background: #d8e6fe;text-shadow: none;color: #181818;}", shadowSelector, "::selection {background: #d8e6fe;text-shadow: none;color: #181818;}h1", shadowSelector, ",h2", shadowSelector, ",h3", shadowSelector, ",h4", shadowSelector, ",h5", shadowSelector, ",h6", shadowSelector, ",p", shadowSelector, ",ol", shadowSelector, ",ul", shadowSelector, ",dl", shadowSelector, ",fieldset", shadowSelector, " {margin: 0;padding: 0;}dd", shadowSelector, ",figure", shadowSelector, " {margin: 0;}abbr[title]", shadowSelector, " {text-decoration: none;}abbr[title]", shadowSelector, ",fieldset", shadowSelector, ",hr", shadowSelector, " {border: 0;}hr", shadowSelector, " {padding: 0;}h1", shadowSelector, ",h2", shadowSelector, ",h3", shadowSelector, ",h4", shadowSelector, ",h5", shadowSelector, ",h6", shadowSelector, " {font-weight: inherit;font-size: 1em;}ol", shadowSelector, ",ul", shadowSelector, " {list-style: none;}a", shadowSelector, " {color: #0176d3;text-decoration: none;-webkit-transition: color 0.1s linear;transition: color 0.1s linear;}a:hover", shadowSelector, ",a:focus", shadowSelector, " {text-decoration: underline;color: #014486;}a:active", shadowSelector, " {color: #014486;}a", shadowSelector, ",button", shadowSelector, " {cursor: pointer;}b", shadowSelector, ",strong", shadowSelector, ",dfn", shadowSelector, " {font-weight: 700;}mark", shadowSelector, " {background-color: #fff03f;color: #181818;}abbr[title]", shadowSelector, " {cursor: help;}input[type=\"search\"]", shadowSelector, " {-webkit-box-sizing: border-box;box-sizing: border-box;}table", shadowSelector, " {width: 100%;}caption", shadowSelector, ",th", shadowSelector, ",td", shadowSelector, " {text-align: left;}hr", shadowSelector, " {display: block;margin: 2rem 0;border-top: 1px solid #e5e5e5;height: 1px;clear: both;}audio", shadowSelector, ",canvas", shadowSelector, ",iframe", shadowSelector, ",img", shadowSelector, ",svg", shadowSelector, ",video", shadowSelector, " {vertical-align: middle;}img", shadowSelector, " {max-width: 100%;height: auto;}.slds-accordion", shadowSelector, " {position: relative;}.slds-accordion__list-item", shadowSelector, " {border-top-width: var(--slds-c-accordion-sizing-border, var(--sds-c-accordion-sizing-border, 1px));border-top-style: solid;border-top-color: var(--slds-c-accordion-color-border, var(--sds-c-accordion-color-border, #e5e5e5));}.slds-accordion__list-item:first-child", shadowSelector, " {border-top: 0;}.slds-accordion__summary", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;margin-top: calc(\n var(--slds-c-accordion-section-spacing-block-start, var(--sds-c-accordion-section-spacing-block-start, 0.75rem)) *\n -1\n );margin-right: calc(\n var(--slds-c-accordion-section-spacing-inline-end, var(--sds-c-accordion-section-spacing-inline-end, 0.75rem)) * -1\n );margin-bottom: calc(\n var(--slds-c-accordion-section-spacing-block-end, var(--sds-c-accordion-section-spacing-block-end, 0.75rem)) * -1\n );margin-left: calc(\n var(--slds-c-accordion-section-spacing-inline-start, var(--sds-c-accordion-section-spacing-inline-start, 0.75rem)) *\n -1\n );padding-top: var(\n --slds-c-accordion-section-spacing-block-start,\n var(--sds-c-accordion-section-spacing-block-start, 0.75rem)\n );padding-right: var(\n --slds-c-accordion-section-spacing-inline-end,\n var(--sds-c-accordion-section-spacing-inline-end, 0.75rem)\n );padding-bottom: var(\n --slds-c-accordion-section-spacing-block-end,\n var(--sds-c-accordion-section-spacing-block-end, 0.75rem)\n );padding-left: var(\n --slds-c-accordion-section-spacing-inline-start,\n var(--sds-c-accordion-section-spacing-inline-start, 0.75rem)\n );background-color: var(\n --slds-c-accordion-summary-color-background,\n var(--sds-c-accordion-summary-color-background, transparent)\n );}.slds-accordion__summary-heading", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;min-width: 0;color: var(--slds-c-accordion-heading-text-color, var(--sds-c-accordion-heading-text-color, #181818));font-size: var(--slds-c-accordion-heading-font-size, var(--sds-c-accordion-heading-font-size, 1rem));line-height: var(--slds-c-accordion-heading-line-height, var(--sds-c-accordion-heading-line-height, 1.25));}.slds-accordion__summary-heading", shadowSelector, " .slds-button:focus", shadowSelector, " {text-decoration: underline;-webkit-box-shadow: none;box-shadow: none;}.slds-accordion__summary-action", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;-webkit-box-align: center;-ms-flex-align: center;align-items: center;min-width: 0;margin-top: calc(\n var(--slds-c-accordion-section-spacing-block-start, var(--sds-c-accordion-section-spacing-block-start, 0.75rem)) *\n -1\n );margin-right: calc(\n var(--slds-c-accordion-section-spacing-inline-end, var(--sds-c-accordion-section-spacing-inline-end, 0.75rem)) * -1\n );margin-bottom: calc(\n var(--slds-c-accordion-section-spacing-block-end, var(--sds-c-accordion-section-spacing-block-end, 0.75rem)) * -1\n );margin-left: calc(\n var(--slds-c-accordion-section-spacing-inline-start, var(--sds-c-accordion-section-spacing-inline-start, 0.75rem)) *\n -1\n );padding-top: var(\n --slds-c-accordion-section-spacing-block-start,\n var(--sds-c-accordion-section-spacing-block-start, 0.75rem)\n );padding-right: var(\n --slds-c-accordion-section-spacing-inline-end,\n var(--sds-c-accordion-section-spacing-inline-end, 0.75rem)\n );padding-bottom: var(\n --slds-c-accordion-section-spacing-block-end,\n var(--sds-c-accordion-section-spacing-block-end, 0.75rem)\n );padding-left: var(\n --slds-c-accordion-section-spacing-inline-start,\n var(--sds-c-accordion-section-spacing-inline-start, 0.75rem)\n );}.slds-accordion__summary-action:hover", shadowSelector, ",.slds-accordion__summary-action:focus", shadowSelector, " {color: var(--sds-c-accordion-heading-text-color-hover, var(--sds-c-accordion-heading-text-color-hover, #014486));}.slds-accordion__summary-action-icon", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;-webkit-transform: rotate(-90deg);transform: rotate(-90deg);}[dir=\"rtl\"]", shadowSelector, " .slds-accordion__summary-action-icon", shadowSelector, " {-webkit-transform: rotate(90deg);transform: rotate(90deg);}@media (min-width: 64em) {.slds-accordion__summary-content", shadowSelector, " {max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}}.slds-accordion__section", shadowSelector, " {padding-top: var(\n --slds-c-accordion-section-spacing-block-start,\n var(--sds-c-accordion-section-spacing-block-start, 0.75rem)\n );padding-right: var(\n --slds-c-accordion-section-spacing-inline-end,\n var(--sds-c-accordion-section-spacing-inline-end, 0.75rem)\n );padding-bottom: var(\n --slds-c-accordion-section-spacing-block-end,\n var(--sds-c-accordion-section-spacing-block-end, 0.75rem)\n );padding-left: var(\n --slds-c-accordion-section-spacing-inline-start,\n var(--sds-c-accordion-section-spacing-inline-start, 0.75rem)\n );}.slds-accordion__content", shadowSelector, " {overflow: hidden;visibility: hidden;opacity: 0;height: 0;}.slds-is-open", shadowSelector, " > .slds-accordion__summary", shadowSelector, " {margin-bottom: 0;}.slds-is-open", shadowSelector, " > .slds-accordion__summary", shadowSelector, " .slds-accordion__summary-action-icon", shadowSelector, " {-webkit-transform: rotate(0deg);transform: rotate(0deg);}.slds-is-open", shadowSelector, " > .slds-accordion__content", shadowSelector, " {overflow: visible;visibility: visible;opacity: 1;height: auto;}.slds-avatar", shadowSelector, " {width: 2rem;height: 2rem;overflow: hidden;display: inline-block;vertical-align: middle;border-radius: var(--slds-c-avatar-radius-border, var(--sds-c-avatar-radius-border, 0.25rem));line-height: 1;font-size: 0.875rem;color: var(--slds-c-avatar-text-color, var(--sds-c-avatar-text-color, white));}.slds-avatar:hover", shadowSelector, ",.slds-avatar:focus:hover", shadowSelector, " {color: var(--slds-c-avatar-text-color-hover, currentColor);}.slds-avatar.slds-avatar_group-image-small", shadowSelector, " {background: url(\"/assets/images/group_avatar_96.png\") top left/cover no-repeat;}.slds-avatar.slds-avatar_group-image-medium", shadowSelector, " {background: url(\"/assets/images/group_avatar_160.png\") top left/cover no-repeat;}.slds-avatar.slds-avatar_group-image-large", shadowSelector, " {background: url(\"/assets/images/group_avatar_200.png\") top left/cover no-repeat;}.slds-avatar.slds-avatar_profile-image-small", shadowSelector, " {background: url(\"/assets/images/profile_avatar_96.png\") top left/cover no-repeat;}.slds-avatar.slds-avatar_profile-image-medium", shadowSelector, " {background: url(\"/assets/images/profile_avatar_160.png\") top left/cover no-repeat;}.slds-avatar.slds-avatar_profile-image-large", shadowSelector, " {background: url(\"/assets/images/profile_avatar_200.png\") top left/cover no-repeat;}.slds-avatar_x-small", shadowSelector, " {width: 1.25rem;height: 1.25rem;font-size: 0.625rem;}.slds-avatar_x-small", shadowSelector, " .slds-icon", shadowSelector, " {width: 1.25rem;height: 1.25rem;}.slds-avatar_small", shadowSelector, " {width: 1.5rem;height: 1.5rem;font-size: 0.625rem;}.slds-avatar_small", shadowSelector, " .slds-icon", shadowSelector, " {width: 1.5rem;height: 1.5rem;}.slds-avatar_medium", shadowSelector, " {width: 2rem;height: 2rem;font-size: 0.875rem;}.slds-avatar_medium", shadowSelector, " .slds-icon", shadowSelector, " {width: 2rem;height: 2rem;}.slds-avatar_large", shadowSelector, " {width: 3rem;height: 3rem;font-size: 1.125rem;line-height: 1.25;}.slds-avatar_large", shadowSelector, " .slds-icon", shadowSelector, " {width: 3rem;height: 3rem;}.slds-avatar_circle", shadowSelector, " {border-radius: 50%;}.slds-avatar_empty", shadowSelector, " {border: 1px dashed #e5e5e5;}.slds-avatar__initials", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-ms-flex-line-pack: center;align-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin: auto;color: var(--slds-c-avatar-initials-text-color, var(--sds-c-avatar-initials-text-color));height: 100%;text-shadow: 0 0 1px rgba(0, 0, 0, 0.8);}.slds-avatar__initials[title]", shadowSelector, " {cursor: default;text-decoration: none;}.slds-avatar__initials:hover", shadowSelector, " {color: var(--slds-c-avatar-initials-text-color-hover, var(--sds-c-avatar-initials-text-color-hover, white));cursor: default;}.slds-avatar__initials_inverse", shadowSelector, " {--slds-c-avatar-initials-text-color: var(--slds-c-avatar-initials-inverse-text-color, #444444);background-color: #f3f3f3;text-shadow: none;}.slds-avatar__initials_inverse:hover", shadowSelector, " {--slds-c-avatar-initials-text-color-hover: var(--slds-c-avatar-initials-inverse-text-color-hover, #444444);}.slds-badge", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;padding: 0.25rem 0.5rem;color: var(--slds-c-badge-text-color, var(--sds-c-badge-text-color, #181818));font-size: var(--slds-c-badge-font-size, var(--sds-c-badge-font-size, 0.75rem));font-weight: 700;line-height: var(--slds-c-badge-line-height, var(--sds-c-badge-line-height, normal));white-space: nowrap;border-width: var(--slds-c-badge-sizing-border, var(--sds-c-badge-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-badge-color-border, var(--sds-c-badge-color-border, transparent));border-radius: var(--slds-c-badge-radius-border, var(--sds-c-badge-radius-border, 15rem));background-color: var(--slds-c-badge-color-background, var(--sds-c-badge-color-background, #f3f3f3));}.slds-badge", shadowSelector, " + .slds-badge", shadowSelector, " {margin-left: 0.5rem;}.slds-badge:empty", shadowSelector, " {padding: 0;}.slds-badge_inverse", shadowSelector, " {--slds-c-badge-color-background: var(\n --slds-c-badge-inverse-color-background,\n var(--sds-c-badge-inverse-color-background, #747474)\n );--slds-c-badge-text-color: var(--slds-c-badge-inverse-text-color, var(--sds-c-badge-inverse-text-color, white));}.slds-badge_lightest", shadowSelector, " {--slds-c-badge-color-background: var(\n --slds-c-badge-lightest-color-background,\n var(--sds-c-badge-lightest-color-background, white)\n );--slds-c-badge-color-border: var(\n --slds-c-badge-lightest-color-border,\n var(--sds-c-badge-lightest-color-border, #e5e5e5)\n );}.slds-badge__icon", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;color: var(--slds-c-badge-icon-color-foreground, var(--sds-c-badge-icon-color-foreground, #747474));line-height: 1;vertical-align: middle;}.slds-badge__icon.slds-badge__icon_inverse", shadowSelector, " {--slds-c-badge-icon-color-foreground: var(--slds-c-badge-icon-inverse-color-foreground, currentColor);}.slds-badge__icon_left", shadowSelector, " {margin-right: 0.25rem;}.slds-badge__icon_right", shadowSelector, " {margin-left: 0.25rem;}.slds-breadcrumb", shadowSelector, " {}.slds-breadcrumb", shadowSelector, " .slds-list__item", shadowSelector, ",.slds-breadcrumb", shadowSelector, " .slds-breadcrumb__item", shadowSelector, " {position: relative;}.slds-breadcrumb", shadowSelector, " .slds-list__item", shadowSelector, ":before,.slds-breadcrumb", shadowSelector, " .slds-breadcrumb__item", shadowSelector, ":before {content: \">\";position: absolute;left: -0.25rem;}.slds-breadcrumb", shadowSelector, " .slds-list__item", shadowSelector, " > a", shadowSelector, ",.slds-breadcrumb", shadowSelector, " .slds-breadcrumb__item", shadowSelector, " > a", shadowSelector, " {display: block;padding-top: 0;padding-right: var(--slds-c-breadcrumbs-spacing-inline-end, var(--sds-c-breadcrumbs-spacing-inline-end, 0.5rem));padding-bottom: 0;padding-left: var(--slds-c-breadcrumbs-spacing-inline-start, var(--sds-c-breadcrumbs-spacing-inline-start, 0.5rem));}.slds-breadcrumb", shadowSelector, " .slds-list__item", shadowSelector, " > a:hover", shadowSelector, ",.slds-breadcrumb", shadowSelector, " .slds-breadcrumb__item", shadowSelector, " > a:hover", shadowSelector, " {text-decoration: none;}.slds-breadcrumb", shadowSelector, " .slds-list__item:first-child", shadowSelector, " > a", shadowSelector, ",.slds-breadcrumb", shadowSelector, " .slds-breadcrumb__item:first-child", shadowSelector, " > a", shadowSelector, " {--slds-c-breadcrumbs-spacing-inline-start: 0;}.slds-breadcrumb", shadowSelector, " .slds-list__item:first-child", shadowSelector, ":before,.slds-breadcrumb", shadowSelector, " .slds-breadcrumb__item:first-child", shadowSelector, ":before {content: \"\";}.slds-breadcrumb", shadowSelector, " .slds-dropdown-trigger", shadowSelector, " {margin-right: var(--slds-c-breadcrumbs-spacing-inline-end, var(--sds-c-breadcrumbs-spacing-inline-end, 0.5rem));}.slds-button-group", shadowSelector, ",.slds-button-group-list", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-button-group", shadowSelector, " .slds-button", shadowSelector, ",.slds-button-group-list", shadowSelector, " .slds-button", shadowSelector, " {border-radius: 0;border-width: 1px;}.slds-button-group", shadowSelector, " .slds-button:focus", shadowSelector, ",.slds-button-group-list", shadowSelector, " .slds-button:focus", shadowSelector, " {z-index: 1;}.slds-button-group", shadowSelector, " .slds-button", shadowSelector, " + .slds-button", shadowSelector, ",.slds-button-group", shadowSelector, " .slds-button", shadowSelector, " + .slds-button_last", shadowSelector, " .slds-button", shadowSelector, ",.slds-button-group-list", shadowSelector, " li", shadowSelector, " + li", shadowSelector, " .slds-button", shadowSelector, " {margin-left: -1px;}.slds-button-group", shadowSelector, " .slds-button_brand", shadowSelector, " + .slds-button_last", shadowSelector, " .slds-button_icon-brand", shadowSelector, ",.slds-button-group-list", shadowSelector, " li:last-child", shadowSelector, " .slds-button_icon-brand", shadowSelector, " {-webkit-box-shadow: inset 1px 0 0 white;box-shadow: inset 1px 0 0 white;}.slds-button-group-list", shadowSelector, " li:first-child", shadowSelector, " .slds-button", shadowSelector, ",.slds-button-group", shadowSelector, " .slds-button:first-child", shadowSelector, " {border-radius: 0.25rem 0 0 0.25rem;}.slds-button-group", shadowSelector, " .slds-button:last-child", shadowSelector, ",.slds-button-group-list", shadowSelector, " li:last-child", shadowSelector, " .slds-button", shadowSelector, ",.slds-button-group", shadowSelector, " .slds-button_last", shadowSelector, " .slds-button", shadowSelector, ",.slds-button-group", shadowSelector, " .slds-button.slds-button_last", shadowSelector, ",.slds-button-group", shadowSelector, " .slds-button_last", shadowSelector, " .slds-button:only-child", shadowSelector, ",.slds-button-group", shadowSelector, " .slds-button.slds-button_last", shadowSelector, " {border-radius: 0 0.25rem 0.25rem 0;}.slds-button-group", shadowSelector, " .slds-button:only-child", shadowSelector, ",.slds-button-group-list", shadowSelector, " li:only-child", shadowSelector, " .slds-button", shadowSelector, " {border-radius: 0.25rem;}.slds-button.slds-button_first.slds-button_first", shadowSelector, " {border-right: 0;border-radius: 0.25rem 0 0 0.25rem;}.slds-button.slds-button_middle.slds-button_middle", shadowSelector, " {border-radius: 0;margin-left: -1px;}.slds-button.slds-button_last.slds-button_last", shadowSelector, " {border-radius: 0 0.25rem 0.25rem 0;margin-left: -1px;}.slds-button-group", shadowSelector, " + .slds-button-group", shadowSelector, ",.slds-button-group", shadowSelector, " + .slds-button-group-list", shadowSelector, ",.slds-button-group", shadowSelector, " + .slds-button", shadowSelector, ",.slds-button-group-list", shadowSelector, " + .slds-button-group-list", shadowSelector, ",.slds-button-group-list", shadowSelector, " + .slds-button-group", shadowSelector, ",.slds-button-group-list", shadowSelector, " + .slds-button", shadowSelector, " {margin-left: 0.25rem;}.slds-button-group-row", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-button-group-row", shadowSelector, " .slds-button-group-item", shadowSelector, " + .slds-button-group-item", shadowSelector, " {margin-left: 0.25rem;}.slds-button-group-row", shadowSelector, " .slds-button-group-item", shadowSelector, " .slds-button", shadowSelector, " {margin: 0;}.slds-button_icon", shadowSelector, ",.slds-button_icon-inverse", shadowSelector, ",.slds-button_icon-container", shadowSelector, ",.slds-button_icon-border", shadowSelector, ",.slds-button_icon-border-filled", shadowSelector, ",.slds-button_icon-border-inverse", shadowSelector, ",.slds-button_icon-more", shadowSelector, ",.slds-button_icon-error", shadowSelector, ",.slds-button_icon-warning", shadowSelector, " {line-height: 1;vertical-align: middle;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;color: #747474;-ms-flex-negative: 0;flex-shrink: 0;}.slds-button_icon-container", shadowSelector, ",.slds-button_icon-border", shadowSelector, ",.slds-button_icon-border-filled", shadowSelector, ",.slds-button_icon-border-inverse", shadowSelector, ",.slds-button_icon-brand", shadowSelector, ",.slds-button_icon-more", shadowSelector, ",.slds-button_icon-container-more", shadowSelector, " {width: 2rem;height: 2rem;}.slds-button_icon-border-filled", shadowSelector, ",.slds-button_icon-border", shadowSelector, " {line-height: 1;vertical-align: middle;color: #747474;border: 1px solid #c9c9c9;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;border-color: #c9c9c9;}.slds-button_icon-border-filled[disabled]", shadowSelector, ",.slds-button_icon-border-filled:disabled", shadowSelector, ",.slds-button_icon-border[disabled]", shadowSelector, ",.slds-button_icon-border:disabled", shadowSelector, " {color: #c9c9c9;border-color: #c9c9c9;}.slds-button_icon-border-inverse", shadowSelector, " {background-color: rgba(0, 0, 0, 0);border-color: #c9c9c9;}.slds-button_icon-border-inverse[disabled]", shadowSelector, ",.slds-button_icon-border-inverse:disabled", shadowSelector, " {background-color: rgba(0, 0, 0, 0);border-color: rgba(255, 255, 255, 0.15);}.slds-button_icon-brand", shadowSelector, " {background-color: #0176d3;border-color: #0176d3;color: white;}.slds-button_icon-brand:link", shadowSelector, ",.slds-button_icon-brand:visited", shadowSelector, ",.slds-button_icon-brand:active", shadowSelector, " {color: white;}.slds-button_icon-brand:hover", shadowSelector, ",.slds-button_icon-brand:focus", shadowSelector, " {background-color: #014486;border-color: #014486;color: white;}.slds-button_icon-brand:active", shadowSelector, " {background-color: #014486;border-color: #014486;}.slds-button_icon-brand[disabled]", shadowSelector, ",.slds-button_icon-brand:disabled", shadowSelector, " {background: #c9c7c5;border-color: #c9c7c5;color: white;}.slds-button_icon-border-filled", shadowSelector, " {background-color: white;}.slds-button_icon-border-filled[disabled]", shadowSelector, ",.slds-button_icon-border-filled:disabled", shadowSelector, " {border-color: #c9c9c9;background-color: white;}.slds-button_icon-inverse", shadowSelector, ",.slds-button_icon-border-inverse", shadowSelector, " {color: white;}.slds-button_icon-inverse:hover", shadowSelector, ",.slds-button_icon-inverse:focus", shadowSelector, ",.slds-button_icon-border-inverse:hover", shadowSelector, ",.slds-button_icon-border-inverse:focus", shadowSelector, " {color: rgba(255, 255, 255, 0.75);}.slds-button_icon-inverse:focus", shadowSelector, ",.slds-button_icon-border-inverse:focus", shadowSelector, " {outline: none;-webkit-box-shadow: 0 0 3px #f3f3f3;box-shadow: 0 0 3px #f3f3f3;border: 1px solid #f3f3f3;}.slds-button_icon-inverse:active", shadowSelector, ",.slds-button_icon-border-inverse:active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-button_icon-inverse[disabled]", shadowSelector, ",.slds-button_icon-inverse:disabled", shadowSelector, ",.slds-button_icon-border-inverse[disabled]", shadowSelector, ",.slds-button_icon-border-inverse:disabled", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-button_icon-error", shadowSelector, ",.slds-button_icon-error:hover", shadowSelector, ",.slds-button_icon-error:active", shadowSelector, ",.slds-button_icon-error:focus", shadowSelector, " {color: #ea001e;}.slds-button_icon-warning", shadowSelector, ",.slds-button_icon-warning:hover", shadowSelector, ",.slds-button_icon-warning:active", shadowSelector, ",.slds-button_icon-warning:focus", shadowSelector, " {color: #fe9339;}.slds-button_icon-current-color", shadowSelector, " {color: currentColor;}.slds-button_icon-large", shadowSelector, " {width: 3rem;height: 3rem;}.slds-button_icon-large", shadowSelector, " .slds-button__icon", shadowSelector, " {width: 1.5rem;height: 1.5rem;}.slds-button_icon-small", shadowSelector, " {width: 1.5rem;height: 1.5rem;}.slds-button_icon-x-small", shadowSelector, " {width: 1.25rem;height: 1.25rem;line-height: 1;}.slds-button_icon-x-small", shadowSelector, " .slds-button__icon", shadowSelector, " {width: 0.75rem;height: 0.75rem;}.slds-button_icon-xx-small", shadowSelector, " {width: 1rem;height: 1rem;line-height: 1;}.slds-button_icon-xx-small", shadowSelector, " .slds-button__icon", shadowSelector, " {width: 0.5rem;height: 0.5rem;}.slds-button_icon-more", shadowSelector, " {width: auto;line-height: 1.875rem;padding: 0 0.5rem;background-color: white;border-color: #c9c9c9;color: #747474;}.slds-button_icon-more:hover", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-more:focus", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: #0176d3;}.slds-button_icon-more:active", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: #014486;}.slds-button_icon-more[disabled]", shadowSelector, ",.slds-button_icon-more:disabled", shadowSelector, " {cursor: default;}.slds-button_icon-more[disabled]", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-more:disabled", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: #c9c9c9;}.slds-button_icon-container-more", shadowSelector, " {width: auto;line-height: 1.875rem;padding: 0 0.5rem;vertical-align: middle;}.slds-button__icon_hint", shadowSelector, " {fill: #aeaeae;}.slds-button__icon_inverse-hint", shadowSelector, " {fill: rgba(255, 255, 255, 0.5);}.slds-hint-parent", shadowSelector, " .slds-button_icon-border-inverse", shadowSelector, " {border-color: rgba(255, 255, 255, 0.5);}.slds-hint-parent", shadowSelector, " .slds-button_icon-border-inverse:focus", shadowSelector, " {border-color: rgba(255, 255, 255, 0.75);}.slds-hint-parent:hover", shadowSelector, " .slds-button_icon-border-inverse", shadowSelector, ",.slds-hint-parent:focus", shadowSelector, " .slds-button_icon-border-inverse", shadowSelector, " {border-color: rgba(255, 255, 255, 0.75);}.slds-hint-parent:hover", shadowSelector, " .slds-button__icon_hint", shadowSelector, ",.slds-hint-parent:focus", shadowSelector, " .slds-button__icon_hint", shadowSelector, " {fill: #747474;}.slds-hint-parent:hover", shadowSelector, " .slds-button__icon_inverse-hint", shadowSelector, ",.slds-hint-parent:focus", shadowSelector, " .slds-button__icon_inverse-hint", shadowSelector, " {fill: rgba(255, 255, 255, 0.75);}.slds-hint-parent:hover", shadowSelector, " .slds-button:disabled", shadowSelector, " .slds-button__icon_hint", shadowSelector, ",.slds-hint-parent:focus", shadowSelector, " .slds-button:disabled", shadowSelector, " .slds-button__icon_hint", shadowSelector, " {fill: currentColor;}.slds-button_icon-container.slds-is-selected", shadowSelector, ",.slds-button_icon-border.slds-is-selected", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected", shadowSelector, " {background-color: #0176d3;border-color: #0176d3;color: white;}.slds-button_icon-container.slds-is-selected:link", shadowSelector, ",.slds-button_icon-container.slds-is-selected:visited", shadowSelector, ",.slds-button_icon-container.slds-is-selected:active", shadowSelector, ",.slds-button_icon-border.slds-is-selected:link", shadowSelector, ",.slds-button_icon-border.slds-is-selected:visited", shadowSelector, ",.slds-button_icon-border.slds-is-selected:active", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:link", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:visited", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:active", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:link", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:visited", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:active", shadowSelector, " {color: white;}.slds-button_icon-container.slds-is-selected:hover", shadowSelector, ",.slds-button_icon-container.slds-is-selected:focus", shadowSelector, ",.slds-button_icon-border.slds-is-selected:hover", shadowSelector, ",.slds-button_icon-border.slds-is-selected:focus", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:hover", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:focus", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:hover", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:focus", shadowSelector, " {background-color: #014486;border-color: #014486;color: white;}.slds-button_icon-container.slds-is-selected:active", shadowSelector, ",.slds-button_icon-border.slds-is-selected:active", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:active", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:active", shadowSelector, " {background-color: #014486;border-color: #014486;}.slds-button_icon-container.slds-is-selected", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border.slds-is-selected", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: white;}.slds-button_icon-container.slds-is-selected:hover", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-container.slds-is-selected:focus", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border.slds-is-selected:hover", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border.slds-is-selected:focus", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:hover", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:focus", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:hover", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:focus", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: white;}.slds-button_icon-container.slds-is-selected[disabled]", shadowSelector, ",.slds-button_icon-container.slds-is-selected:disabled", shadowSelector, ",.slds-button_icon-border.slds-is-selected[disabled]", shadowSelector, ",.slds-button_icon-border.slds-is-selected:disabled", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected[disabled]", shadowSelector, ",.slds-button_icon-border-filled.slds-is-selected:disabled", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected[disabled]", shadowSelector, ",.slds-button_icon-border-inverse.slds-is-selected:disabled", shadowSelector, " {background: #c9c7c5;border-color: #c9c7c5;color: white;}.slds-button", shadowSelector, " {position: relative;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;padding-top: var(--slds-c-button-spacing-block-start, var(--sds-c-button-spacing-block-start, 0));padding-right: var(--slds-c-button-spacing-inline-end, var(--sds-c-button-spacing-inline-end, 0));padding-bottom: var(--slds-c-button-spacing-block-end, var(--sds-c-button-spacing-block-end, 0));padding-left: var(--slds-c-button-spacing-inline-start, var(--sds-c-button-spacing-inline-start, 0));background: none;background-color: var(--slds-c-button-color-background, var(--sds-c-button-color-background, transparent));background-clip: border-box;border-color: var(--slds-c-button-color-border, var(--sds-c-button-color-border, transparent));border-style: solid;border-width: var(--slds-c-button-sizing-border, var(--sds-c-button-sizing-border, 1px));border-radius: var(--slds-c-button-radius-border, var(--sds-c-button-radius-border, 0.25rem));-webkit-box-shadow: var(--slds-c-button-shadow, var(--sds-c-button-shadow));box-shadow: var(--slds-c-button-shadow, var(--sds-c-button-shadow));line-height: var(--slds-c-button-line-height, var(--sds-c-button-line-height, 1.875rem));text-decoration: none;color: var(--slds-c-button-text-color, var(--sds-c-button-text-color, #0176d3));-webkit-appearance: none;white-space: normal;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.slds-button:hover", shadowSelector, ",.slds-button:focus", shadowSelector, ",.slds-button:active", shadowSelector, ",.slds-button:visited", shadowSelector, " {text-decoration: none;}.slds-button:hover", shadowSelector, ",.slds-button:focus", shadowSelector, " {--slds-c-button-color-border: var(--slds-c-button-color-border-hover);--slds-c-button-color-background: var(--slds-c-button-color-background-hover);color: var(--slds-c-button-text-color-hover, var(--sds-c-button-text-color-hover, #014486));}.slds-button:focus", shadowSelector, " {-webkit-box-shadow: var(--slds-c-button-shadow-focus, var(--sds-c-button-shadow-focus, 0 0 3px #0176d3));box-shadow: var(--slds-c-button-shadow-focus, var(--sds-c-button-shadow-focus, 0 0 3px #0176d3));outline: 0;}.slds-button:active", shadowSelector, " {color: var(--slds-c-button-text-color-active, var(--sds-c-button-text-color-active, #014486));background-color: var(--slds-c-button-color-background-active);border-color: var(--slds-c-button-color-border-active);}.slds-button[disabled]", shadowSelector, ",.slds-button:disabled", shadowSelector, " {background-color: transparent;border-color: transparent;color: #c9c9c9;cursor: default;}.slds-button[disabled]", shadowSelector, " *", shadowSelector, ",.slds-button:disabled", shadowSelector, " *", shadowSelector, " {pointer-events: none;}.slds-button", shadowSelector, " a", shadowSelector, " {--slds-c-button-text-color: currentColor;}.slds-button:hover", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button:focus", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button:active", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button[disabled]", shadowSelector, " .slds-button__icon", shadowSelector, ",.slds-button:disabled", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: currentColor;pointer-events: none;}.slds-button", shadowSelector, " + .slds-button-group", shadowSelector, ",.slds-button", shadowSelector, " + .slds-button-group-list", shadowSelector, " {margin-left: 0.25rem;}.slds-button", shadowSelector, " + .slds-button", shadowSelector, " {margin-left: 0.25rem;}a.slds-button", shadowSelector, " {text-align: center;}a.slds-button:focus", shadowSelector, " {--slds-c-button-shadow-focus: var(--sds-c-button-shadow-focus, 0 0 3px #0176d3);outline: 0;}a.slds-button_brand:hover", shadowSelector, ",a", shadowSelector, " a.slds-button_brand:focus", shadowSelector, ",a.slds-button--brand:focus", shadowSelector, " {color: var(\n --slds-c-button-brand-text-color-hover,\n var(--sds-c-button-brand-text-color-hover, var(--slds-g-link-text-color-hover, white))\n );}a.slds-button_destructive:hover", shadowSelector, ",a", shadowSelector, " a.slds-button_destructive:focus", shadowSelector, ",a.slds-button--destructive:focus", shadowSelector, " {color: var(--slds-c-button-destructive-text-color, var(--sds-c-button-destructive-text-color, white));}a.slds-button_text-destructive:hover", shadowSelector, ",a.slds-button_text-destructive:focus", shadowSelector, " {color: var(\n --slds-c-button-text-destructive-text-color-hover,\n var(--sds-c-button-text-destructive-text-color-hover, #ba0517)\n );}a.slds-button_success:hover", shadowSelector, ",a", shadowSelector, " a.slds-button_success:focus", shadowSelector, ",a.slds-button--success:focus", shadowSelector, " {color: var(--slds-c-button-success-text-color-hover, var(--sds-c-button-success-text-color-hover, white));}a.slds-button_inverse:focus", shadowSelector, ",a.slds-button--inverse:focus", shadowSelector, " {--slds-c-button-color-border: var(\n --slds-c-button-inverse-color-border-focus,\n var(--sds-c-button-inverse-color-border-focus, #f3f3f3)\n );--slds-c-button-shadow: var(\n --slds-c-button-inverse-shadow-focus,\n var(--sds-c-button-inverse-shadow-focus, 0 0 3px #f3f3f3)\n );outline: none;}.slds-button_reset", shadowSelector, " {font-size: inherit;color: inherit;line-height: inherit;padding: 0;background: transparent;border: 0;text-align: inherit;}.slds-button_neutral", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-neutral-spacing-inline-start,\n var(--sds-c-button-neutral-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-neutral-spacing-inline-end,\n var(--sds-c-button-neutral-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-neutral-color-background,\n var(--sds-c-button-neutral-color-background, white)\n );--slds-c-button-color-border: var(\n --slds-c-button-neutral-color-border,\n var(--sds-c-button-neutral-color-border, #c9c9c9)\n );}.slds-button_neutral:hover", shadowSelector, ",.slds-button_neutral:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-neutral-color-background-hover,\n var(--sds-c-button-neutral-color-background-hover, #f3f3f3)\n );--slds-c-button-color-border-hover: var(\n --slds-c-button-neutral-color-border-hover,\n var(--sds-c-button-neutral-color-border-hover, #c9c9c9)\n );}.slds-button_neutral:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-neutral-color-background-active,\n var(--sds-c-button-neutral-color-background-active, #f3f3f3)\n );--slds-c-button-color-border-active: var(\n --slds-c-button-neutral-color-border-active,\n var(--sds-c-button-neutral-color-border-active, #c9c9c9)\n );}.slds-button_neutral[disabled]", shadowSelector, ",.slds-button_neutral:disabled", shadowSelector, " {background-color: white;border-color: #c9c9c9;}.slds-button_brand", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-brand-spacing-inline-start,\n var(--sds-c-button-brand-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-brand-spacing-inline-end,\n var(--sds-c-button-brand-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-brand-color-background,\n var(--sds-c-button-brand-color-background, #0176d3)\n );--slds-c-button-color-border: var(\n --slds-c-button-brand-color-border,\n var(--sds-c-button-brand-color-border, #0176d3)\n );--slds-c-button-text-color: var(--slds-c-button-brand-text-color, var(--sds-c-button-brand-text-color, white));}.slds-button_brand:hover", shadowSelector, ",.slds-button_brand:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-brand-color-background-hover,\n var(--sds-c-button-brand-color-background-hover, #014486)\n );--slds-c-button-color-border-hover: var(\n --slds-c-button-brand-color-border-hover,\n var(--sds-c-button-brand-color-border-hover, #014486)\n );--slds-c-button-text-color-hover: var(\n --slds-c-button-brand-text-color-hover,\n var(--sds-c-button-brand-text-color-hover, var(--slds-g-link-text-color-hover, white))\n );}.slds-button_brand:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-brand-color-background-active,\n var(--sds-c-button-brand-color-background-active, #014486)\n );--slds-c-button-color-border-active: var(\n --sds-c-button-brand-color-border-active,\n var(--sds-c-button-brand-color-border-active, #014486)\n );--slds-c-button-text-color-active: var(\n --slds-c-button-brand-text-color-active,\n var(--sds-c-button-brand-text-color-active, white)\n );}.slds-button_brand[disabled]", shadowSelector, ",.slds-button_brand:disabled", shadowSelector, " {background-color: #c9c7c5;border-color: #c9c7c5;color: white;}.slds-button_outline-brand", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-outline-brand-spacing-inline-start,\n var(--sds-c-button-outline-brand-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-outline-brand-spacing-inline-end,\n var(--sds-c-button-outline-brand-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-outline-brand-color-background,\n var(--sds-c-button-outline-brand-color-background, white)\n );--slds-c-button-color-border: var(\n --slds-c-button-outline-brand-color-border,\n var(--sds-c-button-outline-brand-color-border, #0176d3)\n );}.slds-button_outline-brand:hover", shadowSelector, ",.slds-button_outline-brand:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-outline-brand-color-background-hover,\n var(--sds-c-button-outline-brand-color-background-hover, #f3f3f3)\n );--slds-c-button-color-border-hover: var(\n --slds-c-button-outline-brand-color-border-hover,\n var(--sds-c-button-outline-brand-color-border-hover, #0176d3)\n );}.slds-button_outline-brand:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-outline-brand-color-background-active,\n var(--sds-c-button-outline-brand-color-background-active, #f3f3f3)\n );--slds-c-button-color-border-active: var(\n --sds-c-button-outline-brand-color-border-active,\n var(--sds-c-button-outline-brand-color-border-active, #0176d3)\n );}.slds-button_outline-brand[disabled]", shadowSelector, ",.slds-button_outline-brand:disabled", shadowSelector, " {background-color: white;border-color: #e5e5e5;}.slds-button_inverse", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-inverse-spacing-inline-start,\n var(--sds-c-button-inverse-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-inverse-spacing-inline-end,\n var(--sds-c-button-inverse-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-inverse-color-background,\n var(--sds-c-button-inverse-color-background, rgba(0, 0, 0, 0))\n );--slds-c-button-color-border: var(\n --slds-c-button-inverse-color-border,\n var(--sds-c-button-inverse-color-border, #c9c9c9)\n );}.slds-button_inverse:hover", shadowSelector, ",.slds-button_inverse:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-inverse-color-background-hover,\n var(--sds-c-button-inverse-color-background-hover, #f3f3f3)\n );--slds-c-button-color-border-hover: var(\n --slds-c-button-inverse-color-border-hover,\n var(--sds-c-button-inverse-color-border-hover, #c9c9c9)\n );}.slds-button_inverse:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-inverse-color-background-active,\n var(--sds-c-button-inverse-color-background-active, #f3f3f3)\n );--slds-c-button-color-border-active: var(\n --slds-c-button-inverse-color-border-active,\n var(--sds-c-button-inverse-color-border-active, #c9c9c9)\n );}.slds-button_inverse[disabled]", shadowSelector, ",.slds-button_inverse:disabled", shadowSelector, " {background-color: rgba(0, 0, 0, 0);border-color: rgba(255, 255, 255, 0.15);}.slds-button_inverse", shadowSelector, ",.slds-button_inverse:link", shadowSelector, ",.slds-button_inverse:visited", shadowSelector, ",.slds-button_icon-border-inverse", shadowSelector, ",.slds-button_icon-border-inverse:link", shadowSelector, ",.slds-button_icon-border-inverse:visited", shadowSelector, " {--slds-c-button-text-color: var(--slds-c-button-inverse-text-color, var(--sds-c-button-inverse-text-color, #f3f3f3));}.slds-button_inverse:hover", shadowSelector, ",.slds-button_inverse:focus", shadowSelector, ",.slds-button_icon-border-inverse:hover", shadowSelector, ",.slds-button_icon-border-inverse:focus", shadowSelector, " {--slds-c-button-text-color-hover: var(\n --slds-c-button-inverse-text-color-hover,\n var(--sds-c-button-inverse-text-color-hover, #0176d3)\n );}.slds-button_inverse:focus", shadowSelector, ",.slds-button_icon-border-inverse:focus", shadowSelector, " {--slds-c-button-shadow: var(\n --sds-c-button-inverse-shadow-focus,\n var(--sds-c-button-inverse-shadow-focus, 0 0 3px #f3f3f3)\n );--slds-c-button-color-border: #f3f3f3;outline: none;}.slds-button_inverse:active", shadowSelector, ",.slds-button_icon-border-inverse:active", shadowSelector, " {--slds-c-button-text-color-active: var(\n --slds-c-button-inverse-text-color-active,\n var(--sds-c-button-inverse-text-color-active, #0176d3)\n );}.slds-button_inverse[disabled]", shadowSelector, ",.slds-button_inverse:disabled", shadowSelector, ",.slds-button_icon-border-inverse[disabled]", shadowSelector, ",.slds-button_icon-border-inverse:disabled", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-button_destructive", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-destructive-spacing-inline-start,\n var(--sds-c-button-destructive-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-destructive-spacing-inline-end,\n var(--sds-c-button-destructive-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-destructive-color-background,\n var(--sds-c-button-destructive-color-background, #ba0517)\n );--slds-c-button-color-border: var(\n --slds-c-button-destructive-color-border,\n var(--sds-c-button-destructive-color-border, #ba0517)\n );--slds-c-button-text-color: var(\n --slds-c-button-destructive-text-color,\n var(--sds-c-button-destructive-text-color, white)\n );}.slds-button_destructive:hover", shadowSelector, ",.slds-button_destructive:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-destructive-color-background-hover,\n var(--sds-c-button-destructive-color-background-hover, #8e030f)\n );--slds-c-button-color-border-hover: var(\n --sds-c-button-destructive-color-border-hover,\n var(--sds-c-button-destructive-color-border-hover, #ba0517)\n );--slds-c-button-text-color-hover: var(\n --sds-c-button-destructive-text-color-hover,\n var(--sds-c-button-destructive-text-color-hover, white)\n );}.slds-button_destructive:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-destructive-color-background-active,\n var(--sds-c-button-destructive-color-background-active, #8e030f)\n );--slds-c-button-color-border-active: var(\n --slds-c-button-destructive-color-border-active,\n var(--sds-c-button-destructive-color-border-active, #8e030f)\n );--slds-c-button-text-color-active: var(\n --slds-c-button-destructive-text-color-active,\n var(--sds-c-button-destructive-text-color-active, white)\n );}.slds-button_destructive[disabled]", shadowSelector, ",.slds-button_destructive:disabled", shadowSelector, " {background-color: #c9c7c5;border-color: #c9c7c5;color: white;}.slds-button_text-destructive", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-text-destructive-spacing-inline-start,\n var(--sds-c-button-text-destructive-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-text-destructive-spacing-inline-end,\n var(--sds-c-button-text-destructive-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-text-destructive-color-background,\n var(--sds-c-button-text-destructive-color-background, white)\n );--slds-c-button-color-border: var(\n --slds-c-button-text-destructive-color-border,\n var(--sds-c-button-text-destructive-color-border, #c9c9c9)\n );--slds-c-button-text-color: var(\n --slds-c-button-text-destructive-text-color,\n var(--sds-c-button-text-destructive-text-color, #ea001e)\n );}.slds-button_text-destructive:hover", shadowSelector, ",.slds-button_text-destructive:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-text-destructive-color-background-hover,\n var(--sds-c-button-text-destructive-color-background-hover, #f3f3f3)\n );--slds-c-button-color-border-hover: var(\n --slds-c-button-text-destructive-color-border-hover,\n var(--sds-c-button-text-destructive-color-border-hover, #c9c9c9)\n );--slds-c-button-text-color-hover: var(\n --sds-c-button-text-destructive-text-color-hover,\n var(--sds-c-button-text-destructive-text-color-hover, #ba0517)\n );}.slds-button_text-destructive:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-text-destructive-color-background-active,\n var(--sds-c-button-text-destructive-color-background-active, #f3f3f3)\n );--slds-c-button-color-border-active: var(\n --sds-c-button-text-destructive-color-border-active,\n var(--sds-c-button-text-destructive-color-border-active, #c9c9c9)\n );--slds-c-button-text-color-active: var(\n --slds-c-button-text-destructive-text-color-active,\n var(--sds-c-button-text-destructive-text-color-active, #ba0517)\n );}.slds-button_text-destructive[disabled]", shadowSelector, ",.slds-button_text-destructive:disabled", shadowSelector, " {background-color: white;border-color: #c9c9c9;color: #c9c9c9;}.slds-button_success", shadowSelector, " {--slds-c-button-spacing-inline-start: var(\n --slds-c-button-success-spacing-inline-start,\n var(--sds-c-button-success-spacing-inline-start, 1rem)\n );--slds-c-button-spacing-inline-end: var(\n --slds-c-button-success-spacing-inline-end,\n var(--sds-c-button-success-spacing-inline-end, 1rem)\n );text-align: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-webkit-transition: border 0.15s linear;transition: border 0.15s linear;--slds-c-button-color-background: var(\n --slds-c-button-success-color-background,\n var(--sds-c-button-success-color-background, #45c65a)\n );--slds-c-button-color-border: var(\n --slds-c-button-success-color-border,\n var(--sds-c-button-success-color-border, #91db8b)\n );--slds-c-button-text-color: var(--slds-c-button-success-text-color, var(--sds-c-button-success-text-color, #181818));}.slds-button_success:hover", shadowSelector, ",.slds-button_success:focus", shadowSelector, " {--slds-c-button-color-background-hover: var(\n --slds-c-button-success-color-background-hover,\n var(--sds-c-button-success-color-background-hover, #2e844a)\n );--slds-c-button-color-border-hover: var(\n --slds-c-button-success-color-border-hover,\n var(--sds-c-button-success-color-border-hover, #2e844a)\n );--slds-c-button-text-color-hover: var(\n --slds-c-button-success-text-color-hover,\n var(--sds-c-button-success-text-color-hover, white)\n );}.slds-button_success:active", shadowSelector, " {--slds-c-button-color-background-active: var(\n --slds-c-button-success-color-background-active,\n var(--sds-c-button-success-color-background-active, #2e844a)\n );--slds-c-button-color-border-active: var(\n --slds-c-button-success-color-border-active,\n var(--sds-c-button-success-color-border-active, #2e844a)\n );--slds-c-button-text-color-active: var(\n --slds-c-button-success-text-color-active,\n var(--sds-c-button-success-text-color-active, white)\n );}.slds-button_success[disabled]", shadowSelector, ",.slds-button_success:disabled", shadowSelector, " {background-color: #c9c7c5;border-color: #c9c7c5;color: white;}.slds-button__icon", shadowSelector, " {width: 0.875rem;height: 0.875rem;fill: var(--slds-c-icon-color-foreground, currentColor);}.slds-button__icon_large", shadowSelector, " {width: 1.5rem;height: 1.5rem;}.slds-button__icon_small", shadowSelector, " {width: 0.75rem;height: 0.75rem;}.slds-button__icon_x-small", shadowSelector, " {width: 0.5rem;height: 0.5rem;}.slds-button__icon_left", shadowSelector, " {margin-right: 0.5rem;}.slds-button__icon_right", shadowSelector, " {margin-left: 0.5rem;}.slds-button_full-width", shadowSelector, " {font-size: inherit;color: inherit;line-height: inherit;padding: 0;background: transparent;border: 0;text-align: inherit;width: 100%;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;}.slds-button_full-width:focus", shadowSelector, " {--slds-c-button-shadow: none;}.slds-button_stretch", shadowSelector, " {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;width: 100%;}.slds-button_neutral.slds-is-selected", shadowSelector, " {--slds-c-button-neutral-color-background: var(--slds-c-button-stateful-color-background-selected, transparent);--slds-c-button-neutral-color-border: var(--slds-c-button-stateful-color-border-selected, transparent);}.slds-button_neutral.slds-is-selected:hover:not([disabled])", shadowSelector, ",.slds-button_neutral.slds-is-selected:focus:not([disabled])", shadowSelector, " {--slds-c-button-neutral-color-background-hover: var(\n --slds-c-button-stateful-color-background-selected-hover,\n #f3f3f3\n );--slds-c-button-neutral-color-border-hover: var(--slds-c-button-stateful-color-border-selected-hover, #c9c9c9);}.slds-button_neutral.slds-is-selected:active:not([disabled])", shadowSelector, " {--slds-c-button-neutral-color-background-active: var(\n --slds-c-button-stateful-color-background-selected-active,\n #f3f3f3\n );}.slds-button_inverse.slds-is-selected", shadowSelector, " {border-color: transparent;}.slds-button_stateful", shadowSelector, " .slds-text-selected", shadowSelector, ",.slds-button_stateful", shadowSelector, " .slds-text-selected-focus", shadowSelector, ",.slds-button_stateful", shadowSelector, " .slds-text-not-selected", shadowSelector, " {-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-not-selected", shadowSelector, " {}.slds-not-selected", shadowSelector, " .slds-text-selected", shadowSelector, " {display: none;}.slds-not-selected", shadowSelector, " .slds-text-selected-focus", shadowSelector, " {display: none;}.slds-not-selected", shadowSelector, " .slds-text-not-selected", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-is-selected-clicked", shadowSelector, " .slds-text-selected", shadowSelector, ",.slds-is-selected[disabled]", shadowSelector, " .slds-text-selected", shadowSelector, ",.slds-is-selected[disabled]:hover", shadowSelector, " .slds-text-selected", shadowSelector, ",.slds-is-selected[disabled]:focus", shadowSelector, " .slds-text-selected", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-is-selected-clicked", shadowSelector, " .slds-text-selected-focus", shadowSelector, ",.slds-is-selected[disabled]", shadowSelector, " .slds-text-selected-focus", shadowSelector, ",.slds-is-selected[disabled]:hover", shadowSelector, " .slds-text-selected-focus", shadowSelector, ",.slds-is-selected[disabled]:focus", shadowSelector, " .slds-text-selected-focus", shadowSelector, " {display: none;}.slds-is-selected-clicked", shadowSelector, " .slds-text-not-selected", shadowSelector, ",.slds-is-selected[disabled]", shadowSelector, " .slds-text-not-selected", shadowSelector, ",.slds-is-selected[disabled]:hover", shadowSelector, " .slds-text-not-selected", shadowSelector, ",.slds-is-selected[disabled]:focus", shadowSelector, " .slds-text-not-selected", shadowSelector, " {display: none;}.slds-is-selected", shadowSelector, " .slds-text-not-selected", shadowSelector, " {display: none;}.slds-is-selected", shadowSelector, " .slds-text-selected", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-is-selected", shadowSelector, " .slds-text-selected-focus", shadowSelector, " {display: none;}.slds-is-selected:hover", shadowSelector, " .slds-text-not-selected", shadowSelector, ",.slds-is-selected:focus", shadowSelector, " .slds-text-not-selected", shadowSelector, " {display: none;}.slds-is-selected:hover", shadowSelector, " .slds-text-selected", shadowSelector, ",.slds-is-selected:focus", shadowSelector, " .slds-text-selected", shadowSelector, " {display: none;}.slds-is-selected:hover", shadowSelector, " .slds-text-selected-focus", shadowSelector, ",.slds-is-selected:focus", shadowSelector, " .slds-text-selected-focus", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-card", shadowSelector, " {position: relative;padding-top: var(\n --slds-c-card-spacing-block-start,\n var(--sds-c-card-spacing-block-start, var(--sds-c-card-spacing-block, 0))\n );padding-right: var(\n --slds-c-card-spacing-inline-end,\n var(--sds-c-card-spacing-inline-end, var(--sds-c-card-spacing-inline, 0))\n );padding-bottom: var(\n --slds-c-card-spacing-block-end,\n var(--sds-c-card-spacing-block-end, var(--sds-c-card-spacing-block, 0))\n );padding-left: var(\n --slds-c-card-spacing-inline-start,\n var(--sds-c-card-spacing-inline-start, var(--sds-c-card-spacing-inline, 0))\n );background: var(--slds-c-card-color-background, var(--sds-c-card-color-background, white));border-width: var(--slds-c-card-sizing-border, var(--sds-c-card-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-card-color-border, var(--sds-c-card-color-border, #c9c9c9));border-radius: var(--slds-c-card-radius-border, var(--sds-c-card-radius-border, 0.25rem));background-clip: padding-box;-webkit-box-shadow: var(--slds-c-card-shadow, var(--sds-c-card-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.1)));box-shadow: var(--slds-c-card-shadow, var(--sds-c-card-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.1)));color: var(--slds-c-card-text-color, var(--sds-c-card-text-color));}.slds-card", shadowSelector, " + .slds-card", shadowSelector, " {margin-top: 1rem;}.slds-card__header", shadowSelector, " {padding-top: var(\n --slds-c-card-header-spacing-block-start,\n var(\n --sds-c-card-header-spacing-block-start,\n var(--slds-c-card-header-spacing-block, var(--sds-c-card-header-spacing-block, 0.75rem))\n )\n );padding-right: var(\n --slds-c-card-header-spacing-inline-end,\n var(\n --sds-c-card-header-spacing-inline-end,\n var(--slds-c-card-header-spacing-inline, var(--sds-c-card-header-spacing-inline, 1rem))\n )\n );padding-bottom: var(\n --slds-c-card-header-spacing-block-end,\n var(\n --sds-c-card-header-spacing-block-end,\n var(--slds-c-card-header-spacing-block, var(--sds-c-card-header-spacing-block, 0))\n )\n );padding-left: var(\n --slds-c-card-header-spacing-inline-start,\n var(\n --sds-c-card-header-spacing-inline-start,\n var(--slds-c-card-header-spacing-inline, var(--sds-c-card-header-spacing-inline, 1rem))\n )\n );margin: 0 0 var(--slds-c-card-header-spacing-block-end, var(--sds-c-card-header-spacing-block-end, 0.75rem));}.slds-card__header-title", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;font-size: var(--slds-c-card-heading-font-size, var(--sds-c-card-heading-font-size, 1rem));font-weight: var(--slds-c-card-heading-font-weight, var(--sds-c-card-heading-font-weight, 700));line-height: 1.25;}.slds-card__header-link", shadowSelector, " {color: inherit;font-weight: var(--slds-c-card-heading-font-weight, var(--sds-c-card-heading-font-weight, 700));}.slds-card__body", shadowSelector, " {margin-top: var(\n --slds-c-card-body-spacing-block-start,\n var(\n --sds-c-card-body-spacing-block-start,\n var(--slds-c-card-body-spacing-block, var(--sds-c-card-body-spacing-block, 0.75rem))\n )\n );margin-bottom: var(\n --slds-c-card-body-spacing-block-end,\n var(\n --sds-c-card-body-spacing-block-end,\n var(--slds-c-card-body-spacing-block, var(--sds-c-card-body-spacing-block, 0.75rem))\n )\n );padding-right: var(\n --slds-c-card-body-spacing-inline-end,\n var(\n --sds-c-card-body-spacing-inline-end,\n var(--slds-c-card-body-spacing-inline, var(--sds-c-card-body-spacing-inline))\n )\n );padding-left: var(\n --slds-c-card-body-spacing-inline-start,\n var(\n --sds-c-card-body-spacing-inline-start,\n var(--slds-c-card-body-spacing-inline, var(--sds-c-card-body-spacing-inline))\n )\n );}.slds-card__body_inner", shadowSelector, " {--slds-c-card-body-spacing-inline-end: var(\n --sds-c-card-body-spacing-inline-end,\n var(--sds-c-card-body-spacing-inline, 1rem)\n );--slds-c-card-body-spacing-inline-start: var(\n --sds-c-card-body-spacing-inline-start,\n var(--sds-c-card-body-spacing-inline, 1rem)\n );padding-top: 0;padding-bottom: 0;}.slds-card__body:empty", shadowSelector, ",.slds-card__footer:empty", shadowSelector, " {display: none;}.slds-card__footer", shadowSelector, " {padding-top: var(\n --slds-c-card-footer-spacing-block-start,\n var(\n --sds-c-card-footer-spacing-block-start,\n var(--slds-c-card-footer-spacing-block, var(--sds-c-card-footer-spacing-block, 0.75rem))\n )\n );padding-right: var(\n --slds-c-card-footer-spacing-inline-end,\n var(\n --sds-c-card-footer-spacing-inline-end,\n var(--slds-c-card-footer-spacing-inline, var(--sds-c-card-footer-spacing-inline, 1rem))\n )\n );padding-bottom: var(\n --slds-c-card-footer-spacing-block-end,\n var(\n --sds-c-card-footer-spacing-block-end,\n var(--slds-c-card-footer-spacing-block, var(--sds-c-card-footer-spacing-block, 0.75rem))\n )\n );padding-left: var(\n --slds-c-card-footer-spacing-inline-start,\n var(\n --sds-c-card-footer-spacing-inline-start,\n var(--slds-c-card-footer-spacing-inline, var(--sds-c-card-footer-spacing-inline, 1rem))\n )\n );margin-top: var(--slds-c-card-footer-spacing-block-start, var(--sds-c-card-footer-spacing-block-start, 0.75rem));text-align: var(--slds-c-card-footer-text-align, var(--sds-c-card-footer-text-align, center));font-size: var(--slds-c-card-footer-font-size, var(--sds-c-card-footer-font-size, 0.8125rem));border-top-width: var(--slds-c-card-footer-sizing-border, var(--sds-c-card-footer-sizing-border, 1px));border-top-style: solid;border-top-color: var(--slds-c-card-footer-color-border, var(--sds-c-card-footer-color-border, #c9c9c9));}.slds-card__footer-action", shadowSelector, " {display: block;}.slds-card__tile", shadowSelector, " {margin-top: 0.75rem;}.slds-region__pinned-left", shadowSelector, " .slds-card", shadowSelector, ",.slds-region__pinned-left", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-region__pinned-left", shadowSelector, " .slds-card_boundary", shadowSelector, ",.slds-region__pinned-left", shadowSelector, " .slds-tabs_card", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-card", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-card_boundary", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-tabs_card", shadowSelector, " {border-radius: 0;border: 0;border-bottom: 1px solid #e5e5e5;-webkit-box-shadow: none;box-shadow: none;}.slds-region__pinned-left", shadowSelector, " .slds-card:last-child", shadowSelector, ",.slds-region__pinned-left", shadowSelector, " .slds-card-wrapper:last-child", shadowSelector, ",.slds-region__pinned-left", shadowSelector, " .slds-card_boundary:last-child", shadowSelector, ",.slds-region__pinned-left", shadowSelector, " .slds-tabs_card:last-child", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-card:last-child", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-card-wrapper:last-child", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-card_boundary:last-child", shadowSelector, ",.slds-region__pinned-right", shadowSelector, " .slds-tabs_card:last-child", shadowSelector, " {border-bottom: 0;}.slds-card-wrapper", shadowSelector, " {padding: 1rem;background: var(--slds-c-card-color-background, var(--sds-c-card-color-background, white));border-width: var(--slds-c-card-sizing-border, var(--sds-c-card-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-card-color-border, var(--sds-c-card-color-border, #c9c9c9));border-radius: var(--slds-c-card-radius-border, var(--sds-c-card-radius-border, 0.25rem));background-clip: padding-box;-webkit-box-shadow: var(--slds-c-card-shadow, var(--sds-c-card-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.1)));box-shadow: var(--slds-c-card-shadow, var(--sds-c-card-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.1)));}.slds-card-wrapper", shadowSelector, " .slds-card__header", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card__body", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card__footer", shadowSelector, " {padding-left: 0;padding-right: 0;}.slds-card", shadowSelector, " .slds-card", shadowSelector, ",.slds-card", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-modal", shadowSelector, " .slds-card", shadowSelector, ",.slds-modal", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-tabs_default", shadowSelector, " .slds-card", shadowSelector, ",.slds-tabs_default", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-tabs_card", shadowSelector, " .slds-card", shadowSelector, ",.slds-tabs_card", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card-wrapper", shadowSelector, " {border: 0;-webkit-box-shadow: none;box-shadow: none;}.slds-card", shadowSelector, ",.slds-modal", shadowSelector, ",.slds-tabs_default", shadowSelector, " {}.slds-card", shadowSelector, " .slds-card_boundary", shadowSelector, ",.slds-modal", shadowSelector, " .slds-card_boundary", shadowSelector, ",.slds-tabs_default", shadowSelector, " .slds-card_boundary", shadowSelector, " {border-width: var(--slds-c-card-sizing-border, var(--sds-c-card-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-card-color-border, var(--sds-c-card-color-border, #c9c9c9));border-radius: var(--slds-c-card-radius-border, var(--sds-c-card-radius-border, 0.25rem));}.slds-tabs_card", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " {padding: 0.75rem 1rem;background: var(--slds-c-card-color-background, var(--sds-c-card-color-background, white));border-width: var(--slds-c-card-sizing-border, var(--sds-c-card-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-card-color-border, var(--sds-c-card-color-border, #c9c9c9));border-radius: var(--slds-c-card-radius-border, var(--sds-c-card-radius-border, 0.25rem));-webkit-box-shadow: var(--slds-c-card-shadow, var(--sds-c-card-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.1)));box-shadow: var(--slds-c-card-shadow, var(--sds-c-card-shadow, 0 2px 2px 0 rgba(0, 0, 0, 0.1)));}.slds-tabs_card", shadowSelector, " .slds-card", shadowSelector, ",.slds-tabs_card", shadowSelector, " .slds-card-wrapper", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card-wrapper", shadowSelector, " {padding-left: 0;padding-right: 0;}.slds-tabs_card", shadowSelector, " .slds-card__header", shadowSelector, ",.slds-tabs_card", shadowSelector, " .slds-card__body", shadowSelector, ",.slds-tabs_card", shadowSelector, " .slds-card__footer", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card__header", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card__body", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card__footer", shadowSelector, " {padding-left: 0;padding-right: 0;margin-left: 0;margin-right: 0;}.slds-tabs_card", shadowSelector, " .slds-card__header", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card__header", shadowSelector, " {padding-top: 0;}.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card_boundary", shadowSelector, " {border-width: var(--slds-c-card-sizing-border, var(--sds-c-card-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-card-color-border, var(--sds-c-card-color-border, #c9c9c9));border-radius: var(--slds-c-card-radius-border, var(--sds-c-card-radius-border, 0.25rem));}.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__header", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__header", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__header", shadowSelector, " {padding-top: var(\n --slds-c-card-header-spacing-block-start,\n var(\n --sds-c-card-header-spacing-block-start,\n var(--slds-c-card-header-spacing-block, var(--sds-c-card-header-spacing-block, 0.75rem))\n )\n );padding-right: var(\n --slds-c-card-header-spacing-inline-end,\n var(\n --sds-c-card-header-spacing-inline-end,\n var(--slds-c-card-header-spacing-inline, var(--sds-c-card-header-spacing-inline, 1rem))\n )\n );padding-bottom: var(\n --slds-c-card-header-spacing-block-end,\n var(\n --sds-c-card-header-spacing-block-end,\n var(--slds-c-card-header-spacing-block, var(--sds-c-card-header-spacing-block, 0))\n )\n );padding-left: var(\n --slds-c-card-header-spacing-inline-start,\n var(\n --sds-c-card-header-spacing-inline-start,\n var(--slds-c-card-header-spacing-inline, var(--sds-c-card-header-spacing-inline, 1rem))\n )\n );}.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__body_inner", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__body_inner", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__body_inner", shadowSelector, " {padding: 0;padding-right: var(\n --slds-c-card-body-spacing-inline-end,\n var(\n --sds-c-card-body-spacing-inline-end,\n var(--slds-c-card-body-spacing-inline, var(--sds-c-card-body-spacing-inline, 1rem))\n )\n );padding-left: var(\n --slds-c-card-body-spacing-inline-start,\n var(\n --sds-c-card-body-spacing-inline-start,\n var(--slds-c-card-body-spacing-inline, var(--sds-c-card-body-spacing-inline, 1rem))\n )\n );}.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__footer", shadowSelector, ",.slds-tabs_card.slds-tabs_card", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__footer", shadowSelector, ",.slds-card-wrapper", shadowSelector, " .slds-card_boundary", shadowSelector, " .slds-card__footer", shadowSelector, " {padding-top: var(\n --slds-c-card-footer-spacing-block-start,\n var(\n --sds-c-card-footer-spacing-block-start,\n var(--slds-c-card-footer-spacing-block, var(--sds-c-card-footer-spacing-block, 0.75rem))\n )\n );padding-right: var(\n --slds-c-card-footer-spacing-inline-end,\n var(\n --sds-c-card-footer-spacing-inline-end,\n var(--slds-c-card-footer-spacing-inline, var(--sds-c-card-footer-spacing-inline, 1rem))\n )\n );padding-bottom: var(\n --slds-c-card-footer-spacing-block-end,\n var(\n --sds-c-card-footer-spacing-block-end,\n var(--slds-c-card-footer-spacing-block, var(--sds-c-card-footer-spacing-block, 0.75rem))\n )\n );padding-left: var(\n --slds-c-card-footer-spacing-inline-start,\n var(\n --sds-c-card-footer-spacing-inline-start,\n var(--slds-c-card-footer-spacing-inline, var(--sds-c-card-footer-spacing-inline, 1rem))\n )\n );}.slds-carousel", shadowSelector, " {position: relative;}.slds-carousel__stage", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;overflow: hidden;}.slds-carousel__panels", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-transition: -webkit-transform 250ms ease-in;transition: -webkit-transform 250ms ease-in;transition: transform 250ms ease-in;transition: transform 250ms ease-in, -webkit-transform 250ms ease-in;min-height: 0%;}.slds-carousel__panel", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: 0 0 100%;flex: 0 0 100%;max-width: 100%;}.slds-carousel__panel-action", shadowSelector, " {display: block;border: 1px solid #e5e5e5;border-radius: 0.25rem;}.slds-carousel__panel-action:focus", shadowSelector, " {outline: 0;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;border-color: #014486;outline: 0;}.slds-carousel__image", shadowSelector, " {border-top-left-radius: 0.25rem;border-top-right-radius: 0.25rem;overflow: hidden;}.slds-carousel__image", shadowSelector, " > img", shadowSelector, " {width: 100%;}.slds-carousel__content", shadowSelector, " {background: white;padding: 0.75rem;border-bottom-left-radius: 0.25rem;border-bottom-right-radius: 0.25rem;text-align: center;height: 6.625rem;overflow-x: hidden;overflow-y: auto;}.slds-carousel__content-title", shadowSelector, " {font-size: 1rem;font-weight: 600;}.slds-carousel__indicators", shadowSelector, " {-ms-flex-item-align: center;align-self: center;margin: 0.5rem 0;}.slds-carousel__indicator", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;margin: 0 0.25rem;}.slds-carousel__indicator-action", shadowSelector, " {width: 1rem;height: 1rem;background: white;border: 1px solid #e5e5e5;border-radius: 50%;}.slds-carousel__indicator-action.slds-is-active", shadowSelector, ",.slds-carousel__indicator-action.slds-is-active:hover", shadowSelector, " {background: #0176d3;border-color: #0176d3;}.slds-carousel__indicator-action:hover", shadowSelector, " {background-color: #f3f3f3;}.slds-carousel__indicator-action:focus", shadowSelector, " {outline: 0;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;background-color: #014486;border-color: #014486;outline: 0;}.slds-carousel__autoplay", shadowSelector, " {position: absolute;left: 0;bottom: 0.25rem;}.slds-checkbox", shadowSelector, " {display: inline-block;position: relative;}.slds-checkbox", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {width: 1rem;height: 1rem;display: inline-block;position: relative;-ms-flex-negative: 0;flex-shrink: 0;vertical-align: middle;border-radius: var(--slds-c-checkbox-radius-border, var(--sds-c-checkbox-radius-border, 0.125rem));border-width: 1px;border-style: solid;border-color: var(--slds-c-checkbox-color-border, var(--sds-c-checkbox-color-border, #c9c9c9));background-color: var(--slds-c-checkbox-color-background, var(--sds-c-checkbox-color-background, white));-webkit-box-shadow: var(--slds-c-checkbox-shadow, var(--sds-c-checkbox-shadow));box-shadow: var(--slds-c-checkbox-shadow, var(--sds-c-checkbox-shadow));-webkit-transition: border 0.1s linear, background-color 0.1s linear;transition: border 0.1s linear, background-color 0.1s linear;}.slds-checkbox", shadowSelector, " .slds-checkbox__label", shadowSelector, " .slds-form-element__label", shadowSelector, " {display: inline;vertical-align: middle;font-size: 0.8125rem;}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " {width: 1px;height: 1px;border: 0;clip: rect(0 0 0 0);margin: -1px;overflow: hidden;padding: 0;position: absolute;pointer-events: auto;}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {--slds-c-checkbox-color-border: var(\n --slds-c-checkbox-color-border-checked,\n var(--sds-c-checkbox-color-border-checked)\n );--slds-c-checkbox-color-background: var(\n --slds-c-checkbox-color-background-checked,\n var(--sds-c-checkbox-color-background-checked)\n );}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ":after,.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ":after,.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, ":after {display: block;content: \"\";height: 0.25rem;width: 0.5rem;position: absolute;top: 50%;left: 50%;-webkit-transform: translate3d(-50%, -50%, 0) rotate(-45deg);transform: translate3d(-50%, -50%, 0) rotate(-45deg);border-bottom: 2px solid\n var(--slds-c-checkbox-mark-color-foreground, var(--sds-c-checkbox-mark-color-foreground, #0176d3));border-left: 2px solid\n var(--slds-c-checkbox-mark-color-foreground, var(--sds-c-checkbox-mark-color-foreground, #0176d3));}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:focus", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:focus", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:focus", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {--slds-c-checkbox-color-border: var(\n --slds-c-checkbox-color-border-focus,\n var(--sds-c-checkbox-color-border-focus, #1b96ff)\n );--slds-c-checkbox-shadow: var(--slds-c-checkbox-shadow-focus, var(--sds-c-checkbox-shadow-focus, 0 0 3px #0176d3));}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:focus:checked", shadowSelector, " > .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:focus:checked", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:focus:checked", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {--slds-c-checkbox-color-border: var(\n --slds-c-checkbox-color-border-focus,\n var(--sds-c-checkbox-color-border-focus, #1b96ff)\n );}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:indeterminate", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:indeterminate", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:indeterminate", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {--slds-c-checkbox-color-border: var(\n --slds-c-checkbox-color-border-checked,\n var(--sds-c-checkbox-color-border-checked)\n );--slds-c-checkbox-color-background: var(\n --slds-c-checkbox-color-background-checked,\n var(--sds-c-checkbox-color-background-checked)\n );}.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:indeterminate", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ":after,.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:indeterminate", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ":after,.slds-checkbox", shadowSelector, " [type=\"checkbox\"]:indeterminate", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, ":after {content: \"\";display: block;position: absolute;top: 50%;left: 50%;width: 0.5rem;height: 2px;border: 0;-webkit-transform: translate3d(-50%, -50%, 0);transform: translate3d(-50%, -50%, 0);background: var(--slds-c-checkbox-mark-color-foreground, var(--sds-c-checkbox-mark-color-foreground, #0176d3));}.slds-checkbox", shadowSelector, " [type=\"checkbox\"][disabled]", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"][disabled]", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-checkbox", shadowSelector, " [type=\"checkbox\"][disabled]", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {border-color: #c9c9c9;background-color: #f3f3f3;}.slds-checkbox", shadowSelector, " [type=\"checkbox\"][disabled]", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ":after,.slds-checkbox", shadowSelector, " [type=\"checkbox\"][disabled]", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ":after,.slds-checkbox", shadowSelector, " [type=\"checkbox\"][disabled]", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, ":after {border-color: #969492;}.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {border-color: #ea001e;border-width: 2px;}.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {border-color: #ea001e;}.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ":after,.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ":after,.slds-has-error", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]:checked", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, ":after {border-color: #fe5c4c;}.slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",.slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",.slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {margin-right: 0.5rem;}[dir=\"rtl\"]", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox_faux", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " [dir=\"rtl\"]", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " ~ .slds-checkbox_faux", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " [dir=\"rtl\"]", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox_faux", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " + .slds-checkbox__label", shadowSelector, " .slds-checkbox--faux", shadowSelector, " {margin-right: 0;margin-left: 0.5rem;}.slds-checkbox_standalone", shadowSelector, " {pointer-events: none;}.slds-checkbox_standalone", shadowSelector, " [type=\"checkbox\"]", shadowSelector, " {width: 1rem;height: 1rem;margin: 0;clip: auto;opacity: 0;}.slds-checkbox_standalone", shadowSelector, " .slds-checkbox_faux", shadowSelector, " {display: block;}.slds-combobox_container", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;position: relative;}.slds-combobox_container.slds-is-open", shadowSelector, " .slds-dropdown", shadowSelector, " {display: block;}.slds-combobox_container.slds-has-selection", shadowSelector, " .slds-combobox__input-value", shadowSelector, ",.slds-combobox_container.slds-has-selection", shadowSelector, " .slds-combobox__input-value:focus", shadowSelector, " {-webkit-box-shadow: 0 0 0 2px white inset, 0 0 0 3px #e5e5e5 inset;box-shadow: 0 0 0 2px white inset, 0 0 0 3px #e5e5e5 inset;}.slds-combobox_container.slds-has-icon-only", shadowSelector, " .slds-combobox__input", shadowSelector, ",.slds-combobox_container.slds-has-icon-only", shadowSelector, " .slds-combobox__input:focus", shadowSelector, ",.slds-combobox_container.slds-has-icon-only", shadowSelector, " .slds-combobox__input.slds-has-focus", shadowSelector, " {width: 0;pointer-events: auto;}.slds-combobox_container.slds-has-icon-only", shadowSelector, " .slds-input__icon", shadowSelector, " {z-index: 2;pointer-events: none;}.slds-combobox", shadowSelector, " {position: static;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;}.slds-combobox__form-element", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;}[role=\"combobox\"]", shadowSelector, " input[readonly]", shadowSelector, ",input[readonly][role=\"combobox\"]", shadowSelector, " {padding-left: 0.75rem;border-color: #c9c9c9;background-color: white;font-size: inherit;font-weight: 400;}[role=\"combobox\"]", shadowSelector, " input[readonly]:focus", shadowSelector, ",[role=\"combobox\"]", shadowSelector, " input[readonly].slds-has-focus", shadowSelector, ",input[readonly][role=\"combobox\"]:focus", shadowSelector, ",input[readonly][role=\"combobox\"].slds-has-focus", shadowSelector, " {border-color: #1b96ff;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;}[role=\"combobox\"]", shadowSelector, " input[readonly][disabled]", shadowSelector, ",input[readonly][role=\"combobox\"][disabled]", shadowSelector, " {background-color: #f3f3f3;border-color: #c9c9c9;}.slds-listbox_inline", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-ms-flex-negative: 0;flex-shrink: 0;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin-left: 0.125rem;margin-right: 0.125rem;}.slds-listbox_inline", shadowSelector, " li", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;}.slds-listbox_inline", shadowSelector, " li", shadowSelector, " + li", shadowSelector, " {padding-left: 0.125rem;}.slds-listbox_horizontal", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-listbox_horizontal", shadowSelector, " li", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;}.slds-listbox_horizontal", shadowSelector, " li", shadowSelector, " + li", shadowSelector, " {padding-left: 0.125rem;}.slds-listbox__option:hover", shadowSelector, " {cursor: pointer;}.slds-listbox__option:focus", shadowSelector, " {outline: 0;}.slds-listbox__option", shadowSelector, " .slds-truncate", shadowSelector, " {display: inline-block;vertical-align: middle;}.slds-listbox__option[aria-disabled=\"true\"]", shadowSelector, " {color: #c9c9c9;}.slds-listbox__option-header", shadowSelector, " {font-size: 0.875rem;font-weight: 700;}.slds-listbox__option-icon", shadowSelector, " {width: 1.5rem;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-ms-flex-line-pack: center;align-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;color: #747474;}.slds-listbox__option[aria-disabled=\"true\"]", shadowSelector, " .slds-listbox__option-icon", shadowSelector, " {color: currentColor;}.slds-listbox_vertical", shadowSelector, " {}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option:focus", shadowSelector, ",.slds-listbox_vertical", shadowSelector, " .slds-listbox__option:hover", shadowSelector, ",.slds-listbox_vertical", shadowSelector, " .slds-listbox__option.slds-has-focus", shadowSelector, " {background-color: #f3f3f3;text-decoration: none;}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option[aria-disabled=\"true\"]", shadowSelector, ",.slds-listbox_vertical", shadowSelector, " .slds-listbox__option[role=\"presentation\"]:hover", shadowSelector, " {background-color: transparent;cursor: default;}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option_entity", shadowSelector, " {padding: 0.25rem 0.75rem;}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option_entity", shadowSelector, " .slds-media__figure", shadowSelector, " {margin-right: 0.5rem;}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option_plain", shadowSelector, " {padding: 0.5rem 0.75rem;}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option_term", shadowSelector, " {padding: 0.5rem 0.75rem;}.slds-listbox_vertical", shadowSelector, " .slds-listbox__option_has-meta", shadowSelector, " .slds-media__figure", shadowSelector, " {margin-top: 0.25rem;}[class*=\"slds-input-has-icon_left\"]", shadowSelector, " .slds-combobox__input[value]", shadowSelector, ",[class*=\"slds-input-has-icon--left\"]", shadowSelector, " .slds-combobox__input[value]", shadowSelector, ",[class*=\"slds-input-has-icon_left\"]", shadowSelector, " .slds-combobox__input.slds-combobox__input-value", shadowSelector, ",[class*=\"slds-input-has-icon--left\"]", shadowSelector, " .slds-combobox__input.slds-combobox__input-value", shadowSelector, " {padding-left: 2.25rem;}.slds-input_faux:not(.slds-combobox__input-value)", shadowSelector, " {color: #747474;}.slds-combobox__input-entity-icon", shadowSelector, " {width: 1.25rem;height: 1.25rem;position: absolute;top: 50%;left: calc(0.25rem + 1px);-webkit-transform: translateY(-50%);transform: translateY(-50%);z-index: 2;}.slds-combobox__input-entity-icon", shadowSelector, " .slds-icon", shadowSelector, " {width: 1.25rem;height: 1.25rem;}.slds-combobox_container__icon", shadowSelector, " {color: #aeaeae;}.slds-listbox__icon-selected", shadowSelector, " {opacity: 0;fill: #0176d3;}.slds-listbox__option.slds-is-selected", shadowSelector, " .slds-listbox__icon-selected", shadowSelector, " {opacity: 1;}.slds-listbox__option.slds-is-selected", shadowSelector, " .slds-listbox__option-icon", shadowSelector, " {color: #0176d3;}.slds-listbox__option-text_entity", shadowSelector, " {max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: block;margin-bottom: 0.125rem;}.slds-listbox__option-meta", shadowSelector, " {display: block;margin-top: -0.25rem;color: #444444;}.slds-listbox__option[aria-disabled=\"true\"]", shadowSelector, " .slds-listbox__option-meta", shadowSelector, " {color: currentColor;}.slds-listbox_object-switcher", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;padding: 0.125rem;}.slds-combobox_object-switcher", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;}.slds-combobox_object-switcher", shadowSelector, " .slds-combobox__input", shadowSelector, " {width: 7.5rem;-webkit-transition: width 80ms linear;transition: width 80ms linear;font-size: 0.75rem;color: #747474;}.slds-combobox_object-switcher", shadowSelector, " .slds-combobox__input:focus", shadowSelector, ",.slds-combobox_object-switcher", shadowSelector, " .slds-combobox__input.slds-has-focus", shadowSelector, " {width: 10rem;}.slds-combobox__input", shadowSelector, " {}.slds-combobox__input:focus", shadowSelector, ",.slds-combobox__input.slds-has-focus", shadowSelector, " {border-color: #1b96ff;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;}.slds-combobox-group", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;}.slds-combobox-group", shadowSelector, " .slds-combobox_container", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;}.slds-combobox-group", shadowSelector, " .slds-combobox__input", shadowSelector, ",.slds-combobox-group", shadowSelector, " .slds-combobox_object-switcher__button", shadowSelector, " {border-radius: 0;margin-left: -1px;margin-right: -1px;position: relative;}.slds-combobox-group", shadowSelector, " .slds-combobox__input:focus", shadowSelector, ",.slds-combobox-group", shadowSelector, " .slds-combobox__input.slds-has-focus", shadowSelector, ",.slds-combobox-group", shadowSelector, " .slds-combobox_object-switcher__button:focus", shadowSelector, ",.slds-combobox-group", shadowSelector, " .slds-combobox_object-switcher__button.slds-has-focus", shadowSelector, " {z-index: 1;}.slds-combobox-group.slds-has-selection", shadowSelector, " .slds-combobox-addon_start", shadowSelector, " .slds-combobox__input", shadowSelector, " {border-bottom-left-radius: 0;}.slds-combobox-group.slds-has-selection", shadowSelector, " .slds-combobox-addon_end", shadowSelector, " .slds-combobox__input", shadowSelector, " {border-bottom-right-radius: 0;}.slds-combobox-group.slds-has-selection", shadowSelector, " ~ .slds-listbox_selection-group", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;position: relative;background: white;border: 1px solid #e5e5e5;border-top: 0;border-bottom-left-radius: 0.25rem;border-bottom-right-radius: 0.25rem;left: -1px;}.slds-combobox-group", shadowSelector, " .slds-listbox_horizontal", shadowSelector, " li", shadowSelector, " + li", shadowSelector, " {padding: 0.125rem;}.slds-listbox_selection-group", shadowSelector, " {position: relative;padding: 0;padding-right: 3.75rem;height: 1.875rem;overflow: hidden;}.slds-listbox_selection-group.slds-is-expanded", shadowSelector, " {height: auto;padding: 0;}.slds-listbox_selection-group", shadowSelector, " .slds-listbox", shadowSelector, " {padding: 0 0 0.125rem;}.slds-listbox_selection-group", shadowSelector, " .slds-listbox-item", shadowSelector, " {padding: 0.125rem 0.125rem 0;}.slds-listbox_selection-group", shadowSelector, " .slds-listbox-toggle", shadowSelector, " {position: absolute;top: 50%;-webkit-transform: translateY(-50%);transform: translateY(-50%);right: 0.5rem;}.slds-listbox_selection-group", shadowSelector, " .slds-listbox-toggle", shadowSelector, " .slds-button", shadowSelector, " {line-height: 1;}.slds-combobox-addon_start", shadowSelector, " .slds-combobox__input", shadowSelector, " {border-top-right-radius: 0;border-bottom-right-radius: 0;border-top-left-radius: 4px;border-bottom-left-radius: 4px;}.slds-combobox-addon_end", shadowSelector, " .slds-combobox__input", shadowSelector, " {border-top-right-radius: 4px;border-bottom-right-radius: 4px;border-top-left-radius: 0;border-bottom-left-radius: 0;}.slds-has-inline-listbox", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " {-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-direction: row;flex-direction: row;background: white;border: 1px solid #e5e5e5;border-radius: 0.25rem;}.slds-has-inline-listbox", shadowSelector, " .slds-combobox", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " .slds-combobox", shadowSelector, " {-ms-flex-preferred-size: 50%;flex-basis: 50%;-ms-flex-negative: 0;flex-shrink: 0;}.slds-has-inline-listbox", shadowSelector, " .slds-combobox__input", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " .slds-combobox__input", shadowSelector, " {min-height: 100%;line-height: calc(1.875rem - 2px);border: 0;padding-top: 0.125rem;padding-bottom: 0.125rem;}.slds-has-inline-listbox", shadowSelector, " .slds-combobox__input:focus", shadowSelector, ",.slds-has-inline-listbox", shadowSelector, " .slds-combobox__input:active", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " .slds-combobox__input:focus", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " .slds-combobox__input:active", shadowSelector, " {outline: 0;-webkit-box-shadow: none;box-shadow: none;}.slds-has-inline-listbox", shadowSelector, " .slds-listbox_object-switcher", shadowSelector, " ~ .slds-listbox_inline", shadowSelector, ",.slds-has-inline-listbox", shadowSelector, " .slds-combobox_container__icon", shadowSelector, " ~ .slds-listbox_inline", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " .slds-listbox_object-switcher", shadowSelector, " ~ .slds-listbox_inline", shadowSelector, ",.slds-has-object-switcher", shadowSelector, " .slds-combobox_container__icon", shadowSelector, " ~ .slds-listbox_inline", shadowSelector, " {margin-left: 0.5rem;}.slds-has-inline-listbox.slds-has-icon_left", shadowSelector, ",.slds-has-object-switcher.slds-has-icon_left", shadowSelector, " {padding-left: 2.25rem;}.slds-has-inline-listbox.slds-has-icon_left", shadowSelector, " .slds-combobox_container__icon", shadowSelector, ",.slds-has-object-switcher.slds-has-icon_left", shadowSelector, " .slds-combobox_container__icon", shadowSelector, " {width: 1rem;height: 1rem;position: absolute;left: 1.125rem;top: 50%;margin-top: -0.5rem;}.slds-has-inline-listbox", shadowSelector, " [role=\"listbox\"]", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;padding: 0 0.125rem;}.slds-has-inline-listbox", shadowSelector, " .slds-combobox__input-value", shadowSelector, " {-webkit-box-shadow: 0 0 0 2px white inset, 0 0 0 3px #e5e5e5 inset;box-shadow: 0 0 0 2px white inset, 0 0 0 3px #e5e5e5 inset;}.slds-table", shadowSelector, " {background-color: white;font-size: inherit;}.slds-table", shadowSelector, " th", shadowSelector, ",.slds-table", shadowSelector, " td", shadowSelector, " {padding: 0.25rem 0.5rem;white-space: nowrap;position: relative;}.slds-table", shadowSelector, " th", shadowSelector, " {font-weight: 400;}.slds-table", shadowSelector, " th:focus", shadowSelector, " {outline: 0;}.slds-table", shadowSelector, " thead", shadowSelector, " th", shadowSelector, " {background-color: #f3f3f3;color: #444444;padding: 0.25rem 0.5rem;font-weight: 700;line-height: normal;}.slds-table:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:focus", shadowSelector, " {outline: 0;}.slds-table:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > td", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > th", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:focus", shadowSelector, " > td", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:focus", shadowSelector, " > th", shadowSelector, " {background-color: #f3f3f3;}.slds-table", shadowSelector, " tbody", shadowSelector, " tr.slds-is-selected", shadowSelector, " > td", shadowSelector, ",.slds-table", shadowSelector, " tbody", shadowSelector, " tr.slds-is-selected", shadowSelector, " > th", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tr.slds-is-selected:hover", shadowSelector, " > td", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tr.slds-is-selected:hover", shadowSelector, " > th", shadowSelector, " {background-color: #f3f3f3;}.slds-table", shadowSelector, " tbody", shadowSelector, " tr.slds-is-selected", shadowSelector, " a", shadowSelector, ",.slds-table:not(.slds-no-row-hover)", shadowSelector, " tr.slds-is-selected:hover", shadowSelector, " a", shadowSelector, " {color: #032d60;}.slds-table", shadowSelector, " .slds-cell-wrap", shadowSelector, " {white-space: pre-line;overflow-wrap: break-word;word-wrap: break-word;}.slds-table", shadowSelector, " .slds-cell-shrink", shadowSelector, " {width: 1%;}.slds-table", shadowSelector, " .slds-cell-buffer_left", shadowSelector, " {padding-left: 1.5rem;}.slds-table", shadowSelector, " .slds-cell-buffer_right", shadowSelector, " {padding-right: 1.5rem;}.slds-table", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " {counter-increment: row-number;}.slds-table", shadowSelector, " .slds-row-number", shadowSelector, ":after {content: counter(row-number);}.slds-table", shadowSelector, " th:focus", shadowSelector, ",.slds-table", shadowSelector, " [role=\"gridcell\"]:focus", shadowSelector, " {outline: 0;}.slds-table", shadowSelector, " th:focus", shadowSelector, ",.slds-table", shadowSelector, " th.slds-has-focus", shadowSelector, ",.slds-table", shadowSelector, " [role=\"gridcell\"]:focus", shadowSelector, ",.slds-table", shadowSelector, " [role=\"gridcell\"].slds-has-focus", shadowSelector, " {-webkit-box-shadow: #0176d3 0 0 0 1px inset;box-shadow: #0176d3 0 0 0 1px inset;}.slds-table", shadowSelector, " th:focus.slds-cell_action-mode", shadowSelector, ",.slds-table", shadowSelector, " th.slds-has-focus.slds-cell_action-mode", shadowSelector, ",.slds-table", shadowSelector, " [role=\"gridcell\"]:focus.slds-cell_action-mode", shadowSelector, ",.slds-table", shadowSelector, " [role=\"gridcell\"].slds-has-focus.slds-cell_action-mode", shadowSelector, " {border-bottom: 3px solid #014486;}.slds-table", shadowSelector, " th:active", shadowSelector, ",.slds-table", shadowSelector, " [role=\"gridcell\"]:active", shadowSelector, " {-webkit-box-shadow: none;box-shadow: none;}.slds-table", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {margin-right: 0;}.slds-table_cell-buffer", shadowSelector, " tr", shadowSelector, " > th:first-child", shadowSelector, ",.slds-table_cell-buffer", shadowSelector, " tr", shadowSelector, " > td:first-child", shadowSelector, " {padding-left: 1.5rem;}.slds-table_cell-buffer", shadowSelector, " tr", shadowSelector, " > th:last-child", shadowSelector, ",.slds-table_cell-buffer", shadowSelector, " tr", shadowSelector, " > td:last-child", shadowSelector, " {padding-right: 1.5rem;}.slds-table_bordered", shadowSelector, " {border-collapse: separate;border-top: 1px solid #e5e5e5;border-bottom: 1px solid #e5e5e5;}.slds-table_bordered", shadowSelector, " thead", shadowSelector, " > tr", shadowSelector, " + tr", shadowSelector, " > th", shadowSelector, " {border-top: 1px solid #e5e5e5;}.slds-table_bordered", shadowSelector, " tbody", shadowSelector, " td", shadowSelector, ",.slds-table_bordered", shadowSelector, " tbody", shadowSelector, " th", shadowSelector, " {border-top: 1px solid #e5e5e5;}.slds-table_bordered:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > td:not(.slds-has-focus)", shadowSelector, ",.slds-table_bordered:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > th:not(.slds-has-focus)", shadowSelector, ",.slds-table_bordered:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:focus", shadowSelector, " > td:not(.slds-has-focus)", shadowSelector, ",.slds-table_bordered:not(.slds-no-row-hover)", shadowSelector, " tbody", shadowSelector, " tr:focus", shadowSelector, " > th:not(.slds-has-focus)", shadowSelector, " > th:not(.slds-has-focus)", shadowSelector, " {-webkit-box-shadow: #e5e5e5 0 -1px 0 inset, #e5e5e5 0 1px 0 inset;box-shadow: #e5e5e5 0 -1px 0 inset, #e5e5e5 0 1px 0 inset;}.slds-table_col-bordered", shadowSelector, " td", shadowSelector, " + td", shadowSelector, ",.slds-table_col-bordered", shadowSelector, " th", shadowSelector, " + th", shadowSelector, ",.slds-table_col-bordered", shadowSelector, " th", shadowSelector, " + td", shadowSelector, ",.slds-table_col-bordered", shadowSelector, " td", shadowSelector, " + th", shadowSelector, " {border-left: 1px solid #e5e5e5;}.slds-table_striped", shadowSelector, " tbody", shadowSelector, " tr:nth-of-type(even)", shadowSelector, " > td", shadowSelector, ",.slds-table_striped", shadowSelector, " tbody", shadowSelector, " tr:nth-of-type(even)", shadowSelector, " > th", shadowSelector, " {background-color: #f3f3f3;}.slds-table_fixed-layout", shadowSelector, " {table-layout: fixed;width: 100%;white-space: nowrap;}.slds-table_fixed-layout", shadowSelector, " thead", shadowSelector, " {background-color: white;}.slds-table_fixed-layout", shadowSelector, " tbody", shadowSelector, " {-webkit-transform: translateZ(0);transform: translateZ(0);}.slds-table_fixed-layout", shadowSelector, " .slds-cell-shrink", shadowSelector, " {width: 3rem;}.slds-table_fixed-layout", shadowSelector, " .slds-cell-shrink:nth-child(n).slds-cell-shrink:nth-child(n)", shadowSelector, " {padding-left: 0;padding-right: 0;}.slds-table_fixed-layout", shadowSelector, " .slds-cell-shrink:first-child", shadowSelector, " {text-align: right;padding-right: 0.5rem;}.slds-table_fixed-layout", shadowSelector, " .slds-cell-shrink:last-child", shadowSelector, " {text-align: left;padding-left: 0.5rem;}.slds-is-sortable", shadowSelector, " .slds-th__action:hover", shadowSelector, ",.slds-is-sortable", shadowSelector, " .slds-th__action:focus", shadowSelector, ",.slds-is-sortable.slds-has-focus", shadowSelector, " .slds-th__action", shadowSelector, ",.slds-is-sortable.slds-has-focus", shadowSelector, " .slds-th__action:hover", shadowSelector, ",.slds-is-sortable.slds-has-focus", shadowSelector, " .slds-th__action:focus", shadowSelector, " {background-color: white;color: currentColor;}.slds-is-sortable", shadowSelector, " .slds-th__action:hover", shadowSelector, " .slds-is-sortable__icon", shadowSelector, ",.slds-is-sortable", shadowSelector, " .slds-th__action:focus", shadowSelector, " .slds-is-sortable__icon", shadowSelector, ",.slds-is-sortable.slds-has-focus", shadowSelector, " .slds-th__action", shadowSelector, " .slds-is-sortable__icon", shadowSelector, ",.slds-is-sortable.slds-has-focus", shadowSelector, " .slds-th__action:hover", shadowSelector, " .slds-is-sortable__icon", shadowSelector, ",.slds-is-sortable.slds-has-focus", shadowSelector, " .slds-th__action:focus", shadowSelector, " .slds-is-sortable__icon", shadowSelector, " {display: inline-block;fill: #0176d3;}.slds-th__action", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;padding: 0.25rem 0.5rem;height: 2rem;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-th__action:focus", shadowSelector, ",.slds-th__action:hover", shadowSelector, " {outline: 0;background-color: white;}.slds-th__action_form", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-th__action-button", shadowSelector, " {position: absolute;-webkit-transform: translateY(-50%);transform: translateY(-50%);top: 50%;right: 0.25rem;}.slds-has-button-menu", shadowSelector, " .slds-th__action", shadowSelector, " {padding-right: 2rem;}.slds-has-button-menu", shadowSelector, " .slds-th__action-button", shadowSelector, " {right: 0.75rem;}.slds-is-sortable__icon", shadowSelector, " {width: 0.75rem;height: 0.75rem;margin-left: 0.25rem;display: none;}.slds-is-sorted", shadowSelector, " .slds-is-sortable__icon", shadowSelector, " {display: inline-block;}.slds-is-sorted_asc", shadowSelector, " .slds-is-sortable__icon", shadowSelector, " {-webkit-transform: rotate(180deg);transform: rotate(180deg);}.slds-table_column-1-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(1)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-2-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(2)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-3-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(3)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-4-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(4)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-5-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(5)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-6-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(6)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-7-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(7)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-8-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(8)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-9-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(9)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-10-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(10)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-11-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(11)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-12-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(12)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-13-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(13)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-14-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(14)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}.slds-table_column-15-wrap", shadowSelector, " tbody", shadowSelector, " tr", shadowSelector, " > *:nth-child(15)", shadowSelector, " .slds-truncate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: none;-ms-hyphens: none;hyphens: none;white-space: normal;}[class*=\"slds-table_column-\"]", shadowSelector, " tr", shadowSelector, " td", shadowSelector, " .slds-truncate", shadowSelector, " {overflow: hidden;position: relative;max-height: 3.25rem;}[class*=\"slds-table_column-\"]", shadowSelector, " tr", shadowSelector, " td", shadowSelector, " .slds-truncate", shadowSelector, ":after {content: \"\";position: absolute;top: 2.25rem;bottom: 0;right: 0;width: 50%;background: -webkit-gradient(linear, left top, right top, from(rgba(255, 255, 255, 0)), color-stop(69%, white));background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 69%);}[class*=\"slds-table_column-\"]", shadowSelector, " tr:hover", shadowSelector, " td", shadowSelector, " .slds-truncate", shadowSelector, ":after {background: -webkit-gradient(linear, left top, right top, from(rgba(250, 250, 249, 0)), color-stop(69%, #fafaf9));background: linear-gradient(to right, rgba(250, 250, 249, 0) 0%, #fafaf9 69%);}.slds-table_resizable-cols", shadowSelector, " thead", shadowSelector, " th", shadowSelector, " {padding: 0;}.slds-table_resizable-cols", shadowSelector, " thead", shadowSelector, " th:last-of-type", shadowSelector, " .slds-resizable__handle", shadowSelector, " {width: 0.75rem;right: 0;}.slds-table_resizable-cols", shadowSelector, " thead", shadowSelector, " th:last-of-type", shadowSelector, " .slds-resizable__handle", shadowSelector, " .slds-resizable__divider", shadowSelector, ":before,.slds-table_resizable-cols", shadowSelector, " thead", shadowSelector, " th:last-of-type", shadowSelector, " .slds-resizable__handle", shadowSelector, " .slds-resizable__divider", shadowSelector, ":after {right: 0;}.slds-resizable", shadowSelector, " {max-width: 100%;}.slds-resizable__handle", shadowSelector, " {width: 1.5rem;height: 100%;position: absolute;top: 0;right: -0.75rem;}.slds-resizable__divider", shadowSelector, " {position: absolute;right: 0;top: 0;width: 100%;height: 100%;display: block;cursor: col-resize;z-index: 5000;}.slds-resizable__divider", shadowSelector, ":before,.slds-resizable__divider", shadowSelector, ":after {height: 100%;content: \" \";display: block;position: absolute;top: 0;right: 0.75rem;}.slds-resizable__divider", shadowSelector, ":before {background-color: #aeaeae;height: 100%;width: 1px;}.slds-resizable__divider", shadowSelector, ":after {background-color: #0176d3;width: 1px;height: 100vh;opacity: 0;}.slds-resizable__divider:hover", shadowSelector, ":before,.slds-resizable__divider:focus", shadowSelector, ":before,.slds-resizable__divider:active", shadowSelector, ":before {background-color: #0176d3;width: 0.25rem;}.slds-resizable__divider:hover", shadowSelector, ":after,.slds-resizable__divider:focus", shadowSelector, ":after,.slds-resizable__divider:active", shadowSelector, ":after {opacity: 1;}.slds-resizable__input:focus", shadowSelector, " ~ .slds-resizable__handle", shadowSelector, " .slds-resizable__divider", shadowSelector, ":before {background-color: #0176d3;width: 0.25rem;}.slds-resizable__input:focus", shadowSelector, " ~ .slds-resizable__handle", shadowSelector, " .slds-resizable__divider", shadowSelector, ":after {opacity: 1;}.slds-table_joined", shadowSelector, " table", shadowSelector, ",.slds-table.slds-has-top-magnet", shadowSelector, " table", shadowSelector, " {border-radius: 0 0 0.25rem 0.25rem;-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);}.slds-table_joined-wrapper", shadowSelector, " {padding: 1rem 1rem 0 1rem;border-radius: 0.25rem;background-clip: padding-box;}.slds-table_joined-wrapper", shadowSelector, " .slds-table", shadowSelector, " {border-radius: 0 0 0.25rem 0.25rem;-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);}.slds-table_header-hidden", shadowSelector, " {border-top: 0;}.slds-table_edit_container:focus", shadowSelector, " {outline: none;}.slds-table_edit_container:focus", shadowSelector, ":before {content: \" \";position: absolute;top: 0;right: 0;bottom: 0;left: 0;z-index: 1;background-color: #f3f3f3;-webkit-box-shadow: 0 0 0 4px #1b96ff inset;box-shadow: 0 0 0 4px #1b96ff inset;}.slds-table_edit_container:focus", shadowSelector, " .slds-table_edit_container-message", shadowSelector, " {display: block;position: absolute;top: 50%;left: 50%;width: 20rem;margin-top: -2.25rem;margin-left: -10rem;background-color: white;text-align: center;z-index: 1;}.slds-table_edit_container-message", shadowSelector, " {display: none;}.slds-table_edit", shadowSelector, " {}.slds-table_edit", shadowSelector, " thead", shadowSelector, " th", shadowSelector, " {padding: 0;}.slds-table_edit", shadowSelector, " .slds-cell-error", shadowSelector, " {padding-left: 0;}.slds-table_edit:not(.slds-no-cell-focus)", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > .slds-cell-edit.slds-has-focus", shadowSelector, " {background-color: white;-webkit-box-shadow: #0176d3 0 0 0 1px inset;box-shadow: #0176d3 0 0 0 1px inset;}.slds-table_edit.slds-table", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > .slds-cell-edit:hover", shadowSelector, " {background-color: white;}.slds-table_edit.slds-table", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > .slds-cell-edit.slds-is-edited", shadowSelector, " {background-color: #faffbd;}.slds-table_edit.slds-table", shadowSelector, " tbody", shadowSelector, " tr:hover", shadowSelector, " > .slds-cell-edit.slds-has-error", shadowSelector, " {background-color: #faffbd;-webkit-box-shadow: #ea001e 0 0 0 2px inset;box-shadow: #ea001e 0 0 0 2px inset;}.slds-table_edit", shadowSelector, " .slds-button__icon_edit:focus", shadowSelector, " {fill: #1b96ff;}.slds-has-focus", shadowSelector, " .slds-th__action", shadowSelector, " {background-color: white;-webkit-box-shadow: #014486 0 0 0 1px inset;box-shadow: #014486 0 0 0 1px inset;}.slds-has-focus.slds-is-resizable", shadowSelector, " .slds-th__action", shadowSelector, ",.slds-has-focus.slds-is-resizable", shadowSelector, " .slds-th__action:focus", shadowSelector, ",.slds-has-focus.slds-is-resizable", shadowSelector, " .slds-th__action:hover", shadowSelector, ",.slds-has-focus.slds-is-resizable", shadowSelector, " .slds-th__action:focus:hover", shadowSelector, ",.slds-is-resizable", shadowSelector, " .slds-th__action:focus", shadowSelector, ",.slds-is-resizable", shadowSelector, " .slds-th__action:focus:hover", shadowSelector, " {background-color: white;-webkit-box-shadow: #014486 0 0 0 1px inset, #014486 -0.25rem 0 0 inset;box-shadow: #014486 0 0 0 1px inset, #014486 -0.25rem 0 0 inset;}.slds-table", shadowSelector, " .slds-cell-edit", shadowSelector, " {outline: 0;}.slds-table", shadowSelector, " .slds-cell-edit.slds-has-focus", shadowSelector, " {background-color: white;-webkit-box-shadow: #014486 0 0 0 1px inset;box-shadow: #014486 0 0 0 1px inset;}.slds-table", shadowSelector, " .slds-cell-edit.slds-has-focus", shadowSelector, " .slds-button__icon_edit", shadowSelector, ",.slds-table", shadowSelector, " .slds-cell-edit.slds-has-focus", shadowSelector, " .slds-button__icon_lock", shadowSelector, " {opacity: 1;}.slds-table", shadowSelector, " .slds-cell-edit.slds-has-focus:hover", shadowSelector, " {-webkit-box-shadow: #014486 0 0 0 1px inset;box-shadow: #014486 0 0 0 1px inset;}.slds-table", shadowSelector, " .slds-cell-edit.slds-has-focus", shadowSelector, " a:focus", shadowSelector, " {text-decoration: underline;outline: none;}.slds-table", shadowSelector, " .slds-cell-edit.slds-is-edited", shadowSelector, ",.slds-table", shadowSelector, " .slds-cell-edit.slds-is-edited:hover", shadowSelector, " {background-color: #faffbd;}.slds-table", shadowSelector, " .slds-cell-edit.slds-has-error", shadowSelector, ",.slds-table", shadowSelector, " .slds-cell-edit.slds-has-error:hover", shadowSelector, " {background-color: #faffbd;-webkit-box-shadow: #ea001e 0 0 0 2px inset;box-shadow: #ea001e 0 0 0 2px inset;}.slds-cell-edit__button", shadowSelector, " {width: 1.25rem;height: 1.25rem;-ms-flex-negative: 0;flex-shrink: 0;}.slds-cell-edit__button:focus", shadowSelector, " .slds-button__icon_edit", shadowSelector, " {opacity: 1;}.slds-no-cell-focus", shadowSelector, " .slds-has-focus", shadowSelector, " {background: #f3f3f3;-webkit-box-shadow: none;box-shadow: none;}.slds-no-cell-focus", shadowSelector, " .slds-has-focus", shadowSelector, " .slds-th__action", shadowSelector, ",.slds-no-cell-focus", shadowSelector, " .slds-has-focus", shadowSelector, " .slds-th__action:hover", shadowSelector, ",.slds-no-cell-focus", shadowSelector, " .slds-has-focus", shadowSelector, " .slds-th__action:focus", shadowSelector, ",.slds-no-cell-focus", shadowSelector, " .slds-has-focus", shadowSelector, " .slds-th__action:focus:hover", shadowSelector, " {color: inherit;background-color: white;-webkit-box-shadow: none;box-shadow: none;}.slds-no-cell-focus", shadowSelector, " .slds-has-focus", shadowSelector, " .slds-button__icon_edit", shadowSelector, " {opacity: 1;}.slds-no-cell-focus", shadowSelector, " .slds-has-focus.slds-is-resizable:hover", shadowSelector, " .slds-th__action", shadowSelector, " {background-color: white;-webkit-box-shadow: #e5e5e5 -0.25rem 0 0 inset;box-shadow: #e5e5e5 -0.25rem 0 0 inset;}.slds-no-cell-focus", shadowSelector, " .slds-is-sortable.slds-has-focus", shadowSelector, " .slds-is-sortable__icon", shadowSelector, " {display: none;}.slds-no-cell-focus", shadowSelector, " .slds-is-sorted.slds-has-focus", shadowSelector, " .slds-is-sortable__icon", shadowSelector, " {display: inline-block;fill: #747474;}.slds-no-cell-focus", shadowSelector, " .slds-is-edited", shadowSelector, ",.slds-no-cell-focus", shadowSelector, " .slds-is-edited:hover", shadowSelector, " {background-color: #faffbd;}.slds-no-cell-focus", shadowSelector, " .slds-has-error", shadowSelector, ",.slds-no-cell-focus", shadowSelector, " .slds-has-error:hover", shadowSelector, " {background-color: #faffbd;-webkit-box-shadow: #ea001e 0 0 0 2px inset;box-shadow: #ea001e 0 0 0 2px inset;}.slds-no-cell-focus", shadowSelector, " thead", shadowSelector, " .slds-has-focus:hover", shadowSelector, " {color: #0176d3;}.slds-no-cell-focus", shadowSelector, " thead", shadowSelector, " .slds-has-focus:hover", shadowSelector, " .slds-is-sortable__icon", shadowSelector, " {display: inline-block;fill: #0176d3;}.slds-hint-parent", shadowSelector, " .slds-cell-edit", shadowSelector, " .slds-button__icon_edit", shadowSelector, ",.slds-hint-parent", shadowSelector, " .slds-cell-edit", shadowSelector, " .slds-button__icon_lock", shadowSelector, " {opacity: 0;}.slds-hint-parent", shadowSelector, " .slds-cell-edit:hover", shadowSelector, " .slds-button__icon_edit", shadowSelector, ",.slds-hint-parent", shadowSelector, " .slds-cell-edit:focus", shadowSelector, " .slds-button__icon_edit", shadowSelector, " {opacity: 0.5;}.slds-hint-parent", shadowSelector, " .slds-cell-edit:hover", shadowSelector, " .slds-button__icon_edit:hover", shadowSelector, ",.slds-hint-parent", shadowSelector, " .slds-cell-edit:hover", shadowSelector, " .slds-button__icon_edit:focus", shadowSelector, ",.slds-hint-parent", shadowSelector, " .slds-cell-edit:focus", shadowSelector, " .slds-button__icon_edit:hover", shadowSelector, ",.slds-hint-parent", shadowSelector, " .slds-cell-edit:focus", shadowSelector, " .slds-button__icon_edit:focus", shadowSelector, " {fill: #1b96ff;opacity: 1;}.slds-hint-parent", shadowSelector, " .slds-cell-edit:hover", shadowSelector, " .slds-button__icon_lock", shadowSelector, ",.slds-hint-parent", shadowSelector, " .slds-cell-edit:focus", shadowSelector, " .slds-button__icon_lock", shadowSelector, " {opacity: 0.5;}.slds-hint-parent", shadowSelector, " .slds-cell-edit.slds-has-focus", shadowSelector, " .slds-button__icon_edit", shadowSelector, " {fill: #747474;opacity: 1;}.slds-form-element__label_edit", shadowSelector, " {margin: 0 0.125rem 0;}.slds-popover_edit", shadowSelector, " {border-top: 0;border-top-left-radius: 0;border-top-right-radius: 0;}.slds-popover_edit", shadowSelector, " .slds-popover__body", shadowSelector, " {padding: 0.25rem 0.25rem 0.25rem 0;}.slds-popover_edit", shadowSelector, " .slds-form-element__help", shadowSelector, " {width: 100%;padding-left: 0.75rem;}.slds-dueling-list", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;clear: left;}.slds-dueling-list__column", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}.slds-dueling-list__column", shadowSelector, " .slds-button", shadowSelector, " {margin: 0.25rem;}.slds-dueling-list__column", shadowSelector, " .slds-button:first-of-type", shadowSelector, " {margin-top: 1.5rem;}.slds-dueling-list__column_responsive", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 15rem;flex: 1 1 15rem;-ms-flex-wrap: wrap;flex-wrap: wrap;overflow: hidden;min-width: 6rem;}.slds-dueling-list__column_responsive", shadowSelector, " .slds-dueling-list__options", shadowSelector, " {width: auto;max-width: 100%;}.slds-dueling-list__options", shadowSelector, ",.slds-picklist__options", shadowSelector, " {border: 1px solid #c9c9c9;border-radius: 0.25rem;padding: 0.25rem 0;width: 15rem;height: 15rem;background-color: white;overflow: auto;}.slds-dueling-list__options", shadowSelector, " [aria-selected=\"true\"]", shadowSelector, ",.slds-picklist__options", shadowSelector, " [aria-selected=\"true\"]", shadowSelector, " {background-color: #0176d3;color: white;}.slds-dueling-list__options", shadowSelector, " [aria-selected=\"true\"]:hover", shadowSelector, ",.slds-dueling-list__options", shadowSelector, " [aria-selected=\"true\"]:focus", shadowSelector, ",.slds-picklist__options", shadowSelector, " [aria-selected=\"true\"]:hover", shadowSelector, ",.slds-picklist__options", shadowSelector, " [aria-selected=\"true\"]:focus", shadowSelector, " {background: #014486;color: white;}.slds-dueling-list__options", shadowSelector, " .slds-is-grabbed", shadowSelector, ",.slds-picklist__options", shadowSelector, " .slds-is-grabbed", shadowSelector, " {-webkit-transform: rotate(3deg);transform: rotate(3deg);}.slds-dueling-list__options.slds-is-disabled", shadowSelector, ",.slds-picklist__options.slds-is-disabled", shadowSelector, " {background-color: #f3f3f3;border-color: #c9c9c9;color: #444444;}.slds-dueling-list__options.slds-is-disabled:hover", shadowSelector, ",.slds-picklist__options.slds-is-disabled:hover", shadowSelector, " {cursor: not-allowed;}.slds-dueling-list__options.slds-is-disabled", shadowSelector, " .slds-listbox__option:hover", shadowSelector, ",.slds-picklist__options.slds-is-disabled", shadowSelector, " .slds-listbox__option:hover", shadowSelector, " {cursor: not-allowed;background-color: transparent;}.slds-dueling-list__options.slds-is-disabled", shadowSelector, " .slds-listbox__option:focus", shadowSelector, ",.slds-picklist__options.slds-is-disabled", shadowSelector, " .slds-listbox__option:focus", shadowSelector, " {background-color: transparent;}.slds-file-selector", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;}.slds-file-selector__dropzone", shadowSelector, " {padding: 0.125rem;border: 1px dashed #e5e5e5;border-radius: 0.25rem;}.slds-file-selector__dropzone.slds-has-drag-over", shadowSelector, " {outline: 0;border-color: #1b96ff;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;border-style: solid;}.slds-file-selector__input:focus", shadowSelector, " ~ .slds-file-selector__body", shadowSelector, " > .slds-file-selector__button", shadowSelector, " {-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;}.slds-file-selector__input[disabled]", shadowSelector, " ~ .slds-file-selector__body", shadowSelector, " {color: #c9c9c9;}.slds-file-selector__input[disabled]", shadowSelector, " ~ .slds-file-selector__body", shadowSelector, " > .slds-file-selector__button", shadowSelector, " {background: #f3f3f3;border-color: rgba(0, 0, 0, 0);color: white;}.slds-file-selector__input[disabled]", shadowSelector, " ~ .slds-file-selector__body", shadowSelector, " > .slds-file-selector__body-icon", shadowSelector, " {fill: currentColor;}.slds-file-selector__button", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-file-selector_files", shadowSelector, " {}.slds-file-selector_files", shadowSelector, " .slds-file-selector__body", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-file-selector_files", shadowSelector, " .slds-file-selector__text", shadowSelector, " {margin-left: 0.5rem;margin-right: 0.75rem;}.slds-file-selector_images", shadowSelector, " {display: block;}.slds-file-selector_images", shadowSelector, " .slds-file-selector__dropzone", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-ms-flex-line-pack: center;align-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin: auto;padding: 1rem;}.slds-file-selector_images", shadowSelector, " .slds-file-selector__body", shadowSelector, " {text-align: center;}.slds-file-selector_images", shadowSelector, " .slds-file-selector__text", shadowSelector, " {margin-top: 0.75rem;}.slds-file-selector_integrated", shadowSelector, " {width: 100%;height: 100%;position: relative;display: block;}.slds-file-selector__dropzone_integrated", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-ms-flex-line-pack: center;align-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin: auto;position: absolute;top: 0;left: 0;right: 0;bottom: 0;border: 0;opacity: 0;z-index: -1;}.slds-file-selector__dropzone_integrated.slds-has-drag", shadowSelector, " {background: rgba(255, 255, 255, 0.75);opacity: 1;z-index: 8000;}.slds-file-selector__dropzone_integrated.slds-has-drag-over", shadowSelector, " {background: #f3f3f3;-webkit-box-shadow: 0 0 0 4px #1b96ff inset;box-shadow: 0 0 0 4px #1b96ff inset;}.slds-file-selector__body_integrated", shadowSelector, " {width: 12rem;height: 12rem;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-ms-flex-line-pack: center;align-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin: auto;background: white;-webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);border: 1px solid #e5e5e5;border-radius: 0.25rem;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}.slds-file-selector__text_integrated", shadowSelector, " {margin-top: 0.75rem;}.slds-form-element", shadowSelector, " {position: relative;min-width: 0;}.slds-form-element__label", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: auto;-ms-hyphens: auto;hyphens: auto;display: inline-block;color: #444444;font-size: 0.75rem;padding-right: 0.5rem;padding-top: 0.25rem;margin-bottom: 0.125rem;}[dir=\"rtl\"]", shadowSelector, " .slds-form-element__label", shadowSelector, " {padding-right: 0;padding-left: 0.5rem;}.slds-form-element__label:empty", shadowSelector, " {margin: 0;}.slds-form-element__control", shadowSelector, " {clear: left;position: relative;}[dir=\"rtl\"]", shadowSelector, " .slds-form-element__control", shadowSelector, " {clear: right;}.slds-form-element__control", shadowSelector, " .slds-radio", shadowSelector, ",.slds-form-element__control", shadowSelector, " .slds-checkbox", shadowSelector, " {display: block;}.slds-form-element__icon", shadowSelector, " {display: inline-block;position: relative;padding-top: 0.25rem;vertical-align: top;line-height: 1;z-index: 1;}.slds-form-element__icon", shadowSelector, " .slds-button_icon", shadowSelector, " {position: relative;}.slds-form-element__help", shadowSelector, ",.slds-form-element__helper", shadowSelector, " {font-size: 0.75rem;margin-top: 0.125rem;display: block;}.slds-form-element_edit", shadowSelector, " .slds-form-element__static", shadowSelector, " {width: calc(100% - 1.5rem);}.slds-form-element_readonly", shadowSelector, " {-ms-flex-preferred-size: 0%;flex-basis: 0%;border-bottom: 1px solid #e5e5e5;margin-bottom: 0;}.slds-form-element_readonly", shadowSelector, " .slds-form-element__control", shadowSelector, " {padding-top: 0.125rem;padding-bottom: 0.125rem;}.slds-form-element_readonly", shadowSelector, " .slds-form-element__label", shadowSelector, " {margin-bottom: 0;}.slds-form-element__legend", shadowSelector, " {font-weight: 700;float: left;}[dir=\"rtl\"]", shadowSelector, " .slds-form-element__legend", shadowSelector, " {float: right;padding-right: 0;}.slds-form-element__addon", shadowSelector, " {display: inline-block;margin: 0 0.5rem;-ms-flex-item-align: center;align-self: center;}.slds-form-element__static", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;display: inline-block;font-size: 0.875rem;font-weight: 400;color: #181818;width: 100%;}.slds-form-element__static.slds-text-longform", shadowSelector, " *:last-child", shadowSelector, " {margin-bottom: 0;}.slds-form-element__static:empty", shadowSelector, " {min-height: calc(1.25rem + 1px);vertical-align: bottom;}.slds-form-element__static--edit", shadowSelector, " {width: calc(100% - 1.5rem);}.slds-required", shadowSelector, " {color: #ea001e;margin: 0 0.125rem;}.slds-has-error", shadowSelector, " .slds-form-element__help", shadowSelector, " {color: #ea001e;}.slds-form-element_compound", shadowSelector, " .slds-form-element__row", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;margin-bottom: 0.25rem;margin-left: -0.25rem;margin-right: -0.25rem;}.slds-form-element_compound", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__label", shadowSelector, " {padding-top: 0;}.slds-form-element_compound", shadowSelector, " .slds-form-element", shadowSelector, " {padding-left: 0.25rem;padding-right: 0.25rem;}.slds-form-element_horizontal", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " {display: block;}.slds-form-element_horizontal:not(.slds-form-element_readonly)", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element:not(.slds-form-element_readonly)", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal:not(.slds-form-element_readonly)", shadowSelector, " {margin-bottom: 0.5rem;}.slds-form-element_horizontal:not([class*=\"slds-size\"])", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element:not([class*=\"slds-size\"])", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal:not([class*=\"slds-size\"])", shadowSelector, " {width: 100%;-ms-flex-preferred-size: 100%;flex-basis: 100%;}.slds-form-element_horizontal:not(.slds-is-editing)", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element:not(.slds-is-editing)", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal:not(.slds-is-editing)", shadowSelector, " {padding: 0.25rem 0.25rem;}.slds-form-element_horizontal", shadowSelector, " .slds-form-element", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " {padding: 0;margin-bottom: 0;}.slds-form-element_horizontal.slds-is-edited", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element.slds-is-edited", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal.slds-is-edited", shadowSelector, " {padding-top: 1.25rem;}@media (min-width: 48em) {.slds-form-element_horizontal.slds-form-element_1-col", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element.slds-form-element_1-col", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal.slds-form-element_1-col", shadowSelector, " .slds-form-element__label", shadowSelector, " {max-width: calc((50% - 33.333%) - 1.25rem);}.slds-form-element_horizontal.slds-form-element_1-col", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element.slds-form-element_1-col", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal.slds-form-element_1-col", shadowSelector, " .slds-form-element__control", shadowSelector, " {padding-left: calc((50% - 33.333%) - (0.25rem * 2));}}@media (min-width: 48em) {.slds-form-element_horizontal", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__label", shadowSelector, " {float: left;max-width: calc(33% - 1.25rem);-ms-flex-preferred-size: calc(33% - 1.25rem);flex-basis: calc(33% - 1.25rem);margin-bottom: 0;position: relative;z-index: 1;}.slds-form-element_horizontal", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__control", shadowSelector, " {padding-left: 33%;clear: none;}.slds-form-element_horizontal", shadowSelector, " .slds-form-element__control", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__control", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__control", shadowSelector, " .slds-form-element__control", shadowSelector, " {padding-left: 0;}.slds-form-element_horizontal", shadowSelector, " .slds-form-element__icon", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__icon", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__icon", shadowSelector, " {float: left;padding-top: 0.25rem;}.slds-form-element_horizontal", shadowSelector, " .slds-checkbox_standalone", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox_standalone", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-checkbox_standalone", shadowSelector, " {padding: 0.25rem 0;}.slds-form-element_horizontal", shadowSelector, " .slds-checkbox:not(.slds-checkbox_stacked)", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form-element_horizontal", shadowSelector, " .slds-radio", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox:not(.slds-checkbox_stacked)", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-radio", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-checkbox:not(.slds-checkbox_stacked)", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-radio", shadowSelector, " .slds-form-element__label", shadowSelector, " {position: relative;float: none;max-width: 100%;width: auto;}.slds-form-element_horizontal", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form-element_horizontal", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form-element_horizontal", shadowSelector, " .slds-dueling-list__column", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-dueling-list__column", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__label", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__row", shadowSelector, " .slds-form-element__control", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-dueling-list__column", shadowSelector, " .slds-form-element__label", shadowSelector, " {width: auto;max-width: 100%;-ms-flex-preferred-size: auto;flex-basis: auto;float: none;position: relative;padding-left: 0;margin-bottom: 0;}.slds-form-element_horizontal", shadowSelector, " .slds-dueling-list", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-dueling-list", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-dueling-list", shadowSelector, " {clear: none;}.slds-form-element_horizontal", shadowSelector, " .slds-input-has-icon_left", shadowSelector, " .slds-input__icon", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-input-has-icon_left", shadowSelector, " .slds-input__icon", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-input-has-icon_left", shadowSelector, " .slds-input__icon", shadowSelector, " {left: calc(33% + 0.75rem);}.slds-form-element_horizontal", shadowSelector, " .slds-input-has-icon_left-right", shadowSelector, " .slds-input__icon_left", shadowSelector, ", .slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-input-has-icon_left-right", shadowSelector, " .slds-input__icon_left", shadowSelector, ", .slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-input-has-icon_left-right", shadowSelector, " .slds-input__icon_left", shadowSelector, " {left: calc(33% + 0.75rem);}}.slds-form-element_horizontal", shadowSelector, " .slds-form-element__help", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__help", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element_horizontal", shadowSelector, " .slds-form-element__help", shadowSelector, " {margin-left: 33%;}.slds-form__row", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;margin-left: -0.75rem;margin-right: -0.75rem;}.slds-form__item", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-flex: 1;-ms-flex: 1 1 0%;flex: 1 1 0%;min-width: 280px;padding-left: 0.75rem;padding-right: 0.75rem;}.slds-is-edited", shadowSelector, " {background: #faffbd;}.slds-is-edited", shadowSelector, " .slds-form-element__undo", shadowSelector, " {top: -1.25rem;right: 0.25rem;}.slds-form-element__undo", shadowSelector, " {position: absolute;top: 0;right: 0;}.slds-form-element_stacked", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " {display: block;}.slds-form-element_stacked:not(.slds-form-element_readonly)", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element:not(.slds-form-element_readonly)", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked:not(.slds-form-element_readonly)", shadowSelector, " {margin-bottom: 0.5rem;}.slds-form-element_stacked:not(.slds-is-editing)", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element:not(.slds-is-editing)", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked:not(.slds-is-editing)", shadowSelector, " {padding: 0 0.25rem;}.slds-form-element_stacked", shadowSelector, " .slds-form-element", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element", shadowSelector, " {padding: 0;margin-bottom: 0;}.slds-form-element_stacked:not([class*=\"slds-size\"])", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element:not([class*=\"slds-size\"])", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked:not([class*=\"slds-size\"])", shadowSelector, " {width: 100%;-ms-flex-preferred-size: 100%;flex-basis: 100%;}.slds-form-element_stacked", shadowSelector, " .slds-checkbox", shadowSelector, ",.slds-form-element_stacked", shadowSelector, " .slds-radio", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-checkbox", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-radio", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-checkbox", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-radio", shadowSelector, " {display: block;}.slds-form-element_stacked", shadowSelector, " .slds-form-element__label", shadowSelector, ",.slds-form-element_stacked", shadowSelector, " .slds-form-element__control", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__label", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__control", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element__label", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element__control", shadowSelector, " {border-bottom: 0;padding-left: 0;}.slds-form-element_stacked", shadowSelector, " .slds-form-element__control", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__control", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element__control", shadowSelector, " {width: 100%;-ms-flex-preferred-size: 100%;flex-basis: 100%;clear: left;}[dir=\"rtl\"]", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element__control", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " .slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__control", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " .slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element__control", shadowSelector, " {clear: right;}.slds-form-element_stacked", shadowSelector, " .slds-form-element__icon", shadowSelector, ",.slds-form_stacked", shadowSelector, " .slds-form-element", shadowSelector, " .slds-form-element__icon", shadowSelector, ",.slds-form_horizontal", shadowSelector, " .slds-form-element_stacked", shadowSelector, " .slds-form-element__icon", shadowSelector, " {float: none;padding-top: 0.25rem;}.slds-icon_container", shadowSelector, ",.slds-icon__container", shadowSelector, " {display: inline-block;border-radius: var(--slds-c-icon-radius-border, var(--sds-c-icon-radius-border, 0.25rem));line-height: 1;background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, transparent));}.slds-icon_container_circle", shadowSelector, ",.slds-icon__container_circle", shadowSelector, " {--slds-c-icon-radius-border: 50%;padding: 0.5rem;}[dir=\"rtl\"]", shadowSelector, " .slds-icon_flip", shadowSelector, " {-webkit-transform: scaleX(-1);transform: scaleX(-1);}[class*=\"slds-icon-action-\"]", shadowSelector, " {padding: 0.5rem;border-radius: 50%;}.slds-icon-action-new-custom18", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4dca76));}.slds-icon-action-new-custom29", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #bdd25f));}.slds-icon-action-edit-groups", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-action-new-custom9", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b9ee2));}.slds-icon-action-log-a-call", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #48c3cc));}.slds-icon-action-new-custom19", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3abeb1));}.slds-icon-action-filter", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fd90b5));}.slds-icon-action-user-activation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-opportunity-competitor", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-action-canvas", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8199af));}.slds-icon-action-change-record-type", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-notebook", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e6d478));}.slds-icon-action-docusign", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5080db));}.slds-icon-action-share-link", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7a9ae6));}.slds-icon-action-add-file", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-action-edit-relationship", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1dccbf));}.slds-icon-action-notebook", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e6d478));}.slds-icon-action-new-lead", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-action-new-custom-object", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a7d44d));}.slds-icon-action-new-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-action-question-post-action", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #32af5c));}.slds-icon-action-share-file", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #baac93));}.slds-icon-action-default-custom-object", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8199af));}.slds-icon-action-opportunity-team-member", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-action-add-photo-video", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00cdc0));}.slds-icon-action-sort", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fab9a5));}.slds-icon-action-call", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1fcaa0));}.slds-icon-action-concur", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4cc3c7));}.slds-icon-action-reject", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00c6b7));}.slds-icon-action-share-poll", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #699be1));}.slds-icon-action-following", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7dcf64));}.slds-icon-action-defer", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef7ead));}.slds-icon-action-opportunity-line-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-action-social-post", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ea74a2));}.slds-icon-action-share-post", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #65cae4));}.slds-icon-action-view-relationship", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-action-adjust-value", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #47b46c));}.slds-icon-action-upload", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-remove-relationship", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef6e64));}.slds-icon-action-freeze-user", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-person-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-action-bug", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef6e5d));}.slds-icon-action-apex", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #696e71));}.slds-icon-action-new-opportunity", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-action-fallback", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9895ee));}.slds-icon-action-dial-in", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8b9ae3));}.slds-icon-action-approval", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00c6b7));}.slds-icon-action-change-owner", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-task", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-action-priority", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fbb439));}.slds-icon-action-remove", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-web-link", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #56aadf));}.slds-icon-action-leave-group", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f39e58));}.slds-icon-action-manage-perm-sets", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-close", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef6e64));}.slds-icon-action-google-news", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f5675b));}.slds-icon-action-announcement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fe8f60));}.slds-icon-action-back", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0dc2d9));}.slds-icon-action-new-custom90", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #22a48a));}.slds-icon-action-download", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-custom80", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #659ad5));}.slds-icon-action-new-custom91", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #bf7b66));}.slds-icon-action-search", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #48adeb));}.slds-icon-action-new-event", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-action-new-custom70", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e769b4));}.slds-icon-action-new-custom81", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #da627f));}.slds-icon-action-new-custom92", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #517e82));}.slds-icon-action-refresh", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-share-thanks", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9696e));}.slds-icon-action-update", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #81b4d6));}.slds-icon-action-email", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #95aec5));}.slds-icon-action-join-group", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #779ef2));}.slds-icon-action-new-custom60", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #bf5a88));}.slds-icon-action-new-custom71", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e36ee3));}.slds-icon-action-new-custom82", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d15b97));}.slds-icon-action-new-custom93", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #904d4c));}.slds-icon-action-edit", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1dccbf));}.slds-icon-action-quote", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #88c651));}.slds-icon-action-dropbox", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #52aef9));}.slds-icon-action-description", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7dc37d));}.slds-icon-action-map", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #76c6ee));}.slds-icon-action-user", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #65cae4));}.slds-icon-action-reset-password", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-custom50", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #49bcd3));}.slds-icon-action-new-custom61", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f57376));}.slds-icon-action-new-custom72", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8d9bfb));}.slds-icon-action-new-custom83", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e7806f));}.slds-icon-action-new-custom94", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #439cba));}.slds-icon-action-clone", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ca1e9));}.slds-icon-action-script", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0070d2));}.slds-icon-action-delete", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e6717c));}.slds-icon-action-new-custom40", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #83c75e));}.slds-icon-action-new-custom51", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d8c760));}.slds-icon-action-new-custom62", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b92dc));}.slds-icon-action-new-custom73", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #679ef0));}.slds-icon-action-new-custom84", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f6707b));}.slds-icon-action-new-custom95", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8bcf6a));}.slds-icon-action-share", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-custom30", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f59f71));}.slds-icon-action-new-custom41", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #43b5b5));}.slds-icon-action-new-custom52", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ee8e6f));}.slds-icon-action-new-custom63", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7ccf60));}.slds-icon-action-new-custom74", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #41c8a0));}.slds-icon-action-new-custom85", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f26891));}.slds-icon-action-new-custom96", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6d9de3));}.slds-icon-action-log-event", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ca1e9));}.slds-icon-action-new-group", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #83b6ff));}.slds-icon-action-new-custom20", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #48c7c8));}.slds-icon-action-new-custom31", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb687f));}.slds-icon-action-new-custom42", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #cfd05b));}.slds-icon-action-info", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-new-custom53", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f36e83));}.slds-icon-action-new-custom64", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #618fd8));}.slds-icon-action-new-custom75", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #cd9f65));}.slds-icon-action-new-custom86", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e260ab));}.slds-icon-action-flow", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-action-new-custom97", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #dd6085));}.slds-icon-action-submit-for-approval", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #50cc7a));}.slds-icon-action-new", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #33bce7));}.slds-icon-action-new-campaign", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f49756));}.slds-icon-action-new-custom10", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6488e3));}.slds-icon-action-new-custom21", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8a7aed));}.slds-icon-action-new-custom32", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #38c393));}.slds-icon-action-new-custom43", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f93f9));}.slds-icon-action-new-custom54", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ea70b1));}.slds-icon-action-new-custom65", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f279ab));}.slds-icon-action-new-custom76", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #db6d7a));}.slds-icon-action-new-custom87", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d876e5));}.slds-icon-action-new-custom98", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e1be5c));}.slds-icon-action-new-case", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-action-new-custom100", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e15d76));}.slds-icon-action-new-custom1", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff7b84));}.slds-icon-action-new-contact", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a094ed));}.slds-icon-action-office-365", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff8041));}.slds-icon-action-new-custom11", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8784ea));}.slds-icon-action-new-custom22", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8b85f9));}.slds-icon-action-new-custom33", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #97cf5d));}.slds-icon-action-new-custom44", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #c8ca58));}.slds-icon-action-new-custom55", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d66ee0));}.slds-icon-action-new-custom66", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d8be5f));}.slds-icon-action-new-custom77", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b55d5b));}.slds-icon-action-new-custom88", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #996fe6));}.slds-icon-action-new-custom99", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f0856e));}.slds-icon-action-add-contact", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a094ed));}.slds-icon-action-evernote", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #86c86f));}.slds-icon-action-new-custom2", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #cfd05c));}.slds-icon-action-lead-convert", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-action-new-custom12", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #dc71d1));}.slds-icon-action-new-custom23", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b070e6));}.slds-icon-action-new-custom34", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d58a6a));}.slds-icon-action-new-custom45", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d95879));}.slds-icon-action-new-custom56", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #718deb));}.slds-icon-action-new-custom67", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f87d76));}.slds-icon-action-recall", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4a698d));}.slds-icon-action-new-custom78", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5a95dd));}.slds-icon-action-new-custom89", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3e99be));}.slds-icon-action-follow", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #31b9f8));}.slds-icon-action-record", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7dc37d));}.slds-icon-action-new-custom3", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ecb46c));}.slds-icon-action-new-note", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e6d478));}.slds-icon-action-new-custom13", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #df6184));}.slds-icon-action-new-custom24", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e56798));}.slds-icon-action-new-custom35", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9637e));}.slds-icon-action-new-custom46", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #67a5e7));}.slds-icon-action-new-custom57", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5a9cdd));}.slds-icon-action-new-custom68", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f26979));}.slds-icon-action-new-custom79", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8ed363));}.slds-icon-action-new-child-case", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fa975c));}.slds-icon-action-new-custom4", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e1d951));}.slds-icon-action-new-custom14", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3cc2b3));}.slds-icon-action-new-custom25", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e46fbe));}.slds-icon-action-new-custom36", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d472d4));}.slds-icon-action-new-custom47", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5fcc64));}.slds-icon-action-new-custom58", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34b59d));}.slds-icon-action-new-custom69", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ed6387));}.slds-icon-action-new-custom5", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9fdb66));}.slds-icon-action-goal", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #56aadf));}.slds-icon-action-new-custom15", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f77e75));}.slds-icon-action-new-custom26", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7698f0));}.slds-icon-action-new-custom37", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8c89f2));}.slds-icon-action-new-custom48", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef697f));}.slds-icon-action-new-custom59", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e3d067));}.slds-icon-action-new-custom6", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54c473));}.slds-icon-action-log-this-event", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-action-new-custom16", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9af67));}.slds-icon-action-new-custom27", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5ab0d2));}.slds-icon-action-new-custom38", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #53b6d7));}.slds-icon-action-new-custom49", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e25c80));}.slds-icon-action-new-custom7", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6a89e5));}.slds-icon-action-more", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-action-add-relationship", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-action-new-custom17", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #acd360));}.slds-icon-action-new-custom28", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #89c059));}.slds-icon-action-new-custom39", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4fbe75));}.slds-icon-action-password-unlock", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-check", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-action-update-status", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1ec7be));}.slds-icon-action-preview", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-action-new-custom8", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #50ceb9));}.slds-icon-custom-custom110", shadowSelector, ",.slds-icon-custom-110", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom100", shadowSelector, ",.slds-icon-custom-100", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e15d76));color: white;}.slds-icon-custom-custom111", shadowSelector, ",.slds-icon-custom-111", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom1", shadowSelector, ",.slds-icon-custom-1", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff7b84));color: white;}.slds-icon-custom-custom101", shadowSelector, ",.slds-icon-custom-101", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom112", shadowSelector, ",.slds-icon-custom-112", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom2", shadowSelector, ",.slds-icon-custom-2", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #cfd05c));color: white;}.slds-icon-custom-custom102", shadowSelector, ",.slds-icon-custom-102", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom113", shadowSelector, ",.slds-icon-custom-113", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom90", shadowSelector, ",.slds-icon-custom-90", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #22a48a));color: white;}.slds-icon-custom-custom3", shadowSelector, ",.slds-icon-custom-3", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ecb46c));color: white;}.slds-icon-custom-custom103", shadowSelector, ",.slds-icon-custom-103", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom80", shadowSelector, ",.slds-icon-custom-80", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #659ad5));color: white;}.slds-icon-custom-custom91", shadowSelector, ",.slds-icon-custom-91", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #bf7b66));color: white;}.slds-icon-custom-custom4", shadowSelector, ",.slds-icon-custom-4", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e1d951));color: white;}.slds-icon-custom-custom104", shadowSelector, ",.slds-icon-custom-104", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom70", shadowSelector, ",.slds-icon-custom-70", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e769b4));color: white;}.slds-icon-custom-custom81", shadowSelector, ",.slds-icon-custom-81", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #da627f));color: white;}.slds-icon-custom-custom92", shadowSelector, ",.slds-icon-custom-92", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #517e82));color: white;}.slds-icon-custom-custom5", shadowSelector, ",.slds-icon-custom-5", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9fdb66));color: white;}.slds-icon-custom-custom105", shadowSelector, ",.slds-icon-custom-105", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom60", shadowSelector, ",.slds-icon-custom-60", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #bf5a88));color: white;}.slds-icon-custom-custom71", shadowSelector, ",.slds-icon-custom-71", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e36ee3));color: white;}.slds-icon-custom-custom82", shadowSelector, ",.slds-icon-custom-82", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d15b97));color: white;}.slds-icon-custom-custom93", shadowSelector, ",.slds-icon-custom-93", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #904d4c));color: white;}.slds-icon-custom-custom6", shadowSelector, ",.slds-icon-custom-6", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54c473));color: white;}.slds-icon-custom-custom106", shadowSelector, ",.slds-icon-custom-106", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom50", shadowSelector, ",.slds-icon-custom-50", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #49bcd3));color: white;}.slds-icon-custom-custom61", shadowSelector, ",.slds-icon-custom-61", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f57376));color: white;}.slds-icon-custom-custom72", shadowSelector, ",.slds-icon-custom-72", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8d9bfb));color: white;}.slds-icon-custom-custom83", shadowSelector, ",.slds-icon-custom-83", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e7806f));color: white;}.slds-icon-custom-custom94", shadowSelector, ",.slds-icon-custom-94", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #439cba));color: white;}.slds-icon-custom-custom7", shadowSelector, ",.slds-icon-custom-7", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6a89e5));color: white;}.slds-icon-custom-custom107", shadowSelector, ",.slds-icon-custom-107", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom40", shadowSelector, ",.slds-icon-custom-40", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #83c75e));color: white;}.slds-icon-custom-custom51", shadowSelector, ",.slds-icon-custom-51", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d8c760));color: white;}.slds-icon-custom-custom62", shadowSelector, ",.slds-icon-custom-62", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b92dc));color: white;}.slds-icon-custom-custom73", shadowSelector, ",.slds-icon-custom-73", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #679ef0));color: white;}.slds-icon-custom-custom84", shadowSelector, ",.slds-icon-custom-84", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f6707b));color: white;}.slds-icon-custom-custom95", shadowSelector, ",.slds-icon-custom-95", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8bcf6a));color: white;}.slds-icon-custom-custom8", shadowSelector, ",.slds-icon-custom-8", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #50ceb9));color: white;}.slds-icon-custom-custom108", shadowSelector, ",.slds-icon-custom-108", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom30", shadowSelector, ",.slds-icon-custom-30", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f59f71));color: white;}.slds-icon-custom-custom41", shadowSelector, ",.slds-icon-custom-41", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #43b5b5));color: white;}.slds-icon-custom-custom52", shadowSelector, ",.slds-icon-custom-52", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ee8e6f));color: white;}.slds-icon-custom-custom63", shadowSelector, ",.slds-icon-custom-63", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7ccf60));color: white;}.slds-icon-custom-custom74", shadowSelector, ",.slds-icon-custom-74", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #41c8a0));color: white;}.slds-icon-custom-custom85", shadowSelector, ",.slds-icon-custom-85", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f26891));color: white;}.slds-icon-custom-custom96", shadowSelector, ",.slds-icon-custom-96", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6d9de3));color: white;}.slds-icon-custom-custom9", shadowSelector, ",.slds-icon-custom-9", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b9ee2));color: white;}.slds-icon-custom-custom109", shadowSelector, ",.slds-icon-custom-109", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));color: white;}.slds-icon-custom-custom20", shadowSelector, ",.slds-icon-custom-20", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #48c7c8));color: white;}.slds-icon-custom-custom31", shadowSelector, ",.slds-icon-custom-31", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb687f));color: white;}.slds-icon-custom-custom42", shadowSelector, ",.slds-icon-custom-42", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #cfd05b));color: white;}.slds-icon-custom-custom53", shadowSelector, ",.slds-icon-custom-53", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f36e83));color: white;}.slds-icon-custom-custom64", shadowSelector, ",.slds-icon-custom-64", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #618fd8));color: white;}.slds-icon-custom-custom75", shadowSelector, ",.slds-icon-custom-75", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #cd9f65));color: white;}.slds-icon-custom-custom86", shadowSelector, ",.slds-icon-custom-86", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e260ab));color: white;}.slds-icon-custom-custom97", shadowSelector, ",.slds-icon-custom-97", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #dd6085));color: white;}.slds-icon-custom-custom10", shadowSelector, ",.slds-icon-custom-10", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6488e3));color: white;}.slds-icon-custom-custom21", shadowSelector, ",.slds-icon-custom-21", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8a7aed));color: white;}.slds-icon-custom-custom32", shadowSelector, ",.slds-icon-custom-32", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #38c393));color: white;}.slds-icon-custom-custom43", shadowSelector, ",.slds-icon-custom-43", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f93f9));color: white;}.slds-icon-custom-custom54", shadowSelector, ",.slds-icon-custom-54", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ea70b1));color: white;}.slds-icon-custom-custom65", shadowSelector, ",.slds-icon-custom-65", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f279ab));color: white;}.slds-icon-custom-custom76", shadowSelector, ",.slds-icon-custom-76", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #db6d7a));color: white;}.slds-icon-custom-custom87", shadowSelector, ",.slds-icon-custom-87", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d876e5));color: white;}.slds-icon-custom-custom98", shadowSelector, ",.slds-icon-custom-98", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e1be5c));color: white;}.slds-icon-custom-custom11", shadowSelector, ",.slds-icon-custom-11", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8784ea));color: white;}.slds-icon-custom-custom22", shadowSelector, ",.slds-icon-custom-22", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8b85f9));color: white;}.slds-icon-custom-custom33", shadowSelector, ",.slds-icon-custom-33", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #97cf5d));color: white;}.slds-icon-custom-custom44", shadowSelector, ",.slds-icon-custom-44", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #c8ca58));color: white;}.slds-icon-custom-custom55", shadowSelector, ",.slds-icon-custom-55", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d66ee0));color: white;}.slds-icon-custom-custom66", shadowSelector, ",.slds-icon-custom-66", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d8be5f));color: white;}.slds-icon-custom-custom77", shadowSelector, ",.slds-icon-custom-77", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b55d5b));color: white;}.slds-icon-custom-custom88", shadowSelector, ",.slds-icon-custom-88", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #996fe6));color: white;}.slds-icon-custom-custom99", shadowSelector, ",.slds-icon-custom-99", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f0856e));color: white;}.slds-icon-custom-custom12", shadowSelector, ",.slds-icon-custom-12", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #dc71d1));color: white;}.slds-icon-custom-custom23", shadowSelector, ",.slds-icon-custom-23", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b070e6));color: white;}.slds-icon-custom-custom34", shadowSelector, ",.slds-icon-custom-34", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d58a6a));color: white;}.slds-icon-custom-custom45", shadowSelector, ",.slds-icon-custom-45", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d95879));color: white;}.slds-icon-custom-custom56", shadowSelector, ",.slds-icon-custom-56", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #718deb));color: white;}.slds-icon-custom-custom67", shadowSelector, ",.slds-icon-custom-67", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f87d76));color: white;}.slds-icon-custom-custom78", shadowSelector, ",.slds-icon-custom-78", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5a95dd));color: white;}.slds-icon-custom-custom89", shadowSelector, ",.slds-icon-custom-89", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3e99be));color: white;}.slds-icon-custom-custom13", shadowSelector, ",.slds-icon-custom-13", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #df6184));color: white;}.slds-icon-custom-custom24", shadowSelector, ",.slds-icon-custom-24", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e56798));color: white;}.slds-icon-custom-custom35", shadowSelector, ",.slds-icon-custom-35", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9637e));color: white;}.slds-icon-custom-custom46", shadowSelector, ",.slds-icon-custom-46", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #67a5e7));color: white;}.slds-icon-custom-custom57", shadowSelector, ",.slds-icon-custom-57", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5a9cdd));color: white;}.slds-icon-custom-custom68", shadowSelector, ",.slds-icon-custom-68", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f26979));color: white;}.slds-icon-custom-custom79", shadowSelector, ",.slds-icon-custom-79", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8ed363));color: white;}.slds-icon-custom-custom14", shadowSelector, ",.slds-icon-custom-14", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3cc2b3));color: white;}.slds-icon-custom-custom25", shadowSelector, ",.slds-icon-custom-25", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e46fbe));color: white;}.slds-icon-custom-custom36", shadowSelector, ",.slds-icon-custom-36", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d472d4));color: white;}.slds-icon-custom-custom47", shadowSelector, ",.slds-icon-custom-47", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5fcc64));color: white;}.slds-icon-custom-custom58", shadowSelector, ",.slds-icon-custom-58", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34b59d));color: white;}.slds-icon-custom-custom69", shadowSelector, ",.slds-icon-custom-69", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ed6387));color: white;}.slds-icon-custom-custom15", shadowSelector, ",.slds-icon-custom-15", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f77e75));color: white;}.slds-icon-custom-custom26", shadowSelector, ",.slds-icon-custom-26", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7698f0));color: white;}.slds-icon-custom-custom37", shadowSelector, ",.slds-icon-custom-37", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8c89f2));color: white;}.slds-icon-custom-custom48", shadowSelector, ",.slds-icon-custom-48", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef697f));color: white;}.slds-icon-custom-custom59", shadowSelector, ",.slds-icon-custom-59", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e3d067));color: white;}.slds-icon-custom-custom16", shadowSelector, ",.slds-icon-custom-16", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9af67));color: white;}.slds-icon-custom-custom27", shadowSelector, ",.slds-icon-custom-27", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5ab0d2));color: white;}.slds-icon-custom-custom38", shadowSelector, ",.slds-icon-custom-38", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #53b6d7));color: white;}.slds-icon-custom-custom49", shadowSelector, ",.slds-icon-custom-49", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e25c80));color: white;}.slds-icon-custom-custom17", shadowSelector, ",.slds-icon-custom-17", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #acd360));color: white;}.slds-icon-custom-custom28", shadowSelector, ",.slds-icon-custom-28", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #89c059));color: white;}.slds-icon-custom-custom39", shadowSelector, ",.slds-icon-custom-39", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4fbe75));color: white;}.slds-icon-custom-custom18", shadowSelector, ",.slds-icon-custom-18", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4dca76));color: white;}.slds-icon-custom-custom29", shadowSelector, ",.slds-icon-custom-29", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #bdd25f));color: white;}.slds-icon-custom-custom19", shadowSelector, ",.slds-icon-custom-19", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3abeb1));color: white;}.slds-icon-standard-task-2", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-contact", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a094ed));}.slds-icon-standard-multi-select-checkbox", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-work-order", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #50e3c2));}.slds-icon-standard-post", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #65cae4));}.slds-icon-standard-global-constant", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-change-request", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0b827c));}.slds-icon-standard-carousel", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6bbd6e));}.slds-icon-standard-work-contract", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-resource-skill", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c173));}.slds-icon-standard-system-and-global-variable", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-segments", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f28b00));}.slds-icon-standard-account-info", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-goals", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #56aadf));}.slds-icon-standard-tour-check", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9050e9));}.slds-icon-standard-adjust-value", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #47b46c));}.slds-icon-standard-case-wrap-up", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-investment-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-store", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-slider", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-output", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #439cba));}.slds-icon-standard-medication-ingredient", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-store-group", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-all", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-service-territory-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-picklist-choice", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-choice", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-app", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-default", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8199af));}.slds-icon-standard-case-milestone", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-today", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef7ead));}.slds-icon-standard-buyer-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-lead-list", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-standard-work-plan-template", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #449488));}.slds-icon-standard-tableau", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0f1e3c));}.slds-icon-standard-shift", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-product-item-transaction", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-standard-person-language", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-apex", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-reply-text", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88965));}.slds-icon-standard-answer-private", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-immunization", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-asset-downtime-period", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #317a92));}.slds-icon-standard-opportunity-contact-role", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-retail-banking-console", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00afa0));}.slds-icon-standard-channel-program-members", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-apps-admin", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9895ee));}.slds-icon-standard-datadotcom", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-settings", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-network-contract", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ec06e));}.slds-icon-standard-product-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #769ed9));}.slds-icon-standard-metrics", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #56aadf));}.slds-icon-standard-topic2", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #56aad0));}.slds-icon-standard-partner-fund-allocation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-care-request-reviewer", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-approval", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #50cc7a));}.slds-icon-standard-work-queue", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-iot-orchestrations", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-visualforce-page", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-person-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-entity", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-standard-service-territory-location", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-qualifications", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-entitlement-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-form", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ec06e));}.slds-icon-standard-products", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-order-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #769ed3));}.slds-icon-standard-read-receipts", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-javascript-button", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-maintenance-asset", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-work-plan-rule", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #449488));}.slds-icon-standard-loop", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-portal-roles-and-subordinates", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7a9ae6));}.slds-icon-standard-work-capacity-limit", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-employee-organization", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-workforce-engagement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9d3856));}.slds-icon-standard-constant", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-marketing-actions", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6bbd6e));}.slds-icon-standard-case-transcript", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-timesheet-entry", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7dc37d));}.slds-icon-standard-key-dates", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b9ee2));}.slds-icon-standard-multi-picklist", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-product-workspace", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-visit-templates", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-restriction-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-task", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-answer-best", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-attach", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9050e9));}.slds-icon-standard-asset-action", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #317a92));}.slds-icon-standard-section", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-service-request", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589e4));}.slds-icon-standard-orders", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #769ed9));}.slds-icon-standard-propagation-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-budget", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #107cad));}.slds-icon-standard-report-type", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c65a));}.slds-icon-standard-past-chat", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88960));}.slds-icon-standard-feedback", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6da1ea));}.slds-icon-standard-action-list-component", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5876a3));}.slds-icon-standard-opportunity-splits", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-location-permit", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34b59d));}.slds-icon-standard-messaging-user", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-filter-criteria", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-trailhead", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #032e61));}.slds-icon-standard-entitlements", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b781d3));}.slds-icon-standard-checkout", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-formula", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-case-log-a-call", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-shift-pattern-entry", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-thanks-loading", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b8c3ce));}.slds-icon-standard-job-family", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-service-appointment-capacity-usage", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-channel-program-levels", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-letterhead", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-promotions-workspace", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-email-chatter", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-document-reference", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-announcement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-standard-field-sales", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9050e9));}.slds-icon-standard-bot", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698f));}.slds-icon-standard-macros", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #47cfd2));}.slds-icon-standard-dashboard-ea", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-job-profile", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-steps", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-asset-relationship", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fa975c));}.slds-icon-standard-high-velocity-sales", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #47cfc9));}.slds-icon-standard-brand", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-historical-adherence", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #03b4a7));}.slds-icon-standard-visits", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-einstein-replies", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88965));}.slds-icon-standard-coaching", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f67594));}.slds-icon-standard-record-lookup", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-product-service-campaign-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-scheduling-constraint", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-lightning-component", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-search", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-standard-connected-apps", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9895ee));}.slds-icon-standard-swarm-request", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e26e8c));}.slds-icon-standard-work-type-group", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-education", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-work-type", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-travel-mode", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c173));}.slds-icon-standard-environment-hub", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-identifier", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-standard-cms", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #88c651));}.slds-icon-standard-call-coaching", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-salesforce-cms", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1df));}.slds-icon-standard-thanks", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9696e));}.slds-icon-standard-service-territory-member", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-work-forecast", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-holiday-operating-hours", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b9ee2));}.slds-icon-standard-user-role", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8fc96e));}.slds-icon-standard-observation-component", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-orchestrator", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #006eb3));}.slds-icon-standard-work-capacity-usage", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-record-create", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-campaign-members", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f49756));}.slds-icon-standard-retail-banking", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00d2be));}.slds-icon-standard-product-service-campaign", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-portal-roles", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fb8950));}.slds-icon-standard-calibration", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #47cfd2));}.slds-icon-standard-answer-public", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-display-text", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-product-consumed-state", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #06a59a));}.slds-icon-standard-unmatched", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-standard-partners", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-email-iq", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a094ed));}.slds-icon-standard-service-crew", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fa975c));}.slds-icon-standard-payment-gateway", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0b827c));}.slds-icon-standard-voice-call", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #30c85a));}.slds-icon-standard-cancel-checkout", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-asset-warranty", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #107cad));}.slds-icon-standard-resource-capacity", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c173));}.slds-icon-standard-channel-programs", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-quip", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d3451d));}.slds-icon-standard-quip-sheet", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #30c85a));}.slds-icon-standard-timeslot", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fab24c));}.slds-icon-standard-live-chat", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88960));}.slds-icon-standard-service-request-detail", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-med-rec-statement-recommendation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #808cde));}.slds-icon-standard-job-position", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-sobject-collection", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-user", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-client", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00d2be));}.slds-icon-standard-screen", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-portal", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #aec770));}.slds-icon-standard-partner-fund-request", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-asset-audit", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9050e9));}.slds-icon-standard-resource-preference", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c173));}.slds-icon-standard-first-non-empty", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9696e));}.slds-icon-standard-customer-360", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #032e61));}.slds-icon-standard-employee-job", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-resource-absence", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c173));}.slds-icon-standard-text-template", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-entitlement-template", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-lightning-usage", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-product-transfer-state", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e3734f));}.slds-icon-standard-medication-dispense", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5696d7));}.slds-icon-standard-entitlement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-empty", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8199af));}.slds-icon-standard-text", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-delegated-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-fulfillment-order", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b9ac91));}.slds-icon-standard-case-email", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-account", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-coupon-codes", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-assignment", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-wealth-management-console", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00afa0));}.slds-icon-standard-task2", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-patient-medication-dosage", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-code-playground", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-social", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ea74a2));}.slds-icon-standard-endorsement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8b9ae3));}.slds-icon-standard-folder", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8b9ae3));}.slds-icon-standard-service-crew-member", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-variation-attribute-setup", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-flow", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-recipe", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0176d3));}.slds-icon-standard-expense-report-entry", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3a3180));}.slds-icon-standard-employee", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-omni-supervisor", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8a76f0));}.slds-icon-standard-capacity-plan", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-asset-object", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #317a92));}.slds-icon-standard-product", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b781d3));}.slds-icon-standard-topic", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #56aadf));}.slds-icon-standard-product-required", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef6e64));}.slds-icon-standard-dynamic-record-choice", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-aggregation-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-warranty-term", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-process", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-swarm-session", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f5675b));}.slds-icon-standard-people", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-medication", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4ac076));}.slds-icon-standard-reward", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9696e));}.slds-icon-standard-employee-contact", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-bundle-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-performance", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f8b156));}.slds-icon-standard-promotions", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-case-comment", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-price-book-entries", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-sales-channel", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-apex-plugin", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-campaign", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f49756));}.slds-icon-standard-contact-request", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fb8954));}.slds-icon-standard-business-hours", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7dc37d));}.slds-icon-standard-evernote", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #86c86f));}.slds-icon-standard-variation-products", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-trailhead-alt", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00396b));}.slds-icon-standard-service-territory", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-customer-lifecycle-analytics", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9274df));}.slds-icon-standard-code-set", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-case", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-slack", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4a154b));}.slds-icon-standard-currency", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-record", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7dc37d));}.slds-icon-standard-code-set-bundle", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0079bc));}.slds-icon-standard-queue", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-schedule-objective", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-contract-line-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ec06e));}.slds-icon-standard-skill-entity", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8b9ae3));}.slds-icon-standard-skill", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fa975c));}.slds-icon-standard-operating-hours", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6b9ee2));}.slds-icon-standard-custom", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8199af));}.slds-icon-standard-related-list", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #59bcab));}.slds-icon-standard-bot-training", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #5876a3));}.slds-icon-standard-case-change-status", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-insurance-console", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00afa0));}.slds-icon-standard-dashboard-component", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-incident", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ba0517));}.slds-icon-standard-contract", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ec06e));}.slds-icon-standard-sobject", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-sales-cadence-target", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-photo", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #d7d1d1));}.slds-icon-standard-apps", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-timesheet", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-drafts", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ca1e9));}.slds-icon-standard-outcome", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-discounts", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-work-order-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #33a8dc));}.slds-icon-standard-pricebook", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b781d3));}.slds-icon-standard-scan-card", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f39e58));}.slds-icon-standard-note", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e6d478));}.slds-icon-standard-serialized-product-transaction", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-shift-pattern", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-buyer-group", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-product-quantity-rules", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-medication-reconciliation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3f719a));}.slds-icon-standard-procedure", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589e4));}.slds-icon-standard-opportunity", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-news", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-sort-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-display-rich-text", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-strategy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc071));}.slds-icon-standard-call-history", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-webcart", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-serialized-product", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-report", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2ecbbe));}.slds-icon-standard-groups", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #779ef2));}.slds-icon-standard-data-model", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-dashboard", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef6e64));}.slds-icon-standard-generic-loading", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b8c3ce));}.slds-icon-standard-number-input", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-toggle", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-address", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-price-books", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-entity-milestone", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f49756));}.slds-icon-standard-wealth-management", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00d2be));}.slds-icon-standard-customers", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-story", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-service-appointment", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-maintenance-plan", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-data-integration-hub", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-person-name", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-work-plan-template-entry", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #449488));}.slds-icon-standard-hierarchy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-custom-component-task", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8a76f0));}.slds-icon-standard-partner-marketing-budget", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-asset-action-source", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #317a92));}.slds-icon-standard-skill-requirement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fa975c));}.slds-icon-standard-filter-criteria-rule", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-location", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4bc076));}.slds-icon-standard-radio-button", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-avatar-loading", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b8c3ce));}.slds-icon-standard-article", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-invocable-action", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-device", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-proposition", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-snippets", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-customer-portal-users", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97db));}.slds-icon-standard-actions-and-buttons", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fcb95b));}.slds-icon-standard-record-update", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-shift-type", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-log-a-call", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #48c3cc));}.slds-icon-standard-quotes", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #88c651));}.slds-icon-standard-question-feed", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-kanban", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-work-plan", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #449488));}.slds-icon-standard-shift-template", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-merge", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-expense", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3a3180));}.slds-icon-standard-dataset", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b070e6));}.slds-icon-standard-shift-preference", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-product-consumed", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #55bc9c));}.slds-icon-standard-canvas", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8199af));}.slds-icon-standard-forecasts", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6bbd6e));}.slds-icon-standard-relationship", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-tour", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9050e9));}.slds-icon-standard-service-resource", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-filter", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1539ee));}.slds-icon-standard-sales-path", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-shift-scheduling-operation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-events", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97db));}.slds-icon-standard-data-mapping", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #061c3f));}.slds-icon-standard-sms", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #88c651));}.slds-icon-standard-rtc-presence", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #47cfd2));}.slds-icon-standard-avatar", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-standard-record-delete", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-solution", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8fc972));}.slds-icon-standard-agent-home", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00396b));}.slds-icon-standard-partner-fund-claim", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-individual", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-custom-notification", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6bb7e4));}.slds-icon-standard-contract-payment", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #9050e9));}.slds-icon-standard-date-input", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-catalog", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #027e46));}.slds-icon-standard-template", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-activation-target", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #dc71d1));}.slds-icon-standard-selling-model", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ad7bee));}.slds-icon-standard-shipment", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-budget-allocation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #107cad));}.slds-icon-standard-record-signature-task", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-event", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-insurance", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00d2be));}.slds-icon-standard-live-chat-visitor", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f68960));}.slds-icon-standard-textarea", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-work-step", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #449488));}.slds-icon-standard-picklist-type", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-survey", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #319fd6));}.slds-icon-standard-link", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7a9ae6));}.slds-icon-standard-messaging-session", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-video", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b070e6));}.slds-icon-standard-list-email", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8baeb5));}.slds-icon-standard-med-rec-recommendation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #61bbca));}.slds-icon-standard-recycle-bin", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589e4));}.slds-icon-standard-document", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #baac93));}.slds-icon-standard-product-transfer", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e3734f));}.slds-icon-standard-instore-locations", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-recent", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #6ca1e9));}.slds-icon-standard-practitioner-role", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-password", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-expense-report", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3a3180));}.slds-icon-standard-branch-merge", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #e9696e));}.slds-icon-standard-insights", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ec94ed));}.slds-icon-standard-dropbox", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #52aef9));}.slds-icon-standard-unified-health-score", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-calculated-insights", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54a7f8));}.slds-icon-standard-employee-job-position", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-file", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #baac93));}.slds-icon-standard-currency-input", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-variable", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-team-member", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-pricing-workspace", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-agent-session", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88960));}.slds-icon-standard-guidance-center", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7f8de1));}.slds-icon-standard-group-loading", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b8c3ce));}.slds-icon-standard-lead", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f88962));}.slds-icon-standard-email", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #95aec5));}.slds-icon-standard-service-contract", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #8a76f0));}.slds-icon-standard-decision", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-promotion-segments", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #04844b));}.slds-icon-standard-duration-downscale", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-snippet", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a094ed));}.slds-icon-standard-entitlement-process", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-contact-list", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #a094ed));}.slds-icon-standard-planogram", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-activations", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b070e6));}.slds-icon-standard-scheduling-policy", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #eb7092));}.slds-icon-standard-channel-program-history", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #0eb58a));}.slds-icon-standard-question-best", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-collection-variable", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-procedure-detail", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-sales-value", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #3c97dd));}.slds-icon-standard-knowledge", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ec94ed));}.slds-icon-standard-date-time", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-category", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #027e46));}.slds-icon-standard-maintenance-work-rule", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-data-streams", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef6e64));}.slds-icon-standard-textbox", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #969492));}.slds-icon-standard-lead-insights", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #22b0e6));}.slds-icon-standard-waits", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-concur", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #4cc3c7));}.slds-icon-standard-feed", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7ed));}.slds-icon-standard-sort", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1539ee));}.slds-icon-standard-messaging-conversation", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #34becd));}.slds-icon-standard-service-report", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #7e8be4));}.slds-icon-standard-iot-context", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #2a739e));}.slds-icon-standard-asset-state-period", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #317a92));}.slds-icon-standard-call", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-collection", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f2cf5b));}.slds-icon-standard-stage", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-sales-cadence", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-product-request-line-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #88c651));}.slds-icon-standard-return-order-line-item", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #009688));}.slds-icon-standard-chart", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1fcaa0));}.slds-icon-standard-quick-text", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #62b7e5));}.slds-icon-standard-home", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ef7ead));}.slds-icon-standard-sossession", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #54698d));}.slds-icon-standard-bundle-config", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon-standard-employee-asset", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1e0));}.slds-icon-standard-process-exception", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #f5a623));}.slds-icon-standard-product-warranty-term", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #b781d3));}.slds-icon-standard-problem", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #fe9339));}.slds-icon-standard-stage-collection", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #ff9a3c));}.slds-icon-standard-product-request", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #88c651));}.slds-icon-standard-logging", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00a1df));}.slds-icon-standard-assigned-resource", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #45c173));}.slds-icon-standard-return-order", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #009688));}.slds-icon-standard-poll", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #699be1));}.slds-icon-standard-household", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #00afa0));}.slds-icon-standard-work-step-template", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #449488));}.slds-icon-standard-medication-statement", shadowSelector, " {background-color: var(--slds-c-icon-color-background, var(--sds-c-icon-color-background, #1589ee));}.slds-icon", shadowSelector, " {width: 2rem;height: 2rem;fill: var(--slds-c-icon-color-foreground, var(--sds-c-icon-color-foreground, white));}.slds-icon_xx-small", shadowSelector, " {width: 0.875rem;height: 0.875rem;line-height: 1;}.slds-icon_x-small", shadowSelector, " {width: 1rem;height: 1rem;line-height: 1;}.slds-icon_small", shadowSelector, " {width: 1.5rem;height: 1.5rem;line-height: 1;}.slds-icon_large", shadowSelector, " {width: 3rem;height: 3rem;}.slds-icon-text-default", shadowSelector, " {--slds-c-icon-color-foreground: var(\n --slds-c-icon-color-foreground-default,\n var(--sds-c-icon-color-foreground-default, #747474)\n );}.slds-icon-text-default.slds-is-disabled", shadowSelector, " {fill: #c9c9c9;}.slds-icon-text-warning", shadowSelector, " {--slds-c-icon-color-foreground: #fe9339;}.slds-icon-text-success", shadowSelector, " {--slds-c-icon-color-foreground: #2e844a;}.slds-icon-text-error", shadowSelector, " {--slds-c-icon-color-foreground: #ea001e;}.slds-icon-text-light", shadowSelector, " {--slds-c-icon-color-foreground: #aeaeae;}.slds-current-color", shadowSelector, " .slds-icon", shadowSelector, " {--slds-c-icon-color-foreground: currentColor;}.slds-icon_disabled", shadowSelector, " {background-color: currentColor;}.slds-input-has-icon", shadowSelector, " .slds-input__icon", shadowSelector, " {}.slds-input", shadowSelector, " {padding-top: 0;padding-right: var(--slds-c-input-spacing-horizontal-end, var(--sds-c-input-spacing-horizontal-end, 1rem));padding-bottom: 0;padding-left: var(--slds-c-input-spacing-horizontal-start, var(--sds-c-input-spacing-horizontal-start, 0.75rem));width: 100%;min-height: calc(1.875rem + (1px * 2));line-height: 1.875rem;border: 1px solid var(--slds-c-input-color-border, var(--sds-c-input-color-border, #c9c9c9));border-radius: var(--slds-c-input-radius-border, var(--sds-c-input-radius-border, 0.25rem));background-color: var(--slds-c-input-color-background, var(--sds-c-input-color-background, white));color: var(--slds-c-input-text-color, var(--sds-c-input-text-color));-webkit-box-shadow: var(--slds-c-input-shadow, var(--sds-c-input-shadow));box-shadow: var(--slds-c-input-shadow, var(--sds-c-input-shadow));-webkit-transition: border 0.1s linear, background-color 0.1s linear;transition: border 0.1s linear, background-color 0.1s linear;display: inline-block;}.slds-input:focus", shadowSelector, ",.slds-input:active", shadowSelector, " {--slds-c-input-color-border: var(--slds-c-input-color-border-focus, var(--sds-c-input-color-border-focus, #1b96ff));--slds-c-input-background-color: var(\n --slds-c-input-color-background-focus,\n var(--sds-c-input-color-background-focus, white)\n );--slds-c-input-text-color: var(--slds-c-input-text-color-focus, var(--sds-c-input-text-color-focus));--slds-c-input-shadow: var(--slds-c-input-shadow-focus, var(--sds-c-input-shadow-focus, 0 0 3px #0176d3));outline: 0;}.slds-input[disabled]", shadowSelector, ",.slds-input.slds-is-disabled", shadowSelector, " {background-color: #f3f3f3;border-color: #c9c9c9;color: #444444;cursor: not-allowed;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.slds-input[disabled]:focus", shadowSelector, ",.slds-input[disabled]:active", shadowSelector, ",.slds-input.slds-is-disabled:focus", shadowSelector, ",.slds-input.slds-is-disabled:active", shadowSelector, " {-webkit-box-shadow: none;box-shadow: none;}.slds-input[readonly]", shadowSelector, " {--slds-c-input-spacing-horizontal-start: 0;--slds-c-input-color-border: transparent;--slds-c-input-color-background: transparent;font-size: 0.875rem;font-weight: 400;}.slds-input[type=\"search\"]", shadowSelector, "::-ms-clear {display: none;width: 0;height: 0;}.slds-input[type=\"search\"]", shadowSelector, "::-webkit-search-decoration,.slds-input[type=\"search\"]", shadowSelector, "::-webkit-search-cancel-button,.slds-input[type=\"search\"]", shadowSelector, "::-webkit-search-results-button,.slds-input[type=\"search\"]", shadowSelector, "::-webkit-search-results-decoration {display: none;}.slds-input[type=\"url\"]", shadowSelector, ",.slds-input[type=\"tel\"]", shadowSelector, ",.slds-input[type=\"email\"]", shadowSelector, " {direction: ltr;text-align: left;}.slds-input_bare", shadowSelector, " {--slds-c-input-color-background: transparent;--slds-c-input-spacing-horizontal-end: 0;--slds-c-input-spacing-horizontal-start: 0.75rem;--slds-c-input-text-color: #181818;border: 0;}.slds-input_bare:focus", shadowSelector, ",.slds-input_bare:active", shadowSelector, " {--slds-c-input-shadow-focus: none;}.slds-input_height", shadowSelector, " {min-height: calc(1.875rem + (1px * 2));}.slds-input_faux", shadowSelector, " {padding-top: 0;padding-right: var(--slds-c-input-spacing-horizontal-end, var(--sds-c-input-spacing-horizontal-end, 1rem));padding-bottom: 0;padding-left: var(--slds-c-input-spacing-horizontal-start, var(--sds-c-input-spacing-horizontal-start, 0.75rem));width: 100%;min-height: calc(1.875rem + (1px * 2));line-height: 1.875rem;border: 1px solid var(--slds-c-input-color-border, var(--sds-c-input-color-border, #c9c9c9));border-radius: var(--slds-c-input-radius-border, var(--sds-c-input-radius-border, 0.25rem));background-color: var(--slds-c-input-color-background, var(--sds-c-input-color-background, white));color: var(--slds-c-input-text-color, var(--sds-c-input-text-color));-webkit-box-shadow: var(--slds-c-input-shadow, var(--sds-c-input-shadow));box-shadow: var(--slds-c-input-shadow, var(--sds-c-input-shadow));-webkit-transition: border 0.1s linear, background-color 0.1s linear;transition: border 0.1s linear, background-color 0.1s linear;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;text-align: left;}.slds-input_faux.slds-is-disabled", shadowSelector, " {background-color: #f3f3f3;border-color: #c9c9c9;color: #444444;cursor: not-allowed;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.slds-input_faux.slds-is-disabled:focus", shadowSelector, ",.slds-input_faux.slds-is-disabled:active", shadowSelector, " {-webkit-box-shadow: none;box-shadow: none;}.slds-input_faux", shadowSelector, " > span", shadowSelector, ":before {content: \"\";display: inline-block;}.slds-input_borders[readonly]", shadowSelector, " {--slds-c-input-spacing-horizontal-start: 0.75rem;--slds-c-input-color-border: #c9c9c9;}.slds-input-has-icon", shadowSelector, " {position: relative;}.slds-input-has-icon", shadowSelector, " .slds-input__icon", shadowSelector, " {width: 0.875rem;height: 0.875rem;position: absolute;top: 50%;margin-top: -0.4375rem;line-height: 1;border: 0;z-index: 2;}.slds-input-has-icon", shadowSelector, " .slds-input__icon:not(button)", shadowSelector, " {pointer-events: none;}.slds-input-has-icon_left", shadowSelector, " .slds-input__icon", shadowSelector, " {left: 0.75rem;}.slds-input-has-icon_left", shadowSelector, " .slds-input", shadowSelector, ",.slds-input-has-icon_left", shadowSelector, " .slds-input_faux", shadowSelector, ",.slds-input-has-icon_left", shadowSelector, " .slds-input_bare", shadowSelector, " {--slds-c-input-spacing-horizontal-start: 2rem;}.slds-input-has-icon_right", shadowSelector, " .slds-input__icon", shadowSelector, " {right: 0.75rem;}.slds-input-has-icon_right", shadowSelector, " .slds-input", shadowSelector, ",.slds-input-has-icon_right", shadowSelector, " .slds-input_faux", shadowSelector, ",.slds-input-has-icon_right", shadowSelector, " .slds-input_bare", shadowSelector, " {--slds-c-input-spacing-horizontal-end: 2rem;}.slds-input-has-icon_left-right", shadowSelector, " {}.slds-input-has-icon_left-right", shadowSelector, " .slds-input__icon_left", shadowSelector, " {left: 0.75rem;}.slds-input-has-icon_left-right", shadowSelector, " .slds-input__icon_right", shadowSelector, " {right: 0.75rem;}.slds-input-has-icon_left-right", shadowSelector, " .slds-input", shadowSelector, ",.slds-input-has-icon_left-right", shadowSelector, " .slds-input_faux", shadowSelector, ",.slds-input-has-icon_left-right", shadowSelector, " .slds-input_bare", shadowSelector, " {--slds-c-input-spacing-horizontal-start: 2rem;--slds-c-input-spacing-horizontal-end: 2rem;}.slds-input-has-icon_group-right", shadowSelector, " .slds-input", shadowSelector, ",.slds-input-has-icon_group-right", shadowSelector, " .slds-input_faux", shadowSelector, ",.slds-input-has-icon_group-right", shadowSelector, " .slds-input_bare", shadowSelector, " {--slds-c-input-spacing-horizontal-end: calc(3rem + 0.5rem);}.slds-input__icon-group", shadowSelector, " {position: absolute;height: 1rem;margin-top: -0.5rem;}.slds-input__icon-group_right", shadowSelector, " {right: 0;top: 50%;}.slds-input__icon-group_right", shadowSelector, " .slds-input__icon_right", shadowSelector, " {right: 0.5rem;}.slds-input__icon-group_right", shadowSelector, " .slds-input__spinner", shadowSelector, " {right: 1.5rem;left: auto;}.slds-input-has-fixed-addon", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;}.slds-has-error", shadowSelector, " .slds-input", shadowSelector, " {--slds-c-input-color-border: #ea001e;--slds-c-input-shadow: #ea001e 0 0 0 1px inset;--slds-c-input-color-background: var(--sds-c-input-color-background, var(--sds-c-input-color-background, white));--slds-c-input-text-color: var(--slds-c-input-text-color, var(--sds-c-input-text-color));background-clip: padding-box;}.slds-has-error", shadowSelector, " .slds-input:focus", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-input:active", shadowSelector, " {--slds-c-input-color-border-focus: #ea001e;--slds-c-input-shadow: #ea001e 0 0 0 1px inset, 0 0 3px #0176d3;}.slds-has-error", shadowSelector, " .slds-input__icon", shadowSelector, " {fill: #ea001e;color: #ea001e;}.slds-map_container", shadowSelector, " {-webkit-box-flex: 3;-ms-flex: 3 1 auto;flex: 3 1 auto;}.slds-map", shadowSelector, " {position: relative;min-width: 23.75rem;width: 100%;max-height: 100%;}.slds-map", shadowSelector, ":before {content: \"\";display: block;height: 0;width: 100%;padding-top: 56.25%;}.slds-map", shadowSelector, " iframe", shadowSelector, " {position: absolute;top: 0;left: 0;right: 0;height: 100%;width: 100%;border: 0;}.slds-has-coordinates", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;overflow: auto;max-height: 41.25rem;background: white;}.slds-has-coordinates", shadowSelector, " .slds-map", shadowSelector, ":before {padding-top: 75%;}.slds-coordinates", shadowSelector, " {overflow: auto;-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;}.slds-coordinates__header", shadowSelector, " {padding: 1rem;}.slds-coordinates__title", shadowSelector, " {font-size: 1rem;font-weight: 700;}.slds-coordinates__item-action", shadowSelector, " {padding: 0.5rem 1rem;width: 100%;}.slds-coordinates__item-action", shadowSelector, " .slds-text-link", shadowSelector, " {display: block;}.slds-coordinates__item-action:hover", shadowSelector, ",.slds-coordinates__item-action:focus", shadowSelector, " {background-color: #f3f3f3;outline: 0;}.slds-coordinates__item-action:hover", shadowSelector, " .slds-text-link", shadowSelector, ",.slds-coordinates__item-action:focus", shadowSelector, " .slds-text-link", shadowSelector, " {text-decoration: underline;}.slds-coordinates__item-action:active", shadowSelector, " {background-color: #f3f3f3;}.slds-coordinates__item-action[aria-pressed=\"true\"]", shadowSelector, " {background-color: #f3f3f3;}.slds-coordinates__item-action[aria-pressed=\"true\"]", shadowSelector, " .slds-text-link", shadowSelector, " {color: #032d60;}.slds-dropdown-trigger", shadowSelector, " {position: relative;display: inline-block;}.slds-dropdown-trigger", shadowSelector, " .slds-dropdown", shadowSelector, " {top: 100%;}.slds-dropdown-trigger", shadowSelector, " .slds-dropdown_bottom", shadowSelector, " {top: auto;}.slds-dropdown-trigger", shadowSelector, " > [class*=\"slds-button_icon\"]", shadowSelector, " ~ .slds-dropdown_left[class*=\"slds-nubbin\"]", shadowSelector, ",.slds-dropdown-trigger", shadowSelector, " > [class*=\"slds-button--icon\"]", shadowSelector, " ~ .slds-dropdown--left[class*=\"slds-nubbin\"]", shadowSelector, " {left: -0.5rem;}.slds-dropdown-trigger", shadowSelector, " > [class*=\"slds-button_icon\"]", shadowSelector, " ~ .slds-dropdown_right[class*=\"slds-nubbin\"]", shadowSelector, ",.slds-dropdown-trigger", shadowSelector, " > [class*=\"slds-button--icon\"]", shadowSelector, " ~ .slds-dropdown--right[class*=\"slds-nubbin\"]", shadowSelector, " {right: -0.5rem;}.slds-dropdown-trigger_hover", shadowSelector, " .slds-dropdown", shadowSelector, " {visibility: hidden;opacity: 0;-webkit-transition: opacity 0.1s linear, visibility 0.1s linear;transition: opacity 0.1s linear, visibility 0.1s linear;}.slds-dropdown-trigger_hover:hover", shadowSelector, ",.slds-dropdown-trigger_hover:focus", shadowSelector, " {outline: 0;}.slds-dropdown-trigger_hover:hover", shadowSelector, " .slds-dropdown", shadowSelector, ",.slds-dropdown-trigger_hover:focus", shadowSelector, " .slds-dropdown", shadowSelector, " {visibility: visible;opacity: 1;-webkit-transition: opacity 0.1s linear, visibility 0.1s linear;transition: opacity 0.1s linear, visibility 0.1s linear;}.slds-dropdown-trigger_click", shadowSelector, " {}.slds-dropdown-trigger_click", shadowSelector, " .slds-dropdown", shadowSelector, ",.slds-dropdown-trigger_click:hover", shadowSelector, " .slds-dropdown", shadowSelector, " {display: none;}.slds-dropdown-trigger_click.slds-is-open", shadowSelector, " .slds-dropdown", shadowSelector, " {display: block;visibility: visible;opacity: 1;}.slds-dropdown", shadowSelector, " {position: absolute;z-index: 7000;left: 50%;float: left;min-width: 6rem;max-width: 20rem;margin-top: 0.125rem;margin-bottom: 0.125rem;border: 1px solid #e5e5e5;border-radius: 0.25rem;padding: 0.25rem 0;font-size: 0.75rem;background: white;-webkit-box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.16);-webkit-transform: translateX(-50%);transform: translateX(-50%);color: #181818;}.slds-dropdown", shadowSelector, " mark", shadowSelector, " {font-weight: 700;background-color: transparent;color: inherit;}.slds-dropdown[class*=\"slds-nubbin_top\"]", shadowSelector, ",.slds-dropdown[class*=\"slds-nubbin--top\"]", shadowSelector, " {margin-top: 0.5rem;}.slds-dropdown[class*=\"slds-nubbin_bottom\"]", shadowSelector, ",.slds-dropdown[class*=\"slds-nubbin--bottom\"]", shadowSelector, " {margin-bottom: 0.5rem;}.slds-dropdown_inverse", shadowSelector, " {background: #001639;border-color: #001639;color: white;}.slds-dropdown_inverse", shadowSelector, " .slds-dropdown__item", shadowSelector, " > a", shadowSelector, " {color: white;}.slds-dropdown_inverse", shadowSelector, " .slds-dropdown__item", shadowSelector, " > a:hover", shadowSelector, ",.slds-dropdown_inverse", shadowSelector, " .slds-dropdown__item", shadowSelector, " > a:focus", shadowSelector, " {color: rgba(255, 255, 255, 0.75);background-color: transparent;}.slds-dropdown_inverse", shadowSelector, " .slds-dropdown__item", shadowSelector, " > a:active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);background-color: transparent;}.slds-dropdown_inverse", shadowSelector, " .slds-dropdown__item", shadowSelector, " > a[aria-disabled=\"true\"]", shadowSelector, " > a[aria-disabled=\"true\"]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);cursor: default;}.slds-dropdown_inverse", shadowSelector, " .slds-dropdown__item", shadowSelector, " > a[aria-disabled=\"true\"]:hover", shadowSelector, " {background-color: transparent;}.slds-dropdown__header", shadowSelector, " {font-size: 0.875rem;font-weight: 700;padding: 0.5rem 0.75rem;}.slds-dropdown__item", shadowSelector, " {line-height: 1.5;font-weight: 400;}.slds-dropdown__item", shadowSelector, " > a", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;-webkit-box-align: center;-ms-flex-align: center;align-items: center;padding: 0.5rem 0.75rem;color: #181818;white-space: nowrap;cursor: pointer;}.slds-dropdown__item", shadowSelector, " > a:hover", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a:focus", shadowSelector, " {outline: 0;text-decoration: none;background-color: #f3f3f3;}.slds-dropdown__item", shadowSelector, " > a:active", shadowSelector, " {text-decoration: none;background-color: #f3f3f3;}.slds-dropdown__item", shadowSelector, " > a[aria-disabled=\"true\"]", shadowSelector, " {color: #c9c9c9;cursor: default;}.slds-dropdown__item", shadowSelector, " > a[aria-disabled=\"true\"]:hover", shadowSelector, " {background-color: transparent;}.slds-dropdown__item", shadowSelector, " > a[aria-disabled=\"true\"]", shadowSelector, " .slds-icon", shadowSelector, " {fill: #c9c9c9;}.slds-dropdown__item", shadowSelector, " > a.slds-has-error", shadowSelector, " {background: #ba0517;}.slds-dropdown__item", shadowSelector, " > a.slds-has-success", shadowSelector, " {background: #2e844a;}.slds-dropdown__item", shadowSelector, " > a.slds-has-error", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a.slds-has-success", shadowSelector, " {color: white;}.slds-dropdown__item", shadowSelector, " > a.slds-has-warning", shadowSelector, " {background: #fe9339;}.slds-dropdown__item", shadowSelector, " > a.slds-has-warning", shadowSelector, " .slds-indicator_unread", shadowSelector, " {background-color: currentColor;}.slds-dropdown__item", shadowSelector, " > a.slds-has-warning", shadowSelector, " .slds-indicator_unsaved", shadowSelector, " {color: currentColor;}.slds-dropdown__item", shadowSelector, " > a.slds-has-error:hover", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a.slds-has-error:focus", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a.slds-has-success:hover", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a.slds-has-success:focus", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a.slds-has-warning:hover", shadowSelector, ",.slds-dropdown__item", shadowSelector, " > a.slds-has-warning:focus", shadowSelector, " {text-decoration: underline;}.slds-dropdown__item", shadowSelector, " .slds-icon_selected", shadowSelector, " {opacity: 0;-webkit-transition: opacity 0.05s ease;transition: opacity 0.05s ease;}.slds-dropdown__item.slds-is-selected", shadowSelector, " .slds-icon_selected", shadowSelector, " {opacity: 1;}.slds-dropdown__item.slds-has-notification", shadowSelector, " .slds-indicator_unsaved", shadowSelector, " {top: -0.375rem;}.slds-dropdown_left", shadowSelector, " {left: 0;right: auto;-webkit-transform: translateX(0);transform: translateX(0);}.slds-dropdown_right", shadowSelector, " {left: auto;right: 0;-webkit-transform: translateX(0);transform: translateX(0);}.slds-dropdown_bottom", shadowSelector, " {bottom: 100%;}.slds-dropdown_xx-small", shadowSelector, " {min-width: 6rem;}.slds-dropdown_x-small", shadowSelector, " {min-width: 12rem;}.slds-dropdown_small", shadowSelector, " {min-width: 15rem;}.slds-dropdown_medium", shadowSelector, " {min-width: 20rem;}.slds-dropdown_large", shadowSelector, " {min-width: 25rem;max-width: 512px;}.slds-dropdown_fluid", shadowSelector, " {min-width: 12rem;max-width: 100%;width: 100%;}.slds-dropdown_length-5", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: calc(((1rem * 1.5) + 1rem) * 5);overflow-y: auto;}.slds-dropdown_length-7", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: calc(((1rem * 1.5) + 1rem) * 7);overflow-y: auto;}.slds-dropdown_length-10", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: calc(((1rem * 1.5) + 1rem) * 10);overflow-y: auto;}.slds-dropdown_length-with-icon-5", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: calc((1.5rem + 1rem) * 5);overflow-y: auto;}.slds-dropdown_length-with-icon-7", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: calc((1.5rem + 1rem) * 7);overflow-y: auto;}.slds-dropdown_length-with-icon-10", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: calc((1.5rem + 1rem) * 10);overflow-y: auto;}[dir=\"rtl\"]", shadowSelector, " .slds-dropdown_center", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " .slds-dropdown--center", shadowSelector, " {left: auto;right: auto;-webkit-transform: translateX(calc(50% - (0.875rem / 2)));transform: translateX(calc(50% - (0.875rem / 2)));}.slds-pill", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;line-height: var(--slds-c-pill-line-height, var(--sds-c-pill-line-height, 1.5));max-width: 100%;padding-top: var(--slds-c-pill-spacing-block-start, var(--sds-c-pill-spacing-block-start, 0.125rem));padding-right: var(--slds-c-pill-spacing-inline-end, var(--sds-c-pill-spacing-inline-end, 0.125rem));padding-bottom: var(--slds-c-pill-spacing-block-end, var(--sds-c-pill-spacing-block-end, 0.125rem));padding-left: var(--slds-c-pill-spacing-inline-start, var(--sds-c-pill-spacing-inline-start, 0.125rem));border-width: var(--slds-c-pill-sizing-border, var(--sds-c-pill-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-pill-color-border, var(--sds-c-pill-color-border, #e5e5e5));border-radius: var(--slds-c-pill-radius-border, var(--sds-c-pill-radius-border, 0.25rem));background-color: var(--slds-c-pill-color-background, var(--sds-c-pill-color-background, white));-webkit-box-shadow: var(--slds-c-pill-shadow);box-shadow: var(--slds-c-pill-shadow);position: relative;min-height: 1.625rem;}.slds-pill", shadowSelector, " + .slds-pill", shadowSelector, " {margin-left: 0.125rem;}.slds-pill:hover", shadowSelector, " {--slds-c-pill-color-background: var(--sds-c-pill-color-background-hover, #f3f3f3);}.slds-pill:focus", shadowSelector, " {--slds-c-pill-color-border: var(--sds-c-pill-color-border-focus, #1b96ff);--slds-c-pill-shadow: var(--sds-c-pill-shadow-focus, 0 0 3px #0176d3);outline: 0;}.slds-pill", shadowSelector, " a", shadowSelector, " {text-decoration: none;}.slds-pill_bare", shadowSelector, " {--slds-c-pill-color-background: transparent;--slds-c-pill-sizing-border: 0;}.slds-pill_bare:hover", shadowSelector, " {--sds-c-pill-color-background-hover: transparent;}.slds-pill_container", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;min-height: calc(1.875rem + 2px);padding-top: var(\n --slds-c-pill-container-spacing-block-start,\n var(--sds-c-pill-container-spacing-block-start, 0.125rem)\n );padding-right: var(\n --slds-c-pill-container-spacing-inline-end,\n var(--sds-c-pill-container-spacing-inline-end, 0.125rem)\n );padding-bottom: var(\n --slds-c-pill-container-spacing-block-end,\n var(--sds-c-pill-container-spacing-block-end, 0.125rem)\n );padding-left: var(\n --slds-c-pill-container-spacing-inline-start,\n var(--sds-c-pill-container-spacing-inline-start, 0.125rem)\n );border-width: var(--slds-c-pill-sizing-border, var(--sds-c-pill-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-pill-color-border, var(--sds-c-pill-color-border, #e5e5e5));border-radius: var(--slds-c-pill-radius-border, var(--sds-c-pill-radius-border, 0.25rem));background-color: var(--slds-c-pill-container-color-background, var(--sds-c-pill-container-color-background, white));}.slds-pill_container", shadowSelector, " .slds-listbox_inline", shadowSelector, " {margin-left: 0;margin-right: 0;}.slds-pill__label", shadowSelector, " {white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}.slds-pill__label:focus", shadowSelector, " {outline: 0;border-radius: 0.25rem;-webkit-box-shadow: var(--slds-c-pill-label-shadow-focus, var(--sds-c-pill-label-shadow-focus, 0 0 3px #0176d3));box-shadow: var(--slds-c-pill-label-shadow-focus, var(--sds-c-pill-label-shadow-focus, 0 0 3px #0176d3));}.slds-pill__icon", shadowSelector, ",.slds-pill__icon_container", shadowSelector, " {width: 1.25rem;height: 1.25rem;margin-right: 0.25rem;}.slds-pill__icon", shadowSelector, " .slds-icon", shadowSelector, ",.slds-pill__icon", shadowSelector, " .slds-avatar", shadowSelector, ",.slds-pill__icon_container", shadowSelector, " .slds-icon", shadowSelector, ",.slds-pill__icon_container", shadowSelector, " .slds-avatar", shadowSelector, " {width: 1.25rem;height: 1.25rem;display: block;font-size: 0.625rem;}.slds-pill__icon", shadowSelector, " ~ .slds-pill__action", shadowSelector, ",.slds-pill__icon_container", shadowSelector, " ~ .slds-pill__action", shadowSelector, " {padding-left: calc(1.25rem + 0.25rem + 2px);}.slds-pill__remove", shadowSelector, " {width: 1rem;height: 1rem;display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;margin-left: 0.25rem;border-radius: 0.125rem;}.slds-pill__remove", shadowSelector, " svg", shadowSelector, " {width: 0.875rem;height: 0.875rem;}.slds-pill_link", shadowSelector, " {border: 0;padding: 0;}.slds-pill_link", shadowSelector, " .slds-pill__icon_container", shadowSelector, " {display: inline-block;position: absolute;top: 50%;left: 0.125rem;-webkit-transform: translateY(-50%);transform: translateY(-50%);}.slds-pill_link", shadowSelector, " .slds-pill__remove", shadowSelector, " {position: absolute;top: 50%;right: 0.125rem;-webkit-transform: translateY(-50%);transform: translateY(-50%);}.slds-pill__action", shadowSelector, " {padding-top: var(--slds-c-pill-spacing-block-start, var(--sds-c-pill-spacing-block-start, 0.125rem));padding-right: calc(\n 1rem + var(--slds-c-pill-spacing-inline-end, var(--sds-c-pill-spacing-inline-end, 0.125rem)) + 2px\n );padding-bottom: var(--slds-c-pill-spacing-block-end, var(--sds-c-pill-spacing-block-end, 0.125rem));padding-left: var(--slds-c-pill-spacing-inline-start, var(--sds-c-pill-spacing-inline-start, 0.125rem));border-width: var(--slds-c-pill-sizing-border, var(--sds-c-pill-sizing-border, 1px));border-style: solid;border-color: var(--slds-c-pill-color-border, var(--sds-c-pill-color-border, #e5e5e5));border-radius: var(--slds-c-pill-radius-border, var(--sds-c-pill-radius-border, 0.25rem));white-space: nowrap;overflow: hidden;text-overflow: ellipsis;-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;}.slds-pill__action:focus", shadowSelector, " {outline: 0;border-color: var(--slds-c-pill-action-color-border, var(--sds-c-pill-action-color-border, #1b96ff));-webkit-box-shadow: var(--slds-c-pill-action-shadow, var(--sds-c-pill-action-shadow, 0 0 3px #0176d3));box-shadow: var(--slds-c-pill-action-shadow, var(--sds-c-pill-action-shadow, 0 0 3px #0176d3));}.slds-has-error", shadowSelector, " {border-color: var(--slds-c-pill-error-color-border, var(--sds-c-pill-error-color-border, #ea001e));}.slds-has-error:active", shadowSelector, " {border-color: var(--slds-c-pill-error-color-border-active, var(--sds-c-pill-error-color-border-active, #ea001e));}.slds-has-error", shadowSelector, " .slds-pill__label", shadowSelector, " {font-weight: 700;color: var(--slds-c-pill-error-text-color, var(--sds-c-pill-error-text-color, #ea001e));}.slds-progress-bar", shadowSelector, " {-moz-appearance: none;-webkit-appearance: none;appearance: none;display: block;width: 100%;height: 0.5rem;background: #c9c9c9;border: 0;position: relative;}.slds-progress-bar_x-small", shadowSelector, " {height: 0.125rem;}.slds-progress-bar_small", shadowSelector, " {height: 0.25rem;}.slds-progress-bar_medium", shadowSelector, " {height: 0.5rem;}.slds-progress-bar_large", shadowSelector, " {height: 0.75rem;}.slds-progress-bar_circular", shadowSelector, " {border-radius: 0.5rem;}.slds-progress-bar_circular", shadowSelector, " .slds-progress-bar__value", shadowSelector, " {border-radius: 0.5rem;}.slds-progress-bar__value", shadowSelector, " {display: block;background: #1ab9ff;height: 100%;}.slds-progress-bar__value_success", shadowSelector, " {background: #2e844a;}.slds-progress-bar_vertical", shadowSelector, " {height: 100%;width: 0.5rem;}.slds-progress-bar_vertical.slds-progress-bar_x-small", shadowSelector, " {width: 0.125rem;}.slds-progress-bar_vertical.slds-progress-bar_small", shadowSelector, " {width: 0.25rem;}.slds-progress-bar_vertical.slds-progress-bar_medium", shadowSelector, " {width: 0.5rem;}.slds-progress-bar_vertical.slds-progress-bar_large", shadowSelector, " {width: 0.75rem;}.slds-radio", shadowSelector, " {display: inline-block;}.slds-radio", shadowSelector, " .slds-radio_faux", shadowSelector, " {width: 1rem;height: 1rem;display: inline-block;position: relative;-ms-flex-negative: 0;flex-shrink: 0;vertical-align: middle;border: 1px solid var(--slds-c-radio-color-border, var(--sds-c-radio-color-border, #c9c9c9));border-radius: 50%;background: none;background-color: var(--slds-c-radio-color-background, var(--sds-c-radio-color-background, white));-webkit-box-shadow: var(--slds-c-radio-shadow, var(--sds-c-radio-shadow));box-shadow: var(--slds-c-radio-shadow, var(--sds-c-radio-shadow));-webkit-transition: border 0.1s linear, background-color 0.1s linear;transition: border 0.1s linear, background-color 0.1s linear;}.slds-radio", shadowSelector, " .slds-form-element__label", shadowSelector, " {display: inline;vertical-align: middle;font-size: 0.8125rem;}.slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " {width: 1px;height: 1px;border: 0;clip: rect(0 0 0 0);margin: -1px;overflow: hidden;padding: 0;position: absolute;}.slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio_faux", shadowSelector, ",.slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",.slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {border-color: var(\n --slds-c-radio-color-border-checked,\n var(--sds-c-radio-color-border-checked, var(--sds-c-radio-color-border, #c9c9c9))\n );background: none;background-color: var(\n --slds-c-radio-color-background-checked,\n var(--sds-c-radio-color-background-checked, var(--sds-c-radio-color-background, white))\n );}.slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio_faux", shadowSelector, ":after,.slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ":after,.slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, ":after {width: 0.5rem;height: 0.5rem;content: \"\";position: absolute;top: 50%;left: 50%;-webkit-transform: translate3d(-50%, -50%, 0);transform: translate3d(-50%, -50%, 0);border-radius: 50%;background: none;background-color: var(--slds-c-radio-mark-color-foreground, var(--sds-c-radio-mark-color-foreground, #0176d3));}.slds-radio", shadowSelector, " [type=\"radio\"]:focus", shadowSelector, " + .slds-radio_faux", shadowSelector, ",.slds-radio", shadowSelector, " [type=\"radio\"]:focus", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",.slds-radio", shadowSelector, " [type=\"radio\"]:focus", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {border-color: var(--slds-c-radio-color-border-focus, var(--sds-c-radio-color-border-focus, #1b96ff));-webkit-box-shadow: var(--slds-c-radio-shadow-focus, var(--sds-c-radio-shadow-focus, 0 0 3px #0176d3));box-shadow: var(--slds-c-radio-shadow-focus, var(--sds-c-radio-shadow-focus, 0 0 3px #0176d3));}.slds-radio", shadowSelector, " [type=\"radio\"][disabled]", shadowSelector, " {cursor: not-allowed;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.slds-radio", shadowSelector, " [type=\"radio\"][disabled]", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",.slds-radio", shadowSelector, " [type=\"radio\"][disabled]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {background-color: #f3f3f3;border-color: #c9c9c9;}.slds-radio", shadowSelector, " [type=\"radio\"][disabled]", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ":after,.slds-radio", shadowSelector, " [type=\"radio\"][disabled]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, ":after {background: #969492;}.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {border-color: #ea001e;border-width: 2px;}.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {--slds-c-radio-color-background: var(\n --slds-c-radio-color-background-checked,\n var(\n --sds-c-radio-color-background-checked,\n var(--sds-c-radio-color-background, var(--sds-c-radio-color-background, $color-background-input))\n )\n );background: none;}.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio_faux", shadowSelector, ":after,.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ":after,.slds-has-error", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]:checked", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, ":after {background: #fe5c4c;}.slds-form-element", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio_faux", shadowSelector, ",.slds-form-element", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",.slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, " {margin-right: 0.5rem;}[dir=\"rtl\"]", shadowSelector, " .slds-form-element", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio_faux", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " [dir=\"rtl\"]", shadowSelector, " .slds-form-element", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " ~ .slds-radio_faux", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " [dir=\"rtl\"]", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio_faux", shadowSelector, ",[dir=\"rtl\"]", shadowSelector, " .slds-radio", shadowSelector, " [type=\"radio\"]", shadowSelector, " + .slds-radio__label", shadowSelector, " .slds-radio--faux", shadowSelector, " {margin-right: 0;margin-left: 0.5rem;}.slds-rich-text-editor", shadowSelector, " {border: 1px solid #e5e5e5;border-radius: 0.25rem;}.slds-rich-text-editor_toolbar-only", shadowSelector, " {border: 0;border-radius: 0;}.slds-rich-text-editor__toolbar", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;white-space: nowrap;position: relative;padding: 0.5rem 0.5rem 0.25rem 0.5rem;border-top-left-radius: 0.25rem;border-top-right-radius: 0.25rem;border-bottom: 1px solid #e5e5e5;background-color: #f3f3f3;}.slds-rich-text-editor__col", shadowSelector, " {-ms-flex-item-align: center;align-self: center;}.slds-rich-text-editor__col", shadowSelector, " + .slds-rich-text-editor__col", shadowSelector, " {margin-left: 0.5rem;}.slds-rich-text-editor__col_grow", shadowSelector, " {-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;}.slds-rich-text-editor__toolbar_bottom", shadowSelector, " {border-radius: 0 0 0.25rem 0.25rem;border-top: 1px solid #e5e5e5;border-bottom: 0;}.slds-rich-text-editor__toolbar_detached", shadowSelector, " {border-radius: 0;border-top: 0;border-bottom: 0;}.slds-rich-text-editor", shadowSelector, " .slds-button-group-list", shadowSelector, " {margin-right: 0.25rem;margin-bottom: 0.25rem;margin-left: 0;}.slds-rich-text-editor", shadowSelector, " .slds-button-group-list:last-child", shadowSelector, " {margin-right: 0;}.slds-rich-text-editor__select", shadowSelector, " {margin-right: 0.25rem;margin-bottom: 0.25rem;}.slds-rich-text-editor__select_x-small", shadowSelector, " {max-width: 12rem;width: auto;}.slds-rich-text-editor__select_xx-small", shadowSelector, " {max-width: 6rem;width: auto;}.slds-region_narrow", shadowSelector, " .slds-combobox", shadowSelector, " {max-width: 11rem;}.slds-rich-text-editor.slds-has-focus", shadowSelector, " {border-color: #1b96ff;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;}.slds-rich-text-editor.slds-has-error", shadowSelector, " {border: 2px solid #ea001e;}.slds-rich-text-editor.slds-has-error", shadowSelector, " .slds-input", shadowSelector, " {border-color: #c9c9c9;-webkit-box-shadow: none;box-shadow: none;}.slds-rich-text-editor.slds-has-error", shadowSelector, " .slds-form-element__help", shadowSelector, " {background: white;margin-top: 0;border-radius: 0 0 0.125rem 0.125rem;}.slds-rich-text-area__content", shadowSelector, " {overflow-y: auto;min-height: var(--slds-c-textarea-sizing-min-height, var(--sds-c-textarea-sizing-min-height, 6rem));max-height: var(--slds-c-textarea-sizing-max-height, var(--sds-c-textarea-sizing-max-height, 15rem));padding: 1rem;background-color: white;}.slds-picklist__label[disabled]", shadowSelector, " .slds-icon", shadowSelector, " {fill: #c9c9c9;}[contenteditable]:focus", shadowSelector, " {outline: none;}.slds-rich-text-editor__textarea:last-child", shadowSelector, " .slds-rich-text-area__content", shadowSelector, " {border-radius: 0 0 0.25rem 0.25rem;}.slds-rich-text-editor__textarea:first-child", shadowSelector, " .slds-rich-text-area__content", shadowSelector, " {border-radius: 0.25rem 0.25rem 0 0;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-editor", shadowSelector, " {white-space: pre-wrap;word-wrap: break-word;-webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;user-select: text;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-editor.ql-blank", shadowSelector, ":before {color: #54698d;content: attr(data-placeholder);pointer-events: none;position: absolute;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-editor", shadowSelector, " a", shadowSelector, " {text-decoration: underline;}.slds-rich-text-editor__textarea", shadowSelector, " .overflow-menu", shadowSelector, " {z-index: 2;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-active", shadowSelector, " {background-color: #eef1f6;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-clipboard", shadowSelector, " {position: absolute !important;margin: -1px !important;border: 0 !important;padding: 0 !important;width: 1px !important;height: 1px !important;overflow: hidden !important;clip: rect(0 0 0 0) !important;}.slds-rich-text-editor__textarea", shadowSelector, " p", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " pre", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " blockquote", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h1", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h2", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h3", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h4", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h5", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h6", shadowSelector, " {counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " {margin: 0;padding: 0;padding-left: 1.5em;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " > li", shadowSelector, " {list-style-type: none;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " > li", shadowSelector, " {list-style-type: none;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " > li", shadowSelector, ":before {content: \"•\";vertical-align: middle;display: inline-block;line-height: normal;}.slds-rich-text-editor__textarea", shadowSelector, " ul[data-checked=\"true\"]", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ul[data-checked=\"false\"]", shadowSelector, " {pointer-events: none;}.slds-rich-text-editor__textarea", shadowSelector, " ul[data-checked=\"true\"]", shadowSelector, " > li", shadowSelector, ":before {color: #777;cursor: pointer;pointer-events: all;}.slds-rich-text-editor__textarea", shadowSelector, " ul[data-checked=\"false\"]", shadowSelector, " > li", shadowSelector, ":before {color: #777;cursor: pointer;pointer-events: all;}.slds-rich-text-editor__textarea", shadowSelector, " ul[data-checked=\"true\"]", shadowSelector, " > li", shadowSelector, ":before {content: \"☑\";}.slds-rich-text-editor__textarea", shadowSelector, " ul[data-checked=\"false\"]", shadowSelector, " > li", shadowSelector, ":before {content: \"☐\";}.slds-rich-text-editor__textarea", shadowSelector, " li", shadowSelector, ":before {display: inline-block;margin-right: 0.3em;text-align: right;white-space: nowrap;width: 1.2em;}.slds-rich-text-editor__textarea", shadowSelector, " li:not(.ql-direction-rtl)", shadowSelector, ":before {margin-left: -1.5em;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li", shadowSelector, " {padding-left: 1.5em;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li", shadowSelector, " {counter-reset: list-1 list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;counter-increment: list-num;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li", shadowSelector, ":before {content: counter(list-num, decimal) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-1", shadowSelector, " {counter-increment: list-1;counter-reset: list-2 list-3 list-4 list-5 list-6 list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-1", shadowSelector, ":before {content: counter(list-1, lower-alpha) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-2", shadowSelector, " {counter-increment: list-2;counter-reset: list-3 list-4 list-5 list-6 list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-2", shadowSelector, ":before {content: counter(list-2, lower-roman) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-3", shadowSelector, " {counter-increment: list-3;counter-reset: list-4 list-5 list-6 list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-3", shadowSelector, ":before {content: counter(list-3, decimal) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-4", shadowSelector, " {counter-increment: list-4;counter-reset: list-5 list-6 list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-4", shadowSelector, ":before {content: counter(list-4, lower-alpha) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-5", shadowSelector, " {counter-increment: list-5;counter-reset: list-6 list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-5", shadowSelector, ":before {content: counter(list-5, lower-roman) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-6", shadowSelector, " {counter-increment: list-6;counter-reset: list-7 list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-6", shadowSelector, ":before {content: counter(list-6, decimal) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-7", shadowSelector, " {counter-increment: list-7;counter-reset: list-8 list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-7", shadowSelector, ":before {content: counter(list-7, lower-alpha) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-8", shadowSelector, " {counter-increment: list-8;counter-reset: list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-8", shadowSelector, ":before {content: counter(list-8, lower-roman) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-9", shadowSelector, " {counter-increment: list-9;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " li.ql-indent-9", shadowSelector, ":before {content: counter(list-9, decimal) \". \";}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-1", shadowSelector, ":before {content: \"◦\";}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-2", shadowSelector, ":before,.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-3", shadowSelector, ":before,.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-4", shadowSelector, ":before,.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-5", shadowSelector, ":before,.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-6", shadowSelector, ":before,.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-7", shadowSelector, ":before,.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " li.ql-indent-8", shadowSelector, ":before {content: \"▪\";}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-1:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 4.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-1.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 4.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-2:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 7.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-2.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 7.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-3:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 10.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-3.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 10.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-4:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 13.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-4.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 13.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-5:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 16.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-5.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 16.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-6:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 19.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-6.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 19.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-7:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 22.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-7.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 22.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-8:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 25.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-8.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 25.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-9:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 28.5em;}.slds-rich-text-editor__textarea", shadowSelector, " li.ql-indent-9.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 28.5em;}.slds-rich-text-editor__textarea", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " {line-height: 1.5;overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: manual;-ms-hyphens: manual;hyphens: manual;}.slds-rich-text-editor__textarea", shadowSelector, " h1", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h1", shadowSelector, " {font-size: 1.5rem;}.slds-rich-text-editor__textarea", shadowSelector, " h2", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h2", shadowSelector, " {font-size: 1.125rem;font-weight: 700;}.slds-rich-text-editor__textarea", shadowSelector, " h3", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h3", shadowSelector, " {font-size: 1.125rem;}.slds-rich-text-editor__textarea", shadowSelector, " h4", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h4", shadowSelector, " {font-size: 0.875rem;font-weight: 700;}.slds-rich-text-editor__textarea", shadowSelector, " h5", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h5", shadowSelector, " {font-size: 0.875rem;}.slds-rich-text-editor__textarea", shadowSelector, " h6", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h6", shadowSelector, " {font-size: 0.75rem;font-weight: 700;}.slds-rich-text-editor__textarea", shadowSelector, " h1", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h2", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h3", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h4", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h5", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " h6", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " dl", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " img", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h1", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h2", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h3", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h4", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h5", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " h6", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " dl", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " img", shadowSelector, " {margin-bottom: 0.75rem;}.slds-rich-text-editor__textarea", shadowSelector, " blockquote", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " blockquote", shadowSelector, " {margin: 2rem 1.5rem;}.slds-rich-text-editor__textarea", shadowSelector, " ins", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ins", shadowSelector, " {color: #2e844a;text-decoration: underline;}.slds-rich-text-editor__textarea", shadowSelector, " del", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " del", shadowSelector, " {color: #ea001e;text-decoration: line-through;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, " {margin-left: 1.5rem;list-style: disc;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " {list-style: circle;margin-bottom: 0;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " {list-style: square;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " {list-style: disc;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " {list-style: circle;}.slds-rich-text-editor__textarea", shadowSelector, " ul", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ul", shadowSelector, " ol", shadowSelector, " {margin-left: 1.5rem;list-style: decimal;margin-bottom: 0;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, " {margin-left: 1.5rem;list-style: decimal;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " {list-style: lower-alpha;margin-bottom: 0;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " {list-style: lower-roman;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " {list-style: decimal;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " {list-style: lower-alpha;}.slds-rich-text-editor__textarea", shadowSelector, " ol", shadowSelector, " ul", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " ol", shadowSelector, " ul", shadowSelector, " {margin-left: 1.5rem;list-style: disc;margin-bottom: 0;}.slds-rich-text-editor__textarea", shadowSelector, " dd", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " dd", shadowSelector, " {margin-left: 2.5rem;}.slds-rich-text-editor__textarea", shadowSelector, " abbr[title]", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " acronym[title]", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " abbr[title]", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " acronym[title]", shadowSelector, " {border-bottom: 1px dotted;cursor: help;}.slds-rich-text-editor__textarea", shadowSelector, " table", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " table", shadowSelector, " {overflow-wrap: normal;word-wrap: normal;word-break: normal;width: auto;}.slds-rich-text-editor__textarea", shadowSelector, " table", shadowSelector, " caption", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " table", shadowSelector, " caption", shadowSelector, " {text-align: center;}.slds-rich-text-editor__textarea", shadowSelector, " th", shadowSelector, ",.slds-rich-text-editor__textarea", shadowSelector, " td", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " th", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " td", shadowSelector, " {padding: 0.5rem;}.slds-rich-text-editor__textarea", shadowSelector, " .sans-serif", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .sans-serif", shadowSelector, " {font-family: sans-serif;}.slds-rich-text-editor__textarea", shadowSelector, " .courier", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .courier", shadowSelector, " {font-family: courier;}.slds-rich-text-editor__textarea", shadowSelector, " .verdana", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .verdana", shadowSelector, " {font-family: verdana;}.slds-rich-text-editor__textarea", shadowSelector, " .tahoma", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .tahoma", shadowSelector, " {font-family: tahoma;}.slds-rich-text-editor__textarea", shadowSelector, " .garamond", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .garamond", shadowSelector, " {font-family: garamond;}.slds-rich-text-editor__textarea", shadowSelector, " .serif", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .serif", shadowSelector, " {font-family: serif;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-1:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-1:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 3em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-1.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-1.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 3em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-2:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-2:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 6em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-2.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-2.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 6em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-3:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-3:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 9em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-3.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-3.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 9em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-4:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-4:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 12em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-4.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-4.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 12em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-5:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-5:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 15em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-5.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-5.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 15em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-6:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-6:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 18em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-6.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-6.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 18em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-7:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-7:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 21em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-7.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-7.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 21em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-8:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-8:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 24em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-8.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-8.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 24em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-9:not(.ql-direction-rtl)", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-9:not(.ql-direction-rtl)", shadowSelector, " {padding-left: 27em;}.slds-rich-text-editor__textarea", shadowSelector, " .ql-indent-9.ql-direction-rtl.ql-align-right", shadowSelector, ",.slds-rich-text-editor__output", shadowSelector, " .ql-indent-9.ql-direction-rtl.ql-align-right", shadowSelector, " {padding-right: 27em;}.slds-slider", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;position: relative;}.slds-slider__range", shadowSelector, " {-moz-appearance: none;-webkit-appearance: none;appearance: none;width: 100%;background: none;background-color: transparent;border-radius: 0.125rem;}.slds-slider__range:focus", shadowSelector, " {outline: 0;}.slds-slider__range", shadowSelector, "::-webkit-slider-thumb {-moz-appearance: none;-webkit-appearance: none;appearance: none;width: 1rem;height: 1rem;border-radius: var(--slds-c-slider-thumb-radius-border, var(--sds-c-slider-thumb-radius-border, 50%));background: none;background-color: var(--slds-c-slider-thumb-color-foreground, var(--sds-c-slider-thumb-color-foreground, #0176d3));border: 0;-webkit-box-shadow: var(\n --slds-c-slider-thumb-shadow,\n var(--sds-c-slider-thumb-shadow, rgba(0, 0, 0, 0.16) 0 2px 3px)\n );box-shadow: var(--slds-c-slider-thumb-shadow, var(--sds-c-slider-thumb-shadow, rgba(0, 0, 0, 0.16) 0 2px 3px));cursor: pointer;-webkit-transition: background 0.15s ease-in-out;transition: background 0.15s ease-in-out;margin-top: calc(((1rem / 2) - (4px / 2)) * -1);}.slds-slider__range::-webkit-slider-thumb:hover", shadowSelector, " {background-color: var(\n --slds-c-slider-thumb-color-foreground-hover,\n var(--sds-c-slider-thumb-color-foreground-hover, #014486)\n );}.slds-slider__range", shadowSelector, "::-webkit-slider-runnable-track {width: 100%;height: 4px;cursor: pointer;background: none;background-color: var(--slds-c-slider-track-color-background, var(--sds-c-slider-track-color-background, #f3f3f3));border-radius: var(--slds-c-slider-track-radius-border, var(--sds-c-slider-track-radius-border, 0.125rem));}.slds-slider__range", shadowSelector, "::-moz-range-thumb {-moz-appearance: none;-webkit-appearance: none;appearance: none;width: 1rem;height: 1rem;border-radius: var(--slds-c-slider-thumb-radius-border, var(--sds-c-slider-thumb-radius-border, 50%));background: none;background-color: var(--slds-c-slider-thumb-color-foreground, var(--sds-c-slider-thumb-color-foreground, #0176d3));border: 0;box-shadow: var(--slds-c-slider-thumb-shadow, var(--sds-c-slider-thumb-shadow, rgba(0, 0, 0, 0.16) 0 2px 3px));cursor: pointer;-moz-transition: background 0.15s ease-in-out;transition: background 0.15s ease-in-out;}.slds-slider__range::-moz-range-thumb:hover", shadowSelector, " {background-color: var(\n --slds-c-slider-thumb-color-foreground-hover,\n var(--sds-c-slider-thumb-color-foreground-hover, #014486)\n );}.slds-slider__range", shadowSelector, "::-moz-range-track {width: 100%;height: 4px;cursor: pointer;background: none;background-color: var(--slds-c-slider-track-color-background, var(--sds-c-slider-track-color-background, #f3f3f3));border-radius: var(--slds-c-slider-track-radius-border, var(--sds-c-slider-track-radius-border, 0.125rem));}.slds-slider__range", shadowSelector, "::-ms-track {width: 100%;height: 4px;cursor: pointer;background: none;background-color: var(--slds-c-slider-track-color-background, var(--sds-c-slider-track-color-background, #f3f3f3));border-radius: var(--slds-c-slider-track-radius-border, var(--sds-c-slider-track-radius-border, 0.125rem));border-color: transparent;color: transparent;cursor: pointer;}.slds-slider__range", shadowSelector, "::-ms-thumb {-moz-appearance: none;-webkit-appearance: none;appearance: none;width: 1rem;height: 1rem;border-radius: var(--slds-c-slider-thumb-radius-border, var(--sds-c-slider-thumb-radius-border, 50%));background: none;background-color: var(--slds-c-slider-thumb-color-foreground, var(--sds-c-slider-thumb-color-foreground, #0176d3));border: 0;box-shadow: var(--slds-c-slider-thumb-shadow, var(--sds-c-slider-thumb-shadow, rgba(0, 0, 0, 0.16) 0 2px 3px));cursor: pointer;-ms-transition: background 0.15s ease-in-out;transition: background 0.15s ease-in-out;margin-top: calc(4px / 4);}.slds-slider__range::-ms-thumb:hover", shadowSelector, " {background-color: var(\n --slds-c-slider-thumb-color-foreground-hover,\n var(--sds-c-slider-thumb-color-foreground-hover, #014486)\n );}.slds-slider__range:focus", shadowSelector, "::-webkit-slider-thumb {background-color: var(\n --slds-c-slider-thumb-color-foreground-focus,\n var(--sds-c-slider-thumb-color-foreground-focus, #014486)\n );-webkit-box-shadow: var(--slds-c-slider-thumb-shadow-focus, var(--sds-c-slider-thumb-shadow-focus, 0 0 3px #0176d3));box-shadow: var(--slds-c-slider-thumb-shadow-focus, var(--sds-c-slider-thumb-shadow-focus, 0 0 3px #0176d3));}.slds-slider__range:active", shadowSelector, "::-webkit-slider-thumb {background-color: var(\n --slds-c-slider-thumb-color-foreground-active,\n var(--sds-c-slider-thumb-color-foreground-active, #014486)\n );}.slds-slider__range:focus", shadowSelector, "::-moz-range-thumb {background-color: var(\n --slds-c-slider-thumb-color-foreground-focus,\n var(--sds-c-slider-thumb-color-foreground-focus, #014486)\n );box-shadow: var(--slds-c-slider-thumb-shadow-focus, var(--sds-c-slider-thumb-shadow-focus, 0 0 3px #0176d3));}.slds-slider__range:active", shadowSelector, "::-moz-range-thumb {background-color: var(\n --slds-c-slider-thumb-color-foreground-active,\n var(--sds-c-slider-thumb-color-foreground-active, #014486)\n );}.slds-slider__range[disabled]", shadowSelector, "::-webkit-slider-thumb {background-color: #f3f3f3;cursor: default;}.slds-slider__range[disabled]", shadowSelector, "::-webkit-slider-runnable-track {background-color: #f3f3f3;cursor: default;}.slds-slider__range[disabled]", shadowSelector, "::-moz-range-thumb {background-color: #f3f3f3;cursor: default;}.slds-slider__range[disabled]", shadowSelector, "::-moz-range-track {background-color: #f3f3f3;}.slds-slider__range[disabled]", shadowSelector, "::-ms-thumb {background-color: #f3f3f3;cursor: default;}.slds-slider__range[disabled]", shadowSelector, "::-ms-track {background-color: #f3f3f3;cursor: default;}.slds-slider__value", shadowSelector, " {padding: 0 0.5rem;}.slds-slider-label__label", shadowSelector, " {display: block;}.slds-slider_vertical", shadowSelector, " {height: 13.875rem;}.slds-slider_vertical", shadowSelector, " .slds-slider__range", shadowSelector, " {width: 12rem;height: 1rem;-webkit-transform: rotate(-90deg);transform: rotate(-90deg);-webkit-transform-origin: 6rem 6rem;transform-origin: 6rem 6rem;}.slds-slider_vertical", shadowSelector, " .slds-slider__value", shadowSelector, " {position: absolute;left: 0;bottom: 0;padding: 0;}.slds-tabs_default", shadowSelector, " {display: block;width: 100%;}.slds-tabs_default", shadowSelector, " .slds-tabs__item_overflow", shadowSelector, " {overflow: visible;}.slds-tabs_default__nav", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;border-bottom-width: var(--slds-c-tabs-list-sizing-border, var(--sds-c-tabs-list-sizing-border, 1px));border-bottom-style: solid;border-bottom-color: var(--slds-c-tabs-list-color-border, var(--sds-c-tabs-list-color-border, #e5e5e5));}.slds-tabs_default__item", shadowSelector, " {color: var(--slds-c-tabs-item-text-color, var(--sds-c-tabs-item-text-color, #444444));position: relative;padding-top: var(\n --slds-c-tabs-item-spacing-block-start,\n var(--sds-c-tabs-item-spacing-block-start, var(--sds-c-tabs-item-spacing-block, 0))\n );padding-right: var(\n --slds-c-tabs-item-spacing-inline-end,\n var(--sds-c-tabs-item-spacing-inline-end, var(--sds-c-tabs-item-spacing-inline, 0.75rem))\n );padding-bottom: var(\n --slds-c-tabs-item-spacing-block-end,\n var(--sds-c-tabs-item-spacing-block-end, var(--sds-c-tabs-item-spacing-block, 0))\n );padding-left: var(\n --slds-c-tabs-item-spacing-inline-start,\n var(--sds-c-tabs-item-spacing-inline-start, var(--sds-c-tabs-item-spacing-inline, 0.75rem))\n );margin-bottom: calc(var(--slds-c-tabs-list-sizing-border, var(--sds-c-tabs-list-sizing-border, 1px)) * -1);}.slds-tabs_default__item", shadowSelector, ":after {display: block;content: \"\";bottom: 0;left: 0;right: 0;height: 0;position: absolute;}.slds-tabs_default__item.slds-active", shadowSelector, ",.slds-tabs_default__item.slds-is-active", shadowSelector, " {--slds-c-tabs-item-text-color: var(\n --slds-c-tabs-item-text-color-active,\n var(--sds-c-tabs-item-text-color-active, #181818)\n );}.slds-tabs_default__item.slds-active", shadowSelector, ":after,.slds-tabs_default__item.slds-is-active", shadowSelector, ":after {background-color: var(--slds-c-tabs-item-color-border-active, var(--sds-c-tabs-item-color-border-active, #1b96ff));height: calc(var(--slds-c-tabs-list-sizing-border, var(--sds-c-tabs-list-sizing-border, 1px)) + 2px);}.slds-tabs_default__item.slds-active", shadowSelector, " .slds-tabs_default__link", shadowSelector, ",.slds-tabs_default__item.slds-is-active", shadowSelector, " .slds-tabs_default__link", shadowSelector, " {font-weight: 700;}.slds-tabs_default__item.slds-active", shadowSelector, " .slds-tabs_default__link:hover", shadowSelector, ",.slds-tabs_default__item.slds-is-active", shadowSelector, " .slds-tabs_default__link:hover", shadowSelector, " {color: currentColor;}.slds-tabs_default__item:hover", shadowSelector, ":after {height: calc(var(--slds-c-tabs-list-sizing-border, var(--sds-c-tabs-list-sizing-border, 1px)) + 1px);background-color: var(--slds-c-tabs-item-color-border-hover, var(--sds-c-tabs-item-color-border-hover, #0176d3));}.slds-tabs_default__item:focus", shadowSelector, ",.slds-tabs_default__item.slds-has-focus", shadowSelector, " {outline: 0;}.slds-tabs_default__item:focus", shadowSelector, ":after,.slds-tabs_default__item.slds-has-focus", shadowSelector, ":after {height: calc(var(--slds-c-tabs-list-sizing-border, var(--sds-c-tabs-list-sizing-border, 2px)) + 1px);background-color: var(--slds-c-tabs-item-color-border-active, var(--sds-c-tabs-item-color-border-active, #1b96ff));}.slds-tabs_default__item", shadowSelector, " .slds-tabs_default__link:focus", shadowSelector, " {-webkit-box-shadow: none;box-shadow: none;}.slds-tabs_default__item.slds-has-notification", shadowSelector, " {background: #f3f3f3;}.slds-tabs_default__item.slds-has-notification", shadowSelector, ":after {background-color: #e5e5e5;}.slds-tabs_default__item.slds-has-notification:hover", shadowSelector, ":after {background-color: #0176d3;}.slds-tabs_default__item.slds-has-notification", shadowSelector, " .slds-indicator_unread", shadowSelector, " {display: inline-block;height: 0.375rem;width: 0.375rem;position: relative;top: auto;left: auto;}.slds-tabs_default__item.slds-is-unsaved", shadowSelector, " .slds-indicator_unread", shadowSelector, " {margin-left: -0.35rem;}.slds-tabs_default__item.slds-is-unsaved", shadowSelector, " .slds-indicator_unsaved", shadowSelector, " {color: #014486;}.slds-tabs_default__item.slds-has-notification", shadowSelector, " .slds-indicator_unsaved", shadowSelector, " {top: -0.25rem;}.slds-tabs_default__link", shadowSelector, " {max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;display: block;text-decoration: none;cursor: pointer;height: var(--slds-c-tabs-item-sizing-height, var(--sds-c-tabs-item-sizing-height, 2.5rem));line-height: var(--slds-c-tabs-item-line-height, var(--sds-c-tabs-item-line-height, 2.5rem));color: currentColor;border: 0;text-transform: inherit;z-index: 1;}.slds-tabs_default__link:focus", shadowSelector, " {outline: 0;}.slds-tabs_default__link:hover", shadowSelector, ",.slds-tabs_default__link:focus", shadowSelector, " {text-decoration: none;-webkit-box-shadow: none;box-shadow: none;color: currentColor;}.slds-tabs_default__link[tabindex=\"0\"]:focus", shadowSelector, " {text-decoration: underline;}.slds-tabs_default__overflow-button", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;height: var(--slds-c-tabs-item-sizing-height, var(--sds-c-tabs-item-sizing-height, 2.5rem));line-height: var(--slds-c-tabs-item-line-height, var(--sds-c-tabs-item-line-height, 2.5rem));}.slds-tabs_default__overflow-button", shadowSelector, " .slds-button", shadowSelector, " {line-height: inherit;color: var(--slds-c-tabs-item-text-color, var(--sds-c-tabs-item-text-color, #444444));-webkit-box-shadow: none;box-shadow: none;}.slds-tabs_default__overflow-button", shadowSelector, " .slds-button:focus", shadowSelector, " {text-decoration: underline;}.slds-tabs_default__overflow-button.slds-has-error", shadowSelector, " .slds-button", shadowSelector, ",.slds-tabs_default__overflow-button.slds-has-success", shadowSelector, " .slds-button", shadowSelector, " {color: white;}.slds-tabs_default__content", shadowSelector, " {position: relative;padding-top: var(\n --slds-c-tabs-panel-spacing-block-start,\n var(\n --sds-c-tabs-panel-spacing-block-start,\n var(--slds-c-tabs-panel-spacing-block, var(--sds-c-tabs-panel-spacing-block, 0.75rem))\n )\n );padding-right: var(\n --slds-c-tabs-panel-spacing-inline-end,\n var(\n --sds-c-tabs-panel-spacing-inline-end,\n var(--slds-c-tabs-panel-spacing-inline, var(--sds-c-tabs-panel-spacing-inline, 0))\n )\n );padding-bottom: var(\n --slds-c-tabs-panel-spacing-block-end,\n var(\n --sds-c-tabs-panel-spacing-block-end,\n var(--slds-c-tabs-panel-spacing-block, var(--sds-c-tabs-panel-spacing-block, 0.75rem))\n )\n );padding-left: var(\n --slds-c-tabs-panel-spacing-inline-start,\n var(\n --sds-c-tabs-panel-spacing-inline-start,\n var(--slds-c-tabs-panel-spacing-inline, var(--sds-c-tabs-panel-spacing-inline, 0))\n )\n );}.slds-tabs_medium", shadowSelector, " .slds-tabs_default__item", shadowSelector, " {font-size: 1rem;}.slds-tabs_large", shadowSelector, " .slds-tabs_default__item", shadowSelector, " {font-size: 1.25rem;}.slds-tabs__left-icon", shadowSelector, " {margin-right: 0.5rem;}.slds-tabs__left-icon:empty", shadowSelector, " {margin-right: 0;}.slds-tabs__right-icon", shadowSelector, " {margin-left: 0.5rem;}.slds-tabs-mobile__container", shadowSelector, " {position: relative;overflow: hidden;}.slds-panel__body", shadowSelector, " .slds-tabs-mobile", shadowSelector, " {margin-left: -0.75rem;margin-right: -0.75rem;}.slds-panel__body", shadowSelector, " .slds-tabs-mobile:first-child", shadowSelector, " {margin-top: -0.75rem;}.slds-panel__body", shadowSelector, " .slds-tabs-mobile:first-child", shadowSelector, " .slds-tabs-mobile__item:first-child", shadowSelector, " {border-top: 0;}.slds-tabs-mobile", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;background-color: white;}.slds-tabs-mobile__item", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;border-top: 1px solid #e5e5e5;height: 2.75rem;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;color: #181818;font-size: 1rem;padding: 0 0.75rem;}.slds-tabs-mobile__item:active", shadowSelector, " {background-color: #f3f3f3;}.slds-tabs-mobile__item:last-child", shadowSelector, " {border-bottom: 1px solid #e5e5e5;}.slds-tabs-mobile__group", shadowSelector, " .slds-tabs-mobile__container", shadowSelector, " + .slds-tabs-mobile__container", shadowSelector, " .slds-tabs-mobile__item:first-child", shadowSelector, " {border-top: 0;}.slds-textarea", shadowSelector, " {-webkit-appearance: none;min-height: var(--slds-c-textarea-sizing-min-height, var(--sds-c-textarea-sizing-min-height));width: 100%;padding-top: var(--slds-c-textarea-spacing-block-start, var(--sds-c-textarea-spacing-block-start, 0.5rem));padding-right: var(--slds-c-textarea-spacing-inline-end, var(--sds-c-textarea-spacing-inline-end, 0.75rem));padding-bottom: var(--slds-c-textarea-spacing-block-end, var(--sds-c-textarea-spacing-block-end, 0.5rem));padding-left: var(--slds-c-textarea-spacing-inline-start, var(--sds-c-textarea-spacing-inline-start, 0.75rem));background-color: var(--slds-c-textarea-color-background, var(--sds-c-textarea-color-background, white));color: var(--slds-c-textarea-text-color, var(--sds-c-textarea-text-color));border: 1px solid var(--slds-c-textarea-color-border, var(--sds-c-textarea-color-border, #c9c9c9));border-radius: var(--slds-c-textarea-radius-border, var(--sds-c-textarea-radius-border, 0.25rem));-webkit-box-shadow: var(--slds-c-textarea-shadow, var(--sds-c-textarea-shadow));box-shadow: var(--slds-c-textarea-shadow, var(--sds-c-textarea-shadow));resize: vertical;-webkit-transition: border 0.1s linear, background-color 0.1s linear;transition: border 0.1s linear, background-color 0.1s linear;}.slds-textarea:required", shadowSelector, " {--slds-c-textarea-shadow: none;}.slds-textarea:focus", shadowSelector, ",.slds-textarea:active", shadowSelector, " {outline: 0;color: var(--slds-c-textarea-text-color-focus, var(--sds-c-textarea-text-color-focus));background-color: var(--slds-c-textarea-color-background-focus, var(--sds-c-textarea-color-background-focus, white));border-color: var(--slds-c-textarea-color-border-focus, var(--sds-c-textarea-color-border-focus, #1b96ff));-webkit-box-shadow: var(--slds-c-textarea-shadow-focus, var(--sds-c-textarea-shadow-focus, 0 0 3px #0176d3));box-shadow: var(--slds-c-textarea-shadow-focus, var(--sds-c-textarea-shadow-focus, 0 0 3px #0176d3));}.slds-textarea[disabled]", shadowSelector, ",.slds-textarea.slds-is-disabled", shadowSelector, " {background-color: #f3f3f3;border-color: #c9c9c9;color: inherit;cursor: not-allowed;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.slds-textarea[disabled]:focus", shadowSelector, ",.slds-textarea[disabled]:active", shadowSelector, ",.slds-textarea.slds-is-disabled:focus", shadowSelector, ",.slds-textarea.slds-is-disabled:active", shadowSelector, " {-webkit-box-shadow: none;box-shadow: none;}.slds-has-error", shadowSelector, " .slds-textarea", shadowSelector, " {--slds-c-textarea-color-background: white;--slds-c-textarea-color-border: #ea001e;--slds-c-textarea-shadow: #ea001e 0 0 0 1px inset;background-clip: padding-box;}.slds-has-error", shadowSelector, " .slds-textarea:focus", shadowSelector, ",.slds-has-error", shadowSelector, " .slds-textarea:active", shadowSelector, " {--slds-c-textarea-text-color-focus: var(--slds-c-textarea-text-color-error-focus);--slds-c-textarea-color-background-focus: var(--slds-c-textarea-color-background-error-focus, white);--slds-c-textarea-shadow-focus: #ea001e 0 0 0 1px inset, 0 0 3px #0176d3;}.slds-tile", shadowSelector, " + .slds-tile", shadowSelector, " {margin-top: 0.5rem;}.slds-tile__detail", shadowSelector, " {position: relative;}.slds-tile__meta", shadowSelector, " {color: #181818;}.slds-tile_board", shadowSelector, " {position: relative;}.slds-tile_board", shadowSelector, " .slds-has-alert", shadowSelector, " {padding-right: 1.5rem;}.slds-tile_board__icon", shadowSelector, " {width: 1rem;height: 1rem;position: absolute;bottom: 0.25rem;right: 0.25rem;}.slds-table_tree", shadowSelector, " {}.slds-table_tree", shadowSelector, " .slds-tree__item", shadowSelector, " {line-height: 1.5rem;}.slds-table_tree", shadowSelector, " .slds-tree__item", shadowSelector, " a", shadowSelector, " {color: #0176d3;}.slds-table_tree", shadowSelector, " .slds-tree__item", shadowSelector, " a:hover", shadowSelector, " {text-decoration: underline;}.slds-table_tree", shadowSelector, " .slds-button", shadowSelector, " {-ms-flex-item-align: center;align-self: center;}.slds-table_tree", shadowSelector, " .slds-button:not(.slds-th__action-button).slds-button:not(.slds-th__action-button)", shadowSelector, " {margin-top: 0;}.slds-table_tree", shadowSelector, " [aria-level=\"1\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 1.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"2\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 2.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"3\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 3.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"4\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 4.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"5\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 5.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"6\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 6.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"7\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 7.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"8\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 8.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"9\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 9.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"10\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 10.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"11\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 11.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"12\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 12.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"13\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 13.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"14\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 14.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"15\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 15.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"16\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 16.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"17\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 17.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"18\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 18.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"19\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 19.5rem;}.slds-table_tree", shadowSelector, " [aria-level=\"20\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 20.5rem;}.slds-tree", shadowSelector, " {}.slds-tree-container", shadowSelector, ",.slds-tree_container", shadowSelector, " {min-width: 7.5rem;max-width: var(--slds-c-tree-sizing-max-width, var(--sds-c-tree-sizing-max-width, 25rem));}.slds-tree-container", shadowSelector, " > .slds-text-heading_label", shadowSelector, ",.slds-tree_container", shadowSelector, " > .slds-text-heading_label", shadowSelector, " {margin-bottom: 0.5rem;}.slds-tree__item", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;padding: 0.375rem 0 0.375rem 1rem;}.slds-tree__item.slds-is-hovered", shadowSelector, ",.slds-tree__item:hover", shadowSelector, " {background: #f3f3f3;cursor: pointer;}.slds-tree", shadowSelector, " [role=\"treeitem\"]:focus", shadowSelector, " {outline: 0;}.slds-tree", shadowSelector, " [role=\"treeitem\"]:focus", shadowSelector, " > .slds-tree__item", shadowSelector, " {background: #f3f3f3;cursor: pointer;text-decoration: underline;}.slds-tree", shadowSelector, " [role=\"treeitem\"][aria-selected=\"true\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {background: rgba(21, 137, 238, 0.1);-webkit-box-shadow: #1b96ff 4px 0 0 inset;box-shadow: #1b96ff 4px 0 0 inset;}[dir=\"rtl\"]", shadowSelector, " .slds-tree", shadowSelector, " [role=\"treeitem\"][aria-selected=\"true\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {-webkit-box-shadow: #1b96ff -4px 0 0 inset;box-shadow: #1b96ff -4px 0 0 inset;}.slds-tree", shadowSelector, " [aria-disabled=\"true\"]", shadowSelector, " {color: #c9c9c9;}.slds-tree", shadowSelector, " [aria-disabled=\"true\"]", shadowSelector, " .slds-tree__item.slds-is-hovered", shadowSelector, ",.slds-tree", shadowSelector, " [aria-disabled=\"true\"]", shadowSelector, " .slds-tree__item:hover", shadowSelector, " {background-color: transparent;cursor: default;}.slds-tree", shadowSelector, " [aria-disabled=\"true\"]", shadowSelector, " .slds-tree__item-meta", shadowSelector, " {color: inherit;}.slds-tree", shadowSelector, " [role=\"treeitem\"]", shadowSelector, " > [role=\"group\"]", shadowSelector, " {display: none;}.slds-tree", shadowSelector, " [role=\"treeitem\"][aria-expanded=\"true\"]", shadowSelector, " > [role=\"group\"]", shadowSelector, " {display: block;}[aria-expanded=\"false\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " .slds-button__icon", shadowSelector, " {-webkit-transition: 0.2s -webkit-transform ease-in-out;transition: 0.2s -webkit-transform ease-in-out;transition: 0.2s transform ease-in-out;transition: 0.2s transform ease-in-out, 0.2s -webkit-transform ease-in-out;-webkit-transform: rotate(0deg);transform: rotate(0deg);}[aria-expanded=\"true\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " .slds-button__icon", shadowSelector, " {-webkit-transition: 0.2s -webkit-transform ease-in-out;transition: 0.2s -webkit-transform ease-in-out;transition: 0.2s transform ease-in-out;transition: 0.2s transform ease-in-out, 0.2s -webkit-transform ease-in-out;-webkit-transform: rotate(90deg);transform: rotate(90deg);}[dir=\"rtl\"]", shadowSelector, " [aria-expanded=\"true\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " .slds-button__icon", shadowSelector, " {-webkit-transform: rotate(-90deg);transform: rotate(-90deg);}[aria-level=\"1\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 1rem;}[aria-level=\"2\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 2rem;}[aria-level=\"3\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 3rem;}[aria-level=\"4\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 4rem;}[aria-level=\"5\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 5rem;}[aria-level=\"6\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 6rem;}[aria-level=\"7\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 7rem;}[aria-level=\"8\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 8rem;}[aria-level=\"9\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 9rem;}[aria-level=\"10\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 10rem;}[aria-level=\"11\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 11rem;}[aria-level=\"12\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 12rem;}[aria-level=\"13\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 13rem;}[aria-level=\"14\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 14rem;}[aria-level=\"15\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 15rem;}[aria-level=\"16\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 16rem;}[aria-level=\"17\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 17rem;}[aria-level=\"18\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 18rem;}[aria-level=\"19\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 19rem;}[aria-level=\"20\"]", shadowSelector, " > .slds-tree__item", shadowSelector, " {padding-left: 20rem;}.slds-tree__item-label", shadowSelector, " {display: block;}.slds-tree__item-meta", shadowSelector, " {display: block;color: #444444;}.slds-tree__item", shadowSelector, " .slds-button", shadowSelector, " {-ms-flex-item-align: start;align-self: flex-start;margin-top: 0.125rem;}.slds-tree__item", shadowSelector, " .slds-pill", shadowSelector, " {margin-left: 0.75rem;}.slds-tree__group-header", shadowSelector, " {font-size: 0.875rem;font-weight: 700;}.slds-nav-vertical", shadowSelector, " {position: relative;}.slds-nav-vertical_compact", shadowSelector, " .slds-nav-vertical__title", shadowSelector, ",.slds-nav-vertical_compact", shadowSelector, " .slds-nav-vertical__action", shadowSelector, " {padding: 0.25rem 1.5rem;}.slds-nav-vertical_shade", shadowSelector, " .slds-is-active.slds-nav-vertical__item", shadowSelector, ":before {background: white;}.slds-nav-vertical_shade", shadowSelector, " .slds-nav-vertical__item:hover", shadowSelector, ":before {background: white;}.slds-nav-vertical_shade", shadowSelector, " .slds-is-active", shadowSelector, " .slds-nav-vertical__action", shadowSelector, " {border-color: #e5e5e5;}.slds-nav-vertical__title", shadowSelector, " {padding: 0.5rem 1rem;padding-left: 1.5rem;font-size: 1rem;font-weight: 700;}.slds-nav-vertical__title:not(:first-of-type)", shadowSelector, " {margin-top: 0.5rem;}.slds-nav-vertical__section:not(:first-of-type)", shadowSelector, " {margin-top: 0.5rem;}.slds-nav-vertical__item", shadowSelector, " {position: relative;}.slds-nav-vertical__item", shadowSelector, ":before {position: absolute;top: 0;right: 0;bottom: 0;left: 0;content: \"\";}.slds-nav-vertical__item:hover", shadowSelector, ":before,.slds-nav-vertical__item.slds-is-active", shadowSelector, ":before {background: rgba(21, 137, 238, 0.1);}.slds-nav-vertical__action", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;width: 100%;padding: 0.5rem 1.5rem 0.5rem 2rem;color: #181818;border-top: 1px solid transparent;border-bottom: 1px solid transparent;border-radius: 0;-webkit-box-shadow: inset 0 0 0 #1b96ff;box-shadow: inset 0 0 0 #1b96ff;cursor: pointer;}.slds-nav-vertical__action:active", shadowSelector, ",.slds-nav-vertical__action:hover", shadowSelector, ",.slds-nav-vertical__action:focus", shadowSelector, " {color: currentColor;}.slds-nav-vertical__action:hover", shadowSelector, " {text-decoration: none;-webkit-box-shadow: inset 0.125rem 0 0 #1b96ff;box-shadow: inset 0.125rem 0 0 #1b96ff;}[dir=\"rtl\"]", shadowSelector, " .slds-nav-vertical__action:hover", shadowSelector, " {-webkit-box-shadow: inset -0.125rem 0 0 #1b96ff;box-shadow: inset -0.125rem 0 0 #1b96ff;}.slds-nav-vertical__action:focus", shadowSelector, " {outline: 0;text-decoration: underline;}.slds-nav-vertical__item.slds-is-active", shadowSelector, " .slds-nav-vertical__action", shadowSelector, " {font-weight: bold;-webkit-box-shadow: inset 0.25rem 0 0 #1b96ff;box-shadow: inset 0.25rem 0 0 #1b96ff;}[dir=\"rtl\"]", shadowSelector, " .slds-nav-vertical__item.slds-is-active", shadowSelector, " .slds-nav-vertical__action", shadowSelector, " {-webkit-box-shadow: inset -0.25rem 0 0 #1b96ff;box-shadow: inset -0.25rem 0 0 #1b96ff;}.slds-vertical-tabs", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;overflow: hidden;border: 1px solid #e5e5e5;border-radius: 0.25rem;}.slds-vertical-tabs__nav", shadowSelector, " {width: 12rem;border-right: 1px solid #e5e5e5;background: #f3f3f3;}.slds-vertical-tabs__nav-item", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;overflow: hidden;border-bottom: 1px solid #e5e5e5;color: #444444;}.slds-vertical-tabs__nav-item:last-child", shadowSelector, " {margin-bottom: -1px;}.slds-vertical-tabs__link", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-flex: 1;-ms-flex: 1 1 0%;flex: 1 1 0%;-webkit-box-align: center;-ms-flex-align: center;align-items: center;min-width: 0;padding: 0.75rem;color: currentColor;}.slds-vertical-tabs__link:hover", shadowSelector, " {background: #c9c9c9;color: #181818;text-decoration: none;}.slds-vertical-tabs__link:focus", shadowSelector, " {outline: 0;}.slds-vertical-tabs__left-icon", shadowSelector, " {margin-right: 0.5rem;}.slds-vertical-tabs__left-icon:empty", shadowSelector, " {margin-right: 0;}.slds-vertical-tabs__right-icon", shadowSelector, " {margin-left: auto;}.slds-vertical-tabs__content", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1;flex: 1;padding: 1rem;background: white;}.slds-vertical-tabs__nav-item.slds-is-active", shadowSelector, " {margin-right: -1px;border-right: 0;background: white;color: #0176d3;}.slds-vertical-tabs__nav-item.slds-is-active", shadowSelector, " .slds-vertical-tabs__link:hover", shadowSelector, " {background: white;color: currentColor;}.slds-vertical-tabs__nav-item.slds-has-focus", shadowSelector, " {text-decoration: underline;}.slds-grid", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;}.slds-grid_frame", shadowSelector, " {min-width: 100vw;min-height: 100vh;overflow: hidden;}.slds-grid_vertical", shadowSelector, " {-webkit-box-orient: vertical;-webkit-box-direction: normal;-ms-flex-direction: column;flex-direction: column;}.slds-grid_vertical-reverse", shadowSelector, " {-webkit-box-orient: vertical;-webkit-box-direction: reverse;-ms-flex-direction: column-reverse;flex-direction: column-reverse;}.slds-grid_reverse", shadowSelector, " {-webkit-box-orient: horizontal;-webkit-box-direction: reverse;-ms-flex-direction: row-reverse;flex-direction: row-reverse;}.slds-wrap", shadowSelector, " {-ms-flex-wrap: wrap;flex-wrap: wrap;-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;}.slds-nowrap", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;}@media (min-width: 20em) {.slds-x-small-nowrap", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;}}@media (min-width: 30em) {.slds-small-nowrap", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;}}@media (min-width: 48em) {.slds-medium-nowrap", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;}}@media (min-width: 64em) {.slds-large-nowrap", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;-ms-flex-wrap: nowrap;flex-wrap: nowrap;-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;}}.slds-gutters", shadowSelector, " {margin-right: -0.75rem;margin-left: -0.75rem;}.slds-gutters", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 0.75rem;padding-left: 0.75rem;}.slds-gutters_xxx-small", shadowSelector, " {margin-right: -0.125rem;margin-left: -0.125rem;}.slds-gutters_xxx-small", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 0.125rem;padding-left: 0.125rem;}.slds-gutters_xx-small", shadowSelector, " {margin-right: -0.25rem;margin-left: -0.25rem;}.slds-gutters_xx-small", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 0.25rem;padding-left: 0.25rem;}.slds-gutters_x-small", shadowSelector, " {margin-right: -0.5rem;margin-left: -0.5rem;}.slds-gutters_x-small", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 0.5rem;padding-left: 0.5rem;}.slds-gutters_small", shadowSelector, " {margin-right: -0.75rem;margin-left: -0.75rem;}.slds-gutters_small", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 0.75rem;padding-left: 0.75rem;}.slds-gutters_medium", shadowSelector, " {margin-right: -1rem;margin-left: -1rem;}.slds-gutters_medium", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 1rem;padding-left: 1rem;}.slds-gutters_large", shadowSelector, " {margin-right: -1.5rem;margin-left: -1.5rem;}.slds-gutters_large", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 1.5rem;padding-left: 1.5rem;}.slds-gutters_x-large", shadowSelector, " {margin-right: -2rem;margin-left: -2rem;}.slds-gutters_x-large", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 2rem;padding-left: 2rem;}.slds-gutters_xx-large", shadowSelector, " {margin-right: -3rem;margin-left: -3rem;}.slds-gutters_xx-large", shadowSelector, " .slds-col", shadowSelector, " {padding-right: 3rem;padding-left: 3rem;}.slds-gutters_direct", shadowSelector, " {margin-right: -0.75rem;margin-left: -0.75rem;}.slds-gutters_direct", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 0.75rem;padding-left: 0.75rem;}.slds-gutters_direct-xxx-small", shadowSelector, " {margin-right: -0.125rem;margin-left: -0.125rem;}.slds-gutters_direct-xxx-small", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 0.125rem;padding-left: 0.125rem;}.slds-gutters_direct-xx-small", shadowSelector, " {margin-right: -0.25rem;margin-left: -0.25rem;}.slds-gutters_direct-xx-small", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 0.25rem;padding-left: 0.25rem;}.slds-gutters_direct-x-small", shadowSelector, " {margin-right: -0.5rem;margin-left: -0.5rem;}.slds-gutters_direct-x-small", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 0.5rem;padding-left: 0.5rem;}.slds-gutters_direct-small", shadowSelector, " {margin-right: -0.75rem;margin-left: -0.75rem;}.slds-gutters_direct-small", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 0.75rem;padding-left: 0.75rem;}.slds-gutters_direct-medium", shadowSelector, " {margin-right: -1rem;margin-left: -1rem;}.slds-gutters_direct-medium", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 1rem;padding-left: 1rem;}.slds-gutters_direct-large", shadowSelector, " {margin-right: -1.5rem;margin-left: -1.5rem;}.slds-gutters_direct-large", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 1.5rem;padding-left: 1.5rem;}.slds-gutters_direct-x-large", shadowSelector, " {margin-right: -2rem;margin-left: -2rem;}.slds-gutters_direct-x-large", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 2rem;padding-left: 2rem;}.slds-gutters_direct-xx-large", shadowSelector, " {margin-right: -3rem;margin-left: -3rem;}.slds-gutters_direct-xx-large", shadowSelector, " > .slds-col", shadowSelector, " {padding-right: 3rem;padding-left: 3rem;}.slds-grid_pull-padded", shadowSelector, " {margin-right: -0.75rem;margin-left: -0.75rem;}.slds-grid_pull-padded-xxx-small", shadowSelector, " {margin-right: -0.125rem;margin-left: -0.125rem;}.slds-grid_pull-padded-xx-small", shadowSelector, " {margin-right: -0.25rem;margin-left: -0.25rem;}.slds-grid_pull-padded-x-small", shadowSelector, " {margin-right: -0.5rem;margin-left: -0.5rem;}.slds-grid_pull-padded-small", shadowSelector, " {margin-right: -0.75rem;margin-left: -0.75rem;}.slds-grid_pull-padded-medium", shadowSelector, " {margin-right: -1rem;margin-left: -1rem;}.slds-grid_pull-padded-large", shadowSelector, " {margin-right: -1.5rem;margin-left: -1.5rem;}.slds-grid_pull-padded-x-large", shadowSelector, " {margin-right: -2rem;margin-left: -2rem;}.slds-grid_pull-padded-xx-large", shadowSelector, " {margin-right: -3rem;margin-left: -3rem;}.slds-col", shadowSelector, ",[class*=\"slds-col_padded\"]", shadowSelector, ",[class*=\"slds-col--padded\"]", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 auto;flex: 1 1 auto;}@media (min-width: 64em) {.slds-col_rule-top", shadowSelector, " {border-top: 1px solid #f3f3f3;}}@media (min-width: 64em) {.slds-col_rule-right", shadowSelector, " {border-right: 1px solid #f3f3f3;}}@media (min-width: 64em) {.slds-col_rule-bottom", shadowSelector, " {border-bottom: 1px solid #f3f3f3;}}@media (min-width: 64em) {.slds-col_rule-left", shadowSelector, " {border-left: 1px solid #f3f3f3;}}.slds-has-flexi-truncate", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1 1 0%;flex: 1 1 0%;min-width: 0;}.slds-no-flex", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-no-space", shadowSelector, " {min-width: 0;}.slds-grow", shadowSelector, " {-webkit-box-flex: 1;-ms-flex-positive: 1;flex-grow: 1;}.slds-grow-none", shadowSelector, " {-webkit-box-flex: 0;-ms-flex-positive: 0;flex-grow: 0;}.slds-shrink", shadowSelector, " {-ms-flex-negative: 1;flex-shrink: 1;}.slds-shrink-none", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;}.slds-text-longform", shadowSelector, " ul.slds-grid", shadowSelector, " {margin-left: 0;list-style: none;}.slds-grid_align-center", shadowSelector, " {-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;}.slds-grid_align-center", shadowSelector, " .slds-col", shadowSelector, ",.slds-grid_align-center", shadowSelector, " [class*=\"slds-col_padded\"][class*=\"slds-col--padded\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex-positive: 0;flex-grow: 0;}.slds-grid_align-space", shadowSelector, " {-ms-flex-pack: distribute;justify-content: space-around;}.slds-grid_align-space", shadowSelector, " .slds-col", shadowSelector, ",.slds-grid_align-space", shadowSelector, " [class*=\"slds-col_padded\"][class*=\"slds-col--padded\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex-positive: 0;flex-grow: 0;}.slds-grid_align-spread", shadowSelector, " {-webkit-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;}.slds-grid_align-spread", shadowSelector, " .slds-col", shadowSelector, ",.slds-grid_align-spread", shadowSelector, " [class*=\"slds-col_padded\"][class*=\"slds-col--padded\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex-positive: 0;flex-grow: 0;}.slds-grid_align-end", shadowSelector, " {-webkit-box-pack: end;-ms-flex-pack: end;justify-content: flex-end;}.slds-grid_align-end", shadowSelector, " .slds-col", shadowSelector, ",.slds-grid_align-end", shadowSelector, " [class*=\"slds-col_padded\"][class*=\"slds-col--padded\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex-positive: 0;flex-grow: 0;}.slds-grid_vertical-align-start", shadowSelector, " {-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;-ms-flex-line-pack: start;align-content: flex-start;}.slds-grid_vertical-align-center", shadowSelector, " {-webkit-box-align: center;-ms-flex-align: center;align-items: center;-ms-flex-line-pack: center;align-content: center;}.slds-grid_vertical-align-end", shadowSelector, " {-webkit-box-align: end;-ms-flex-align: end;align-items: flex-end;-ms-flex-line-pack: end;align-content: flex-end;}.slds-align-top", shadowSelector, " {vertical-align: top;-ms-flex-item-align: start;align-self: flex-start;}.slds-align-middle", shadowSelector, " {vertical-align: middle;-ms-flex-item-align: center;align-self: center;}.slds-align-bottom", shadowSelector, " {vertical-align: bottom;-ms-flex-item-align: end;align-self: flex-end;}.slds-col_bump-top", shadowSelector, " {margin-top: auto;}.slds-col_bump-right", shadowSelector, " {margin-right: auto;}.slds-col_bump-bottom", shadowSelector, " {margin-bottom: auto;}.slds-col_bump-left", shadowSelector, " {margin-left: auto;}.slds-grid_vertical-stretch", shadowSelector, " {-webkit-box-align: stretch;-ms-flex-align: stretch;align-items: stretch;-ms-flex-line-pack: stretch;align-content: stretch;}.slds-container_small", shadowSelector, " {max-width: 30rem;}.slds-container_medium", shadowSelector, " {max-width: 48rem;}.slds-container_large", shadowSelector, " {max-width: 64rem;}.slds-container_x-large", shadowSelector, " {max-width: 80rem;}.slds-container_fluid", shadowSelector, " {width: 100%;}.slds-container_center", shadowSelector, " {margin-left: auto;margin-right: auto;}.slds-container_left", shadowSelector, " {margin-right: auto;}.slds-container_right", shadowSelector, " {margin-left: auto;}.slds-grid_overflow", shadowSelector, " {-webkit-box-orient: horizontal;-webkit-box-direction: normal;-ms-flex-flow: row nowrap;flex-flow: row nowrap;}.slds-grid_overflow", shadowSelector, " .slds-col", shadowSelector, " {min-width: 11.25em;max-width: 22.5em;}.slds-align_absolute-center", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-pack: center;-ms-flex-pack: center;justify-content: center;-ms-flex-line-pack: center;align-content: center;-webkit-box-align: center;-ms-flex-align: center;align-items: center;margin: auto;}.slds-media", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: start;-ms-flex-align: start;align-items: flex-start;}.slds-media__figure", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;margin-right: 0.75rem;}.slds-media__figure_fixed-width", shadowSelector, " {min-width: 3rem;}.slds-media__body", shadowSelector, " {-webkit-box-flex: 1;-ms-flex: 1;flex: 1;min-width: 0;}.slds-media__body", shadowSelector, ",.slds-media__body", shadowSelector, " > :last-child", shadowSelector, " {margin-bottom: 0;}.slds-media-body-iefix", shadowSelector, " {-ms-flex-negative: 0;flex-shrink: 0;-ms-flex-preferred-size: auto;flex-basis: auto;}.slds-media_small", shadowSelector, " .slds-media__figure", shadowSelector, " {margin-right: 0.25rem;}.slds-media_small", shadowSelector, " .slds-media__figure_reverse", shadowSelector, " {margin-left: 0.25rem;}.slds-media_large", shadowSelector, " .slds-media__figure", shadowSelector, " {margin-right: 1.5rem;}.slds-media_large", shadowSelector, " .slds-media__figure_reverse", shadowSelector, " {margin-left: 1.5rem;}.slds-media_inline", shadowSelector, " .slds-media__body", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: 0 1 auto;flex: 0 1 auto;}.slds-media_center", shadowSelector, " {-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-media__figure_reverse", shadowSelector, " {margin: 0 0 0 0.75rem;}@media (max-width: 48em) {.slds-media_responsive", shadowSelector, " {display: block;}.slds-media_responsive", shadowSelector, " .slds-media__figure", shadowSelector, " {margin: 0 0 0.75rem;}}.slds-m-top_none", shadowSelector, " {margin-top: 0 !important;}.slds-m-top_xxx-small", shadowSelector, " {margin-top: 0.125rem;}.slds-m-top_xx-small", shadowSelector, " {margin-top: 0.25rem;}.slds-m-top_x-small", shadowSelector, " {margin-top: 0.5rem;}.slds-m-top_small", shadowSelector, " {margin-top: 0.75rem;}.slds-m-top_medium", shadowSelector, " {margin-top: 1rem;}.slds-m-top_large", shadowSelector, " {margin-top: 1.5rem;}.slds-m-top_x-large", shadowSelector, " {margin-top: 2rem;}.slds-m-top_xx-large", shadowSelector, " {margin-top: 3rem;}.slds-var-m-top_xxx-small", shadowSelector, " {margin-top: 0.125rem;}.slds-var-m-top_xx-small", shadowSelector, " {margin-top: 0.25rem;}.slds-var-m-top_x-small", shadowSelector, " {margin-top: 0.5rem;}.slds-var-m-top_small", shadowSelector, " {margin-top: 0.75rem;}.slds-var-m-top_medium", shadowSelector, " {margin-top: 1rem;}.slds-var-m-top_large", shadowSelector, " {margin-top: 1.5rem;}.slds-var-m-top_x-large", shadowSelector, " {margin-top: 2rem;}.slds-var-m-top_xx-large", shadowSelector, " {margin-top: 3rem;}.slds-m-right_none", shadowSelector, " {margin-right: 0 !important;}.slds-m-right_xxx-small", shadowSelector, " {margin-right: 0.125rem;}.slds-m-right_xx-small", shadowSelector, " {margin-right: 0.25rem;}.slds-m-right_x-small", shadowSelector, " {margin-right: 0.5rem;}.slds-m-right_small", shadowSelector, " {margin-right: 0.75rem;}.slds-m-right_medium", shadowSelector, " {margin-right: 1rem;}.slds-m-right_large", shadowSelector, " {margin-right: 1.5rem;}.slds-m-right_x-large", shadowSelector, " {margin-right: 2rem;}.slds-m-right_xx-large", shadowSelector, " {margin-right: 3rem;}.slds-var-m-right_xxx-small", shadowSelector, " {margin-right: 0.125rem;}.slds-var-m-right_xx-small", shadowSelector, " {margin-right: 0.25rem;}.slds-var-m-right_x-small", shadowSelector, " {margin-right: 0.5rem;}.slds-var-m-right_small", shadowSelector, " {margin-right: 0.75rem;}.slds-var-m-right_medium", shadowSelector, " {margin-right: 1rem;}.slds-var-m-right_large", shadowSelector, " {margin-right: 1.5rem;}.slds-var-m-right_x-large", shadowSelector, " {margin-right: 2rem;}.slds-var-m-right_xx-large", shadowSelector, " {margin-right: 3rem;}.slds-m-bottom_none", shadowSelector, " {margin-bottom: 0 !important;}.slds-m-bottom_xxx-small", shadowSelector, " {margin-bottom: 0.125rem;}.slds-m-bottom_xx-small", shadowSelector, " {margin-bottom: 0.25rem;}.slds-m-bottom_x-small", shadowSelector, " {margin-bottom: 0.5rem;}.slds-m-bottom_small", shadowSelector, " {margin-bottom: 0.75rem;}.slds-m-bottom_medium", shadowSelector, " {margin-bottom: 1rem;}.slds-m-bottom_large", shadowSelector, " {margin-bottom: 1.5rem;}.slds-m-bottom_x-large", shadowSelector, " {margin-bottom: 2rem;}.slds-m-bottom_xx-large", shadowSelector, " {margin-bottom: 3rem;}.slds-var-m-bottom_xxx-small", shadowSelector, " {margin-bottom: 0.125rem;}.slds-var-m-bottom_xx-small", shadowSelector, " {margin-bottom: 0.25rem;}.slds-var-m-bottom_x-small", shadowSelector, " {margin-bottom: 0.5rem;}.slds-var-m-bottom_small", shadowSelector, " {margin-bottom: 0.75rem;}.slds-var-m-bottom_medium", shadowSelector, " {margin-bottom: 1rem;}.slds-var-m-bottom_large", shadowSelector, " {margin-bottom: 1.5rem;}.slds-var-m-bottom_x-large", shadowSelector, " {margin-bottom: 2rem;}.slds-var-m-bottom_xx-large", shadowSelector, " {margin-bottom: 3rem;}.slds-m-left_none", shadowSelector, " {margin-left: 0 !important;}.slds-m-left_xxx-small", shadowSelector, " {margin-left: 0.125rem;}.slds-m-left_xx-small", shadowSelector, " {margin-left: 0.25rem;}.slds-m-left_x-small", shadowSelector, " {margin-left: 0.5rem;}.slds-m-left_small", shadowSelector, " {margin-left: 0.75rem;}.slds-m-left_medium", shadowSelector, " {margin-left: 1rem;}.slds-m-left_large", shadowSelector, " {margin-left: 1.5rem;}.slds-m-left_x-large", shadowSelector, " {margin-left: 2rem;}.slds-m-left_xx-large", shadowSelector, " {margin-left: 3rem;}.slds-var-m-left_xxx-small", shadowSelector, " {margin-left: 0.125rem;}.slds-var-m-left_xx-small", shadowSelector, " {margin-left: 0.25rem;}.slds-var-m-left_x-small", shadowSelector, " {margin-left: 0.5rem;}.slds-var-m-left_small", shadowSelector, " {margin-left: 0.75rem;}.slds-var-m-left_medium", shadowSelector, " {margin-left: 1rem;}.slds-var-m-left_large", shadowSelector, " {margin-left: 1.5rem;}.slds-var-m-left_x-large", shadowSelector, " {margin-left: 2rem;}.slds-var-m-left_xx-large", shadowSelector, " {margin-left: 3rem;}.slds-m-horizontal_none", shadowSelector, " {margin-left: 0 !important;margin-right: 0 !important;}.slds-m-horizontal_xxx-small", shadowSelector, " {margin-left: 0.125rem;margin-right: 0.125rem;}.slds-m-horizontal_xx-small", shadowSelector, " {margin-left: 0.25rem;margin-right: 0.25rem;}.slds-m-horizontal_x-small", shadowSelector, " {margin-left: 0.5rem;margin-right: 0.5rem;}.slds-m-horizontal_small", shadowSelector, " {margin-left: 0.75rem;margin-right: 0.75rem;}.slds-m-horizontal_medium", shadowSelector, " {margin-left: 1rem;margin-right: 1rem;}.slds-m-horizontal_large", shadowSelector, " {margin-left: 1.5rem;margin-right: 1.5rem;}.slds-m-horizontal_x-large", shadowSelector, " {margin-left: 2rem;margin-right: 2rem;}.slds-m-horizontal_xx-large", shadowSelector, " {margin-left: 3rem;margin-right: 3rem;}.slds-var-m-horizontal_xxx-small", shadowSelector, " {margin-left: 0.125rem;margin-right: 0.125rem;}.slds-var-m-horizontal_xx-small", shadowSelector, " {margin-left: 0.25rem;margin-right: 0.25rem;}.slds-var-m-horizontal_x-small", shadowSelector, " {margin-left: 0.5rem;margin-right: 0.5rem;}.slds-var-m-horizontal_small", shadowSelector, " {margin-left: 0.75rem;margin-right: 0.75rem;}.slds-var-m-horizontal_medium", shadowSelector, " {margin-left: 1rem;margin-right: 1rem;}.slds-var-m-horizontal_large", shadowSelector, " {margin-left: 1.5rem;margin-right: 1.5rem;}.slds-var-m-horizontal_x-large", shadowSelector, " {margin-left: 2rem;margin-right: 2rem;}.slds-var-m-horizontal_xx-large", shadowSelector, " {margin-left: 3rem;margin-right: 3rem;}.slds-m-vertical_none", shadowSelector, " {margin-top: 0 !important;margin-bottom: 0 !important;}.slds-m-vertical_xxx-small", shadowSelector, " {margin-top: 0.125rem;margin-bottom: 0.125rem;}.slds-m-vertical_xx-small", shadowSelector, " {margin-top: 0.25rem;margin-bottom: 0.25rem;}.slds-m-vertical_x-small", shadowSelector, " {margin-top: 0.5rem;margin-bottom: 0.5rem;}.slds-m-vertical_small", shadowSelector, " {margin-top: 0.75rem;margin-bottom: 0.75rem;}.slds-m-vertical_medium", shadowSelector, " {margin-top: 1rem;margin-bottom: 1rem;}.slds-m-vertical_large", shadowSelector, " {margin-top: 1.5rem;margin-bottom: 1.5rem;}.slds-m-vertical_x-large", shadowSelector, " {margin-top: 2rem;margin-bottom: 2rem;}.slds-m-vertical_xx-large", shadowSelector, " {margin-top: 3rem;margin-bottom: 3rem;}.slds-var-m-vertical_xxx-small", shadowSelector, " {margin-top: 0.125rem;margin-bottom: 0.125rem;}.slds-var-m-vertical_xx-small", shadowSelector, " {margin-top: 0.25rem;margin-bottom: 0.25rem;}.slds-var-m-vertical_x-small", shadowSelector, " {margin-top: 0.5rem;margin-bottom: 0.5rem;}.slds-var-m-vertical_small", shadowSelector, " {margin-top: 0.75rem;margin-bottom: 0.75rem;}.slds-var-m-vertical_medium", shadowSelector, " {margin-top: 1rem;margin-bottom: 1rem;}.slds-var-m-vertical_large", shadowSelector, " {margin-top: 1.5rem;margin-bottom: 1.5rem;}.slds-var-m-vertical_x-large", shadowSelector, " {margin-top: 2rem;margin-bottom: 2rem;}.slds-var-m-vertical_xx-large", shadowSelector, " {margin-top: 3rem;margin-bottom: 3rem;}.slds-m-around_none", shadowSelector, " {margin: 0 !important;}.slds-m-around_xxx-small", shadowSelector, " {margin: 0.125rem;}.slds-m-around_xx-small", shadowSelector, " {margin: 0.25rem;}.slds-m-around_x-small", shadowSelector, " {margin: 0.5rem;}.slds-m-around_small", shadowSelector, " {margin: 0.75rem;}.slds-m-around_medium", shadowSelector, " {margin: 1rem;}.slds-m-around_large", shadowSelector, " {margin: 1.5rem;}.slds-m-around_x-large", shadowSelector, " {margin: 2rem;}.slds-m-around_xx-large", shadowSelector, " {margin: 3rem;}.slds-var-m-around_xxx-small", shadowSelector, " {margin: 0.125rem;}.slds-var-m-around_xx-small", shadowSelector, " {margin: 0.25rem;}.slds-var-m-around_x-small", shadowSelector, " {margin: 0.5rem;}.slds-var-m-around_small", shadowSelector, " {margin: 0.75rem;}.slds-var-m-around_medium", shadowSelector, " {margin: 1rem;}.slds-var-m-around_large", shadowSelector, " {margin: 1.5rem;}.slds-var-m-around_x-large", shadowSelector, " {margin: 2rem;}.slds-var-m-around_xx-large", shadowSelector, " {margin: 3rem;}.slds-has-cushion", shadowSelector, " {padding: 1rem;}.slds-p-top_none", shadowSelector, " {padding-top: 0 !important;}.slds-p-top_xxx-small", shadowSelector, " {padding-top: 0.125rem;}.slds-p-top_xx-small", shadowSelector, " {padding-top: 0.25rem;}.slds-p-top_x-small", shadowSelector, " {padding-top: 0.5rem;}.slds-p-top_small", shadowSelector, " {padding-top: 0.75rem;}.slds-p-top_medium", shadowSelector, " {padding-top: 1rem;}.slds-p-top_large", shadowSelector, " {padding-top: 1.5rem;}.slds-p-top_x-large", shadowSelector, " {padding-top: 2rem;}.slds-p-top_xx-large", shadowSelector, " {padding-top: 3rem;}.slds-var-p-top_xxx-small", shadowSelector, " {padding-top: 0.125rem;}.slds-var-p-top_xx-small", shadowSelector, " {padding-top: 0.25rem;}.slds-var-p-top_x-small", shadowSelector, " {padding-top: 0.5rem;}.slds-var-p-top_small", shadowSelector, " {padding-top: 0.75rem;}.slds-var-p-top_medium", shadowSelector, " {padding-top: 1rem;}.slds-var-p-top_large", shadowSelector, " {padding-top: 1.5rem;}.slds-var-p-top_x-large", shadowSelector, " {padding-top: 2rem;}.slds-var-p-top_xx-large", shadowSelector, " {padding-top: 3rem;}.slds-p-right_none", shadowSelector, " {padding-right: 0 !important;}.slds-p-right_xxx-small", shadowSelector, " {padding-right: 0.125rem;}.slds-p-right_xx-small", shadowSelector, " {padding-right: 0.25rem;}.slds-p-right_x-small", shadowSelector, " {padding-right: 0.5rem;}.slds-p-right_small", shadowSelector, " {padding-right: 0.75rem;}.slds-p-right_medium", shadowSelector, " {padding-right: 1rem;}.slds-p-right_large", shadowSelector, " {padding-right: 1.5rem;}.slds-p-right_x-large", shadowSelector, " {padding-right: 2rem;}.slds-p-right_xx-large", shadowSelector, " {padding-right: 3rem;}.slds-var-p-right_xxx-small", shadowSelector, " {padding-right: 0.125rem;}.slds-var-p-right_xx-small", shadowSelector, " {padding-right: 0.25rem;}.slds-var-p-right_x-small", shadowSelector, " {padding-right: 0.5rem;}.slds-var-p-right_small", shadowSelector, " {padding-right: 0.75rem;}.slds-var-p-right_medium", shadowSelector, " {padding-right: 1rem;}.slds-var-p-right_large", shadowSelector, " {padding-right: 1.5rem;}.slds-var-p-right_x-large", shadowSelector, " {padding-right: 2rem;}.slds-var-p-right_xx-large", shadowSelector, " {padding-right: 3rem;}.slds-p-bottom_none", shadowSelector, " {padding-bottom: 0 !important;}.slds-p-bottom_xxx-small", shadowSelector, " {padding-bottom: 0.125rem;}.slds-p-bottom_xx-small", shadowSelector, " {padding-bottom: 0.25rem;}.slds-p-bottom_x-small", shadowSelector, " {padding-bottom: 0.5rem;}.slds-p-bottom_small", shadowSelector, " {padding-bottom: 0.75rem;}.slds-p-bottom_medium", shadowSelector, " {padding-bottom: 1rem;}.slds-p-bottom_large", shadowSelector, " {padding-bottom: 1.5rem;}.slds-p-bottom_x-large", shadowSelector, " {padding-bottom: 2rem;}.slds-p-bottom_xx-large", shadowSelector, " {padding-bottom: 3rem;}.slds-var-p-bottom_xxx-small", shadowSelector, " {padding-bottom: 0.125rem;}.slds-var-p-bottom_xx-small", shadowSelector, " {padding-bottom: 0.25rem;}.slds-var-p-bottom_x-small", shadowSelector, " {padding-bottom: 0.5rem;}.slds-var-p-bottom_small", shadowSelector, " {padding-bottom: 0.75rem;}.slds-var-p-bottom_medium", shadowSelector, " {padding-bottom: 1rem;}.slds-var-p-bottom_large", shadowSelector, " {padding-bottom: 1.5rem;}.slds-var-p-bottom_x-large", shadowSelector, " {padding-bottom: 2rem;}.slds-var-p-bottom_xx-large", shadowSelector, " {padding-bottom: 3rem;}.slds-p-left_none", shadowSelector, " {padding-left: 0 !important;}.slds-p-left_xxx-small", shadowSelector, " {padding-left: 0.125rem;}.slds-p-left_xx-small", shadowSelector, " {padding-left: 0.25rem;}.slds-p-left_x-small", shadowSelector, " {padding-left: 0.5rem;}.slds-p-left_small", shadowSelector, " {padding-left: 0.75rem;}.slds-p-left_medium", shadowSelector, " {padding-left: 1rem;}.slds-p-left_large", shadowSelector, " {padding-left: 1.5rem;}.slds-p-left_x-large", shadowSelector, " {padding-left: 2rem;}.slds-p-left_xx-large", shadowSelector, " {padding-left: 3rem;}.slds-var-p-left_xxx-small", shadowSelector, " {padding-left: 0.125rem;}.slds-var-p-left_xx-small", shadowSelector, " {padding-left: 0.25rem;}.slds-var-p-left_x-small", shadowSelector, " {padding-left: 0.5rem;}.slds-var-p-left_small", shadowSelector, " {padding-left: 0.75rem;}.slds-var-p-left_medium", shadowSelector, " {padding-left: 1rem;}.slds-var-p-left_large", shadowSelector, " {padding-left: 1.5rem;}.slds-var-p-left_x-large", shadowSelector, " {padding-left: 2rem;}.slds-var-p-left_xx-large", shadowSelector, " {padding-left: 3rem;}.slds-p-horizontal_none", shadowSelector, " {padding-left: 0 !important;padding-right: 0 !important;}.slds-p-horizontal_xxx-small", shadowSelector, " {padding-left: 0.125rem;padding-right: 0.125rem;}.slds-p-horizontal_xx-small", shadowSelector, " {padding-left: 0.25rem;padding-right: 0.25rem;}.slds-p-horizontal_x-small", shadowSelector, " {padding-left: 0.5rem;padding-right: 0.5rem;}.slds-p-horizontal_small", shadowSelector, " {padding-left: 0.75rem;padding-right: 0.75rem;}.slds-p-horizontal_medium", shadowSelector, " {padding-left: 1rem;padding-right: 1rem;}.slds-p-horizontal_large", shadowSelector, " {padding-left: 1.5rem;padding-right: 1.5rem;}.slds-p-horizontal_x-large", shadowSelector, " {padding-left: 2rem;padding-right: 2rem;}.slds-p-horizontal_xx-large", shadowSelector, " {padding-left: 3rem;padding-right: 3rem;}.slds-var-p-horizontal_xxx-small", shadowSelector, " {padding-left: 0.125rem;padding-right: 0.125rem;}.slds-var-p-horizontal_xx-small", shadowSelector, " {padding-left: 0.25rem;padding-right: 0.25rem;}.slds-var-p-horizontal_x-small", shadowSelector, " {padding-left: 0.5rem;padding-right: 0.5rem;}.slds-var-p-horizontal_small", shadowSelector, " {padding-left: 0.75rem;padding-right: 0.75rem;}.slds-var-p-horizontal_medium", shadowSelector, " {padding-left: 1rem;padding-right: 1rem;}.slds-var-p-horizontal_large", shadowSelector, " {padding-left: 1.5rem;padding-right: 1.5rem;}.slds-var-p-horizontal_x-large", shadowSelector, " {padding-left: 2rem;padding-right: 2rem;}.slds-var-p-horizontal_xx-large", shadowSelector, " {padding-left: 3rem;padding-right: 3rem;}.slds-p-vertical_none", shadowSelector, " {padding-top: 0 !important;padding-bottom: 0 !important;}.slds-p-vertical_xxx-small", shadowSelector, " {padding-top: 0.125rem;padding-bottom: 0.125rem;}.slds-p-vertical_xx-small", shadowSelector, " {padding-top: 0.25rem;padding-bottom: 0.25rem;}.slds-p-vertical_x-small", shadowSelector, " {padding-top: 0.5rem;padding-bottom: 0.5rem;}.slds-p-vertical_small", shadowSelector, " {padding-top: 0.75rem;padding-bottom: 0.75rem;}.slds-p-vertical_medium", shadowSelector, " {padding-top: 1rem;padding-bottom: 1rem;}.slds-p-vertical_large", shadowSelector, " {padding-top: 1.5rem;padding-bottom: 1.5rem;}.slds-p-vertical_x-large", shadowSelector, " {padding-top: 2rem;padding-bottom: 2rem;}.slds-p-vertical_xx-large", shadowSelector, " {padding-top: 3rem;padding-bottom: 3rem;}.slds-var-p-vertical_xxx-small", shadowSelector, " {padding-top: 0.125rem;padding-bottom: 0.125rem;}.slds-var-p-vertical_xx-small", shadowSelector, " {padding-top: 0.25rem;padding-bottom: 0.25rem;}.slds-var-p-vertical_x-small", shadowSelector, " {padding-top: 0.5rem;padding-bottom: 0.5rem;}.slds-var-p-vertical_small", shadowSelector, " {padding-top: 0.75rem;padding-bottom: 0.75rem;}.slds-var-p-vertical_medium", shadowSelector, " {padding-top: 1rem;padding-bottom: 1rem;}.slds-var-p-vertical_large", shadowSelector, " {padding-top: 1.5rem;padding-bottom: 1.5rem;}.slds-var-p-vertical_x-large", shadowSelector, " {padding-top: 2rem;padding-bottom: 2rem;}.slds-var-p-vertical_xx-large", shadowSelector, " {padding-top: 3rem;padding-bottom: 3rem;}.slds-p-around_none", shadowSelector, " {padding: 0 !important;}.slds-p-around_xxx-small", shadowSelector, " {padding: 0.125rem;}.slds-p-around_xx-small", shadowSelector, " {padding: 0.25rem;}.slds-p-around_x-small", shadowSelector, " {padding: 0.5rem;}.slds-p-around_small", shadowSelector, " {padding: 0.75rem;}.slds-p-around_medium", shadowSelector, " {padding: 1rem;}.slds-p-around_large", shadowSelector, " {padding: 1.5rem;}.slds-p-around_x-large", shadowSelector, " {padding: 2rem;}.slds-p-around_xx-large", shadowSelector, " {padding: 3rem;}.slds-var-p-around_xxx-small", shadowSelector, " {padding: 0.125rem;}.slds-var-p-around_xx-small", shadowSelector, " {padding: 0.25rem;}.slds-var-p-around_x-small", shadowSelector, " {padding: 0.5rem;}.slds-var-p-around_small", shadowSelector, " {padding: 0.75rem;}.slds-var-p-around_medium", shadowSelector, " {padding: 1rem;}.slds-var-p-around_large", shadowSelector, " {padding: 1.5rem;}.slds-var-p-around_x-large", shadowSelector, " {padding: 2rem;}.slds-var-p-around_xx-large", shadowSelector, " {padding: 3rem;}.slds-clearfix", shadowSelector, ":after {content: \"\";display: table;clear: both;}.slds-clear", shadowSelector, " {clear: both;}.slds-float_left", shadowSelector, " {float: left;}.slds-float_none", shadowSelector, " {float: none;}.slds-float_right", shadowSelector, " {float: right;}.slds-text-link_reset", shadowSelector, " {cursor: pointer;line-height: inherit;font-size: inherit;}.slds-text-link_reset:active", shadowSelector, " {outline: none;}.slds-text-link_reset", shadowSelector, ",.slds-text-link_reset:active", shadowSelector, ",.slds-text-link_reset:focus", shadowSelector, ",.slds-text-link_reset:hover", shadowSelector, " {color: inherit;text-decoration: inherit;}.slds-text-link", shadowSelector, " {color: #0176d3;text-decoration: none;-webkit-transition: color 0.1s linear;transition: color 0.1s linear;}.slds-text-link:hover", shadowSelector, ",.slds-text-link:focus", shadowSelector, " {text-decoration: underline;color: #014486;}.slds-text-link:active", shadowSelector, " {color: #014486;}.slds-text-link_faux", shadowSelector, ",.slds-type-focus", shadowSelector, " {border-bottom: 1px solid transparent;border-radius: 0;color: currentColor;cursor: pointer;}.slds-text-link_faux:hover", shadowSelector, ",.slds-text-link_faux:focus", shadowSelector, ",.slds-type-focus:hover", shadowSelector, ",.slds-type-focus:focus", shadowSelector, " {color: currentColor;border-bottom: 1px solid currentColor;}.slds-has-blur-focus", shadowSelector, " {color: currentColor;}.slds-has-blur-focus:hover", shadowSelector, ",.slds-has-blur-focus:focus", shadowSelector, ",.slds-has-blur-focus:active", shadowSelector, " {color: currentColor;text-decoration: none;}.slds-has-blur-focus:focus", shadowSelector, " {outline: 0;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;}.slds-has-input-focus", shadowSelector, " {outline: 0;border-color: #1b96ff;background-color: white;-webkit-box-shadow: 0 0 3px #0176d3;box-shadow: 0 0 3px #0176d3;}.slds-has-block-links", shadowSelector, " a", shadowSelector, " {display: block;text-decoration: none;}.slds-has-block-links", shadowSelector, " .slds-is-nested", shadowSelector, " {margin-left: 1rem;}.slds-has-block-links_space", shadowSelector, " .slds-list__item", shadowSelector, ",.slds-has-block-links_space", shadowSelector, " .slds-item", shadowSelector, " {padding: 0;}.slds-has-block-links_space", shadowSelector, " a", shadowSelector, " {display: block;text-decoration: none;padding: 0.75rem;}@media (min-width: 48em) {.slds-has-block-links_space", shadowSelector, " a", shadowSelector, " {padding: 0.5rem;}}.slds-has-inline-block-links", shadowSelector, " a", shadowSelector, " {display: inline-block;text-decoration: none;}.slds-has-inline-block-links_space", shadowSelector, " a", shadowSelector, " {display: inline-block;text-decoration: none;padding: 0.75rem;}@media (min-width: 48em) {.slds-has-inline-block-links_space", shadowSelector, " a", shadowSelector, " {padding: 0.5rem;}}.slds-list_vertical-space", shadowSelector, " .slds-list__item", shadowSelector, " + .slds-list__item", shadowSelector, ",.slds-list_vertical-space", shadowSelector, " .slds-item", shadowSelector, " + .slds-item", shadowSelector, " {margin-top: 0.5rem;}.slds-list_vertical-space-medium", shadowSelector, " .slds-list__item", shadowSelector, " + .slds-list__item", shadowSelector, ",.slds-list_vertical-space-medium", shadowSelector, " .slds-item", shadowSelector, " + .slds-item", shadowSelector, " {margin-top: 1rem;}.slds-is-nested", shadowSelector, " {margin-left: 1rem;}.slds-list_dotted", shadowSelector, " {margin-left: 1.5rem;list-style: disc;}.slds-list_ordered", shadowSelector, " {margin-left: 1.5rem;list-style: decimal;}.slds-has-dividers_top", shadowSelector, " {}.slds-has-dividers_top", shadowSelector, " > .slds-list__item", shadowSelector, ",.slds-has-dividers_top", shadowSelector, " > .slds-item", shadowSelector, " {border-top: 1px solid #e5e5e5;}.slds-has-dividers_top-space", shadowSelector, " > .slds-list__item", shadowSelector, ",.slds-has-dividers_top-space", shadowSelector, " > .slds-item", shadowSelector, " {border-top: 1px solid #e5e5e5;padding: 0.75rem;}@media (min-width: 30em) {.slds-has-dividers_top-space", shadowSelector, " > .slds-list__item", shadowSelector, ", .slds-has-dividers_top-space", shadowSelector, " > .slds-item", shadowSelector, " {padding: 0.5rem;}}.slds-has-dividers_bottom", shadowSelector, " {}.slds-has-dividers_bottom", shadowSelector, " > .slds-list__item", shadowSelector, ",.slds-has-dividers_bottom", shadowSelector, " > .slds-item", shadowSelector, " {border-bottom: 1px solid #e5e5e5;}.slds-has-dividers_bottom-space", shadowSelector, " > .slds-list__item", shadowSelector, ",.slds-has-dividers_bottom-space", shadowSelector, " > .slds-item", shadowSelector, " {border-bottom: 1px solid #e5e5e5;padding: 0.75rem;}@media (min-width: 30em) {.slds-has-dividers_bottom-space", shadowSelector, " > .slds-list__item", shadowSelector, ", .slds-has-dividers_bottom-space", shadowSelector, " > .slds-item", shadowSelector, " {padding: 0.5rem;}}.slds-has-dividers_around", shadowSelector, " {}.slds-has-dividers_around", shadowSelector, " > .slds-item", shadowSelector, " {border: 1px solid #e5e5e5;border-radius: 0.25rem;background-clip: padding-box;}.slds-has-dividers_around", shadowSelector, " > .slds-item", shadowSelector, " + .slds-item", shadowSelector, " {margin-top: 0.5rem;}.slds-has-dividers_around-space", shadowSelector, " > .slds-item", shadowSelector, " {border: 1px solid #e5e5e5;border-radius: 0.25rem;background-clip: padding-box;padding: 0.75rem;}@media (min-width: 30em) {.slds-has-dividers_around-space", shadowSelector, " > .slds-item", shadowSelector, " {padding: 0.5rem;}}.slds-has-dividers_around-space", shadowSelector, " > .slds-item", shadowSelector, " + .slds-item", shadowSelector, " {margin-top: 0.5rem;}.slds-has-list-interactions", shadowSelector, " > .slds-list__item:hover", shadowSelector, ",.slds-has-list-interactions", shadowSelector, " > .slds-item:hover", shadowSelector, " {background-color: #f3f3f3;border-color: #e5e5e5;cursor: pointer;}.slds-has-list-interactions", shadowSelector, " > .slds-list__item:active", shadowSelector, ",.slds-has-list-interactions", shadowSelector, " > .slds-item:active", shadowSelector, " {background-color: #f3f3f3;-webkit-box-shadow: #e5e5e5 0 -1px 0 inset;box-shadow: #e5e5e5 0 -1px 0 inset;}.slds-has-list-interactions", shadowSelector, " > .slds-list__item.slds-is-selected", shadowSelector, ",.slds-has-list-interactions", shadowSelector, " > .slds-item.slds-is-selected", shadowSelector, " {-webkit-box-shadow: #0176d3 0 0 0 1px inset;box-shadow: #0176d3 0 0 0 1px inset;background-color: #f3f3f3;}.slds-has-list-interactions", shadowSelector, " > .slds-list__item.slds-is-selected:hover", shadowSelector, ",.slds-has-list-interactions", shadowSelector, " > .slds-list__item.slds-is-selected:focus", shadowSelector, ",.slds-has-list-interactions", shadowSelector, " > .slds-item.slds-is-selected:hover", shadowSelector, ",.slds-has-list-interactions", shadowSelector, " > .slds-item.slds-is-selected:focus", shadowSelector, " {-webkit-box-shadow: #1b96ff 0 -2px 0 inset, #1b96ff 0 0 0 1px inset;box-shadow: #1b96ff 0 -2px 0 inset, #1b96ff 0 0 0 1px inset;}.slds-has-divider_top", shadowSelector, " {border-top: 1px solid #e5e5e5;}.slds-has-divider_top-space", shadowSelector, " {border-top: 1px solid #e5e5e5;margin-top: 0.5rem;padding-top: 0.5rem;}.slds-has-divider_right", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-has-divider_right", shadowSelector, ":after {width: 2px;height: 2px;content: \"\";margin-left: 0.5rem;margin-right: 0.5rem;border-radius: 50%;background-color: #032d60;}.slds-has-divider_right:last-child", shadowSelector, " {margin-right: 0;padding-right: 0;}.slds-has-divider_right:last-child", shadowSelector, ":after {content: none;}.slds-has-divider_bottom", shadowSelector, " {border-bottom: 1px solid #e5e5e5;}.slds-has-divider_bottom-space", shadowSelector, " {border-bottom: 1px solid #e5e5e5;margin-bottom: 0.5rem;padding-bottom: 0.5rem;}.slds-has-divider_left", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-has-divider_left", shadowSelector, ":before {width: 2px;height: 2px;content: \"\";display: inline-block;vertical-align: middle;margin-left: 0.5rem;margin-right: 0.5rem;border-radius: 50%;background-color: #032d60;}.slds-has-divider_left:first-child", shadowSelector, " {margin-right: 0;padding-right: 0;}.slds-has-divider_left:first-child", shadowSelector, ":before {content: none;}.slds-list_horizontal", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;}.slds-list_horizontal", shadowSelector, " > .slds-list__item", shadowSelector, " {-ms-flex-item-align: center;align-self: center;}.slds-list_horizontal-large", shadowSelector, " > .slds-list__item", shadowSelector, " > a", shadowSelector, ",.slds-list_horizontal-large", shadowSelector, " > .slds-item", shadowSelector, " > a", shadowSelector, " {padding: 0.75rem 1rem;}.slds-has-dividers_left", shadowSelector, " > .slds-list__item", shadowSelector, ",.slds-has-dividers_left", shadowSelector, " > .slds-item", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-has-dividers_left", shadowSelector, " > .slds-list__item", shadowSelector, ":before,.slds-has-dividers_left", shadowSelector, " > .slds-item", shadowSelector, ":before {width: 2px;height: 2px;content: \"\";display: inline-block;vertical-align: middle;margin-left: 0.5rem;margin-right: 0.5rem;border-radius: 50%;background-color: #032d60;}.slds-has-dividers_left", shadowSelector, " > .slds-list__item:first-child", shadowSelector, ",.slds-has-dividers_left", shadowSelector, " > .slds-item:first-child", shadowSelector, " {margin-right: 0;padding-right: 0;}.slds-has-dividers_left", shadowSelector, " > .slds-list__item:first-child", shadowSelector, ":before,.slds-has-dividers_left", shadowSelector, " > .slds-item:first-child", shadowSelector, ":before {content: none;}.slds-has-dividers_right", shadowSelector, " > .slds-list__item", shadowSelector, ",.slds-has-dividers_right", shadowSelector, " > .slds-item", shadowSelector, " {position: relative;display: -webkit-box;display: -ms-flexbox;display: flex;-webkit-box-align: center;-ms-flex-align: center;align-items: center;}.slds-has-dividers_right", shadowSelector, " > .slds-list__item", shadowSelector, ":after,.slds-has-dividers_right", shadowSelector, " > .slds-item", shadowSelector, ":after {width: 2px;height: 2px;content: \"\";margin-left: 0.5rem;margin-right: 0.5rem;border-radius: 50%;background-color: #032d60;}.slds-has-dividers_right", shadowSelector, " > .slds-list__item:last-child", shadowSelector, ",.slds-has-dividers_right", shadowSelector, " > .slds-item:last-child", shadowSelector, " {margin-right: 0;padding-right: 0;}.slds-has-dividers_right", shadowSelector, " > .slds-list__item:last-child", shadowSelector, ":after,.slds-has-dividers_right", shadowSelector, " > .slds-item:last-child", shadowSelector, ":after {content: none;}.slds-dl_inline", shadowSelector, ":after {content: \"\";display: table;clear: both;}@media (min-width: 30em) {.slds-dl_inline__label", shadowSelector, " {float: left;clear: left;}.slds-dl_inline__detail", shadowSelector, " {float: left;padding-left: 0.25rem;}}.slds-region_narrow", shadowSelector, " .slds-dl_inline__label", shadowSelector, ",.slds-region_narrow", shadowSelector, " .slds-dl_inline__detail", shadowSelector, " {float: left;}.slds-region_narrow", shadowSelector, " .slds-dl_inline__label", shadowSelector, " {clear: left;}.slds-region_narrow", shadowSelector, " .slds-dl_inline__detail", shadowSelector, " {padding-left: 0.25rem;}@media (min-width: 30em) {.slds-dl_horizontal", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;}.slds-dl_horizontal__label", shadowSelector, " {width: 30%;padding-right: 0.75rem;}.slds-dl_horizontal__detail", shadowSelector, " {width: 70%;}}.slds-region_narrow", shadowSelector, " .slds-dl_horizontal", shadowSelector, " {display: -webkit-box;display: -ms-flexbox;display: flex;-ms-flex-wrap: wrap;flex-wrap: wrap;}.slds-region_narrow", shadowSelector, " .slds-dl_horizontal", shadowSelector, " .slds-dl_horizontal__label", shadowSelector, " {width: 30%;padding-right: 0.75rem;}.slds-region_narrow", shadowSelector, " .slds-dl_horizontal", shadowSelector, " .slds-dl_horizontal__detail", shadowSelector, " {width: 70%;}.slds-list_horizontal", shadowSelector, " {}.slds-list_horizontal", shadowSelector, " .slds-item_label", shadowSelector, " {width: 30%;padding-right: 0.75rem;}.slds-list_horizontal", shadowSelector, " .slds-item_detail", shadowSelector, " {width: 70%;}.slds-list_vertical", shadowSelector, " .slds-item_label", shadowSelector, ",.slds-list_vertical", shadowSelector, " .slds-item_detail", shadowSelector, " {display: block;}.slds-list_inline", shadowSelector, " {display: -webkit-inline-box;display: -ms-inline-flexbox;display: inline-flex;max-width: 100%;}.slds-list_inline", shadowSelector, " .slds-item_label", shadowSelector, " {max-width: 180px;padding-right: 0.75rem;-ms-flex-negative: 0;flex-shrink: 0;}.slds-list_inline", shadowSelector, " .slds-item_label", shadowSelector, " ~ .slds-item_label", shadowSelector, " {padding-left: 1rem;}.slds-list_inline", shadowSelector, " .slds-item_detail", shadowSelector, " {min-width: 0;}.slds-border_bottom", shadowSelector, " {border-bottom: 1px solid #e5e5e5;}.slds-border_left", shadowSelector, " {border-left: 1px solid #e5e5e5;}.slds-border_right", shadowSelector, " {border-right: 1px solid #e5e5e5;}.slds-border_top", shadowSelector, " {border-top: 1px solid #e5e5e5;}.slds-truncate", shadowSelector, " {max-width: 100%;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}.slds-truncate_container_25", shadowSelector, " {max-width: 25%;}.slds-truncate_container_50", shadowSelector, " {max-width: 50%;}.slds-truncate_container_75", shadowSelector, " {max-width: 75%;}.slds-truncate_container_33", shadowSelector, " {max-width: 33%;}.slds-truncate_container_66", shadowSelector, " {max-width: 66%;}.slds-hyphenate", shadowSelector, " {overflow-wrap: break-word;word-wrap: break-word;-webkit-hyphens: auto;-ms-hyphens: auto;hyphens: auto;}.slds-box", shadowSelector, " {padding: 1rem;border-radius: 0.25rem;border: 1px solid #e5e5e5;}.slds-box_xx-small", shadowSelector, " {padding: 0.25rem;}.slds-box_x-small", shadowSelector, " {padding: 0.5rem;}.slds-box_small", shadowSelector, " {padding: 0.75rem;}.slds-box_border", shadowSelector, " {padding: 0;border-radius: 0.25rem;border: 1px solid #e5e5e5;}.slds-box_link", shadowSelector, ",.slds-box_link:active", shadowSelector, ",.slds-box_link:focus", shadowSelector, ",.slds-box_link:hover", shadowSelector, " {color: inherit;text-decoration: inherit;}.slds-box_link:hover", shadowSelector, ",.slds-box_link:focus", shadowSelector, " {cursor: pointer;outline: 0;border: 1px solid #1b96ff;-webkit-box-shadow: 0 0 0 1px #1b96ff inset;box-shadow: 0 0 0 1px #1b96ff inset;}.slds-theme", shadowSelector, " {}.slds-theme_default", shadowSelector, " {background-color: white;color: #181818;}.slds-theme_shade", shadowSelector, " {background-color: #f3f3f3;}.slds-theme_inverse", shadowSelector, " {color: white;background-color: #001639;border-color: #001639;}.slds-theme--inverse", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--inverse", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--inverse", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--inverse", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--inverse", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-theme_alt-inverse", shadowSelector, " {color: white;background-color: #032d60;border-color: #032d60;}.slds-theme--alt-inverse", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--alt-inverse", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--alt-inverse", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--alt-inverse", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--alt-inverse", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-theme_success", shadowSelector, " {color: white;background-color: #2e844a;}.slds-theme--success", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--success", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--success", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--success", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--success", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-theme_info", shadowSelector, " {color: white;background-color: #747474;}.slds-theme--info", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--info", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--info", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--info", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--info", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-theme_warning", shadowSelector, " {background-color: #fe9339;color: #181818;}.slds-theme_warning", shadowSelector, " a", shadowSelector, " {color: #181818;text-decoration: underline;}.slds-theme_warning", shadowSelector, " a:link", shadowSelector, ",.slds-theme_warning", shadowSelector, " a:visited", shadowSelector, " {color: #181818;}.slds-theme_warning", shadowSelector, " a:hover", shadowSelector, ",.slds-theme_warning", shadowSelector, " a:focus", shadowSelector, " {text-decoration: none;}.slds-theme_warning", shadowSelector, " a:focus", shadowSelector, " {-webkit-box-shadow: 0 0 3px #514f4d;box-shadow: 0 0 3px #514f4d;border: 1px solid #514f4d;}.slds-theme_warning", shadowSelector, " a:active", shadowSelector, " {color: #514f4d;}.slds-theme_warning", shadowSelector, " a[disabled]a[disabled]", shadowSelector, " {color: #514f4d;}.slds-theme_warning", shadowSelector, " button", shadowSelector, " {color: #514f4d;text-decoration: underline;}.slds-theme_warning", shadowSelector, " button:hover", shadowSelector, " {color: #706e6b;}.slds-theme_warning", shadowSelector, " button:focus", shadowSelector, " {color: #514f4d;-webkit-box-shadow: 0 0 3px #514f4d;box-shadow: 0 0 3px #514f4d;border: 1px solid #514f4d;}.slds-theme_warning", shadowSelector, " button:active", shadowSelector, " {color: #706e6b;}.slds-theme_warning", shadowSelector, " .slds-icon", shadowSelector, ",.slds-theme_warning", shadowSelector, " .slds-button__icon", shadowSelector, " {fill: #514f4d;}.slds-theme_error", shadowSelector, " {color: white;background-color: #ea001e;}.slds-theme--error", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--error", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--error", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--error", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--error", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-theme_offline", shadowSelector, " {color: white;background-color: #444;}.slds-theme--offline", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--offline", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--offline", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--offline", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--offline", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-theme_alert-texture", shadowSelector, " {background-image: linear-gradient(\n 45deg,\n rgba(0, 0, 0, 0.025) 25%,\n transparent 25%,\n transparent 50%,\n rgba(0, 0, 0, 0.025) 50%,\n rgba(0, 0, 0, 0.025) 75%,\n transparent 75%,\n transparent\n );background-size: 64px 64px;}.slds-theme_inverse-text", shadowSelector, " {color: white;}.slds-theme--inverse-text", shadowSelector, " a:not(.slds-button--neutral)", shadowSelector, " {color: white;text-decoration: underline;}.slds-theme--inverse-text", shadowSelector, " a:not(.slds-button--neutral):visited", shadowSelector, " {color: white;}.slds-theme--inverse-text", shadowSelector, " a:not(.slds-button--neutral):focus", shadowSelector, " {text-decoration: none;}.slds-theme--inverse-text", shadowSelector, " a:not(.slds-button--neutral):active", shadowSelector, " {color: rgba(255, 255, 255, 0.5);}.slds-theme--inverse-text", shadowSelector, " a:not(.slds-button--neutral)[disabled]", shadowSelector, " {color: rgba(255, 255, 255, 0.15);}.slds-text-body_regular", shadowSelector, " {font-size: 0.8125rem;}.slds-text-body_small", shadowSelector, " {font-size: 0.75rem;}.slds-text-heading_large", shadowSelector, " {font-size: 1.75rem;line-height: 1.25;}.slds-text-heading_medium", shadowSelector, " {font-size: 1.25rem;line-height: 1.25;}.slds-text-heading_small", shadowSelector, " {font-size: 1rem;line-height: 1.25;}.slds-text-title", shadowSelector, " {font-size: 0.75rem;line-height: 1.25;color: #444444;}.slds-text-title_caps", shadowSelector, " {font-size: 0.75rem;line-height: 1.25;color: #444444;font-weight: 400;text-transform: uppercase;letter-spacing: 0.0625rem;}.slds-text-title_bold", shadowSelector, " {font-size: 0.875rem;font-weight: 700;}.slds-line-height_reset", shadowSelector, " {line-height: 1;}.slds-text-color_default", shadowSelector, " {color: #181818;}.slds-text-color_weak", shadowSelector, " {color: #444444;}.slds-text-color_error", shadowSelector, " {color: #ea001e;}.slds-text-color_destructive", shadowSelector, " {color: #ea001e;}.slds-text-color_success", shadowSelector, " {color: #2e844a;}.slds-text-color_inverse", shadowSelector, " {color: white;}.slds-text-color_inverse-weak", shadowSelector, " {color: #aeaeae;}.slds-text-align_left", shadowSelector, " {text-align: left;}.slds-text-align_center", shadowSelector, " {text-align: center;}.slds-text-align_right", shadowSelector, " {text-align: right;}.slds-text-longform", shadowSelector, " h1", shadowSelector, ",.slds-text-longform", shadowSelector, " h2", shadowSelector, ",.slds-text-longform", shadowSelector, " h3", shadowSelector, ",.slds-text-longform", shadowSelector, " p", shadowSelector, ",.slds-text-longform", shadowSelector, " ul", shadowSelector, ",.slds-text-longform", shadowSelector, " ol", shadowSelector, ",.slds-text-longform", shadowSelector, " dl", shadowSelector, ",.slds-text-longform", shadowSelector, " img", shadowSelector, " {margin-bottom: 0.75rem;}.slds-text-longform", shadowSelector, " ul", shadowSelector, " {margin-left: 1.5rem;list-style: disc;}.slds-text-longform", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " {list-style: circle;}.slds-text-longform", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " ul", shadowSelector, " {list-style: square;}.slds-text-longform", shadowSelector, " ol", shadowSelector, " {margin-left: 1.5rem;list-style: decimal;}.slds-text-longform", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " {list-style: lower-alpha;}.slds-text-longform", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " ol", shadowSelector, " {list-style: lower-roman;}.slds-text-longform", shadowSelector, " .slds-video", shadowSelector, " {display: block;max-width: 100%;}.slds-text-longform", shadowSelector, " .slds-video.slds-video_center", shadowSelector, " {margin: 0 auto;}.slds-text-longform", shadowSelector, " .slds-video.slds-video_right", shadowSelector, " {margin: 0 0 0 auto;}.slds-text-font_monospace", shadowSelector, " {font-family: Consolas, Menlo, Monaco, Courier, monospace;}.slds-color__text_gray-1", shadowSelector, " {color: white !important;}.slds-color__text_gray-2", shadowSelector, " {color: #fafaf9 !important;}.slds-color__text_gray-3", shadowSelector, " {color: #f3f2f2 !important;}.slds-color__text_gray-4", shadowSelector, " {color: #ecebea !important;}.slds-color__text_gray-5", shadowSelector, " {color: #dddbda !important;}.slds-color__text_gray-6", shadowSelector, " {color: #c9c7c5 !important;}.slds-color__text_gray-7", shadowSelector, " {color: #b0adab !important;}.slds-color__text_gray-8", shadowSelector, " {color: #969492 !important;}.slds-color__text_gray-9", shadowSelector, " {color: #706e6b !important;}.slds-color__text_gray-10", shadowSelector, " {color: #514f4d !important;}.slds-color__text_gray-11", shadowSelector, " {color: #3e3e3c !important;}.slds-color__text_gray-12", shadowSelector, " {color: #2b2826 !important;}.slds-color__background_gray-1", shadowSelector, " {background-color: white !important;}.slds-color__background_gray-2", shadowSelector, " {background-color: #fafaf9 !important;}.slds-color__background_gray-3", shadowSelector, " {background-color: #f3f2f2 !important;}.slds-color__background_gray-4", shadowSelector, " {background-color: #ecebea !important;}.slds-color__background_gray-5", shadowSelector, " {background-color: #dddbda !important;}.slds-color__background_gray-6", shadowSelector, " {background-color: #c9c7c5 !important;}.slds-color__background_gray-7", shadowSelector, " {background-color: #b0adab !important;}.slds-color__background_gray-8", shadowSelector, " {background-color: #969492 !important;}.slds-color__background_gray-9", shadowSelector, " {background-color: #706e6b !important;}.slds-color__background_gray-10", shadowSelector, " {background-color: #514f4d !important;}.slds-color__background_gray-11", shadowSelector, " {background-color: #3e3e3c !important;}.slds-color__background_gray-12", shadowSelector, " {background-color: #2b2826 !important;}.slds-color__border_gray-1", shadowSelector, " {border-color: white !important;}.slds-color__border_gray-2", shadowSelector, " {border-color: #fafaf9 !important;}.slds-color__border_gray-3", shadowSelector, " {border-color: #f3f2f2 !important;}.slds-color__border_gray-4", shadowSelector, " {border-color: #ecebea !important;}.slds-color__border_gray-5", shadowSelector, " {border-color: #dddbda !important;}.slds-color__border_gray-6", shadowSelector, " {border-color: #c9c7c5 !important;}.slds-color__border_gray-7", shadowSelector, " {border-color: #b0adab !important;}.slds-color__border_gray-8", shadowSelector, " {border-color: #969492 !important;}.slds-color__border_gray-9", shadowSelector, " {border-color: #706e6b !important;}.slds-color__border_gray-10", shadowSelector, " {border-color: #514f4d !important;}.slds-color__border_gray-11", shadowSelector, " {border-color: #3e3e3c !important;}.slds-color__border_gray-12", shadowSelector, " {border-color: #2b2826 !important;}.slds-color__fill_gray-1", shadowSelector, " {fill: white !important;}.slds-color__fill_gray-2", shadowSelector, " {fill: #fafaf9 !important;}.slds-color__fill_gray-3", shadowSelector, " {fill: #f3f2f2 !important;}.slds-color__fill_gray-4", shadowSelector, " {fill: #ecebea !important;}.slds-color__fill_gray-5", shadowSelector, " {fill: #dddbda !important;}.slds-color__fill_gray-6", shadowSelector, " {fill: #c9c7c5 !important;}.slds-color__fill_gray-7", shadowSelector, " {fill: #b0adab !important;}.slds-color__fill_gray-8", shadowSelector, " {fill: #969492 !important;}.slds-color__fill_gray-9", shadowSelector, " {fill: #706e6b !important;}.slds-color__fill_gray-10", shadowSelector, " {fill: #514f4d !important;}.slds-color__fill_gray-11", shadowSelector, " {fill: #3e3e3c !important;}.slds-color__fill_gray-12", shadowSelector, " {fill: #2b2826 !important;}.slds-scrollable", shadowSelector, " {-webkit-overflow-scrolling: touch;overflow: auto;}.slds-scrollable_none", shadowSelector, " {overflow: hidden;}.slds-scrollable_y", shadowSelector, " {-webkit-overflow-scrolling: touch;max-height: 100%;overflow: hidden;overflow-y: auto;}.slds-scrollable_x", shadowSelector, " {-webkit-overflow-scrolling: touch;max-width: 100%;overflow: hidden;overflow-x: auto;}.slds-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-size_xx-small", shadowSelector, " {width: 6rem;}.slds-size_x-small", shadowSelector, " {width: 12rem;}.slds-size_small", shadowSelector, " {width: 15rem;}.slds-size_medium", shadowSelector, " {width: 20rem;}.slds-size_large", shadowSelector, " {width: 25rem;}.slds-size_x-large", shadowSelector, " {width: 40rem;}.slds-size_xx-large", shadowSelector, " {width: 60rem;}.slds-size_full", shadowSelector, " {width: 100%;}.slds-size_1-of-1", shadowSelector, " {width: 100%;}.slds-size_1-of-2", shadowSelector, " {width: 50%;}.slds-size_2-of-2", shadowSelector, " {width: 100%;}.slds-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-size_3-of-3", shadowSelector, " {width: 100%;}.slds-size_1-of-4", shadowSelector, " {width: 25%;}.slds-size_2-of-4", shadowSelector, " {width: 50%;}.slds-size_3-of-4", shadowSelector, " {width: 75%;}.slds-size_4-of-4", shadowSelector, " {width: 100%;}.slds-size_1-of-5", shadowSelector, " {width: 20%;}.slds-size_2-of-5", shadowSelector, " {width: 40%;}.slds-size_3-of-5", shadowSelector, " {width: 60%;}.slds-size_4-of-5", shadowSelector, " {width: 80%;}.slds-size_5-of-5", shadowSelector, " {width: 100%;}.slds-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-size_3-of-6", shadowSelector, " {width: 50%;}.slds-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-size_6-of-6", shadowSelector, " {width: 100%;}.slds-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-size_7-of-7", shadowSelector, " {width: 100%;}.slds-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-size_2-of-8", shadowSelector, " {width: 25%;}.slds-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-size_4-of-8", shadowSelector, " {width: 50%;}.slds-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-size_6-of-8", shadowSelector, " {width: 75%;}.slds-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-size_8-of-8", shadowSelector, " {width: 100%;}.slds-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-size_3-of-12", shadowSelector, " {width: 25%;}.slds-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-size_6-of-12", shadowSelector, " {width: 50%;}.slds-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-size_9-of-12", shadowSelector, " {width: 75%;}.slds-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-size_12-of-12", shadowSelector, " {width: 100%;}.slds-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}@media (min-width: 20em) {[class*=\"slds-x-small-size_\"]", shadowSelector, ", [class*=\"slds-x-small-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-x-small-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-x-small-size_xx-small", shadowSelector, " {width: 6rem;}.slds-x-small-size_x-small", shadowSelector, " {width: 12rem;}.slds-x-small-size_small", shadowSelector, " {width: 15rem;}.slds-x-small-size_medium", shadowSelector, " {width: 20rem;}.slds-x-small-size_large", shadowSelector, " {width: 25rem;}.slds-x-small-size_x-large", shadowSelector, " {width: 40rem;}.slds-x-small-size_xx-large", shadowSelector, " {width: 60rem;}.slds-x-small-size_1-of-1", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-2", shadowSelector, " {width: 50%;}.slds-x-small-size_2-of-2", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-x-small-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-x-small-size_3-of-3", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-4", shadowSelector, " {width: 25%;}.slds-x-small-size_2-of-4", shadowSelector, " {width: 50%;}.slds-x-small-size_3-of-4", shadowSelector, " {width: 75%;}.slds-x-small-size_4-of-4", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-5", shadowSelector, " {width: 20%;}.slds-x-small-size_2-of-5", shadowSelector, " {width: 40%;}.slds-x-small-size_3-of-5", shadowSelector, " {width: 60%;}.slds-x-small-size_4-of-5", shadowSelector, " {width: 80%;}.slds-x-small-size_5-of-5", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-x-small-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-x-small-size_3-of-6", shadowSelector, " {width: 50%;}.slds-x-small-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-x-small-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-x-small-size_6-of-6", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-x-small-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-x-small-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-x-small-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-x-small-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-x-small-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-x-small-size_7-of-7", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-x-small-size_2-of-8", shadowSelector, " {width: 25%;}.slds-x-small-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-x-small-size_4-of-8", shadowSelector, " {width: 50%;}.slds-x-small-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-x-small-size_6-of-8", shadowSelector, " {width: 75%;}.slds-x-small-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-x-small-size_8-of-8", shadowSelector, " {width: 100%;}.slds-x-small-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-x-small-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-x-small-size_3-of-12", shadowSelector, " {width: 25%;}.slds-x-small-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-x-small-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-x-small-size_6-of-12", shadowSelector, " {width: 50%;}.slds-x-small-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-x-small-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-x-small-size_9-of-12", shadowSelector, " {width: 75%;}.slds-x-small-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-x-small-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-x-small-size_12-of-12", shadowSelector, " {width: 100%;}.slds-x-small-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-x-small-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-x-small-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-x-small-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-x-small-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-x-small-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-x-small-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-x-small-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-x-small-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-x-small-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-x-small-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-x-small-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (max-width: 20em) {[class*=\"slds-max-x-small-size_\"]", shadowSelector, ", [class*=\"slds-max-x-small-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-max-x-small-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-max-x-small-size_xx-small", shadowSelector, " {width: 6rem;}.slds-max-x-small-size_x-small", shadowSelector, " {width: 12rem;}.slds-max-x-small-size_small", shadowSelector, " {width: 15rem;}.slds-max-x-small-size_medium", shadowSelector, " {width: 20rem;}.slds-max-x-small-size_large", shadowSelector, " {width: 25rem;}.slds-max-x-small-size_x-large", shadowSelector, " {width: 40rem;}.slds-max-x-small-size_xx-large", shadowSelector, " {width: 60rem;}.slds-max-x-small-size_1-of-1", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-2", shadowSelector, " {width: 50%;}.slds-max-x-small-size_2-of-2", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-max-x-small-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-max-x-small-size_3-of-3", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-4", shadowSelector, " {width: 25%;}.slds-max-x-small-size_2-of-4", shadowSelector, " {width: 50%;}.slds-max-x-small-size_3-of-4", shadowSelector, " {width: 75%;}.slds-max-x-small-size_4-of-4", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-5", shadowSelector, " {width: 20%;}.slds-max-x-small-size_2-of-5", shadowSelector, " {width: 40%;}.slds-max-x-small-size_3-of-5", shadowSelector, " {width: 60%;}.slds-max-x-small-size_4-of-5", shadowSelector, " {width: 80%;}.slds-max-x-small-size_5-of-5", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-max-x-small-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-max-x-small-size_3-of-6", shadowSelector, " {width: 50%;}.slds-max-x-small-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-max-x-small-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-max-x-small-size_6-of-6", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-max-x-small-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-max-x-small-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-max-x-small-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-max-x-small-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-max-x-small-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-max-x-small-size_7-of-7", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-max-x-small-size_2-of-8", shadowSelector, " {width: 25%;}.slds-max-x-small-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-max-x-small-size_4-of-8", shadowSelector, " {width: 50%;}.slds-max-x-small-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-max-x-small-size_6-of-8", shadowSelector, " {width: 75%;}.slds-max-x-small-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-max-x-small-size_8-of-8", shadowSelector, " {width: 100%;}.slds-max-x-small-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-max-x-small-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-max-x-small-size_3-of-12", shadowSelector, " {width: 25%;}.slds-max-x-small-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-max-x-small-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-max-x-small-size_6-of-12", shadowSelector, " {width: 50%;}.slds-max-x-small-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-max-x-small-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-max-x-small-size_9-of-12", shadowSelector, " {width: 75%;}.slds-max-x-small-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-max-x-small-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-max-x-small-size_12-of-12", shadowSelector, " {width: 100%;}.slds-max-x-small-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-max-x-small-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-max-x-small-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-max-x-small-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-max-x-small-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-max-x-small-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-max-x-small-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-max-x-small-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-max-x-small-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-max-x-small-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-max-x-small-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-max-x-small-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (min-width: 30em) {[class*=\"slds-small-size_\"]", shadowSelector, ", [class*=\"slds-small-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-small-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-small-size_xx-small", shadowSelector, " {width: 6rem;}.slds-small-size_x-small", shadowSelector, " {width: 12rem;}.slds-small-size_small", shadowSelector, " {width: 15rem;}.slds-small-size_medium", shadowSelector, " {width: 20rem;}.slds-small-size_large", shadowSelector, " {width: 25rem;}.slds-small-size_x-large", shadowSelector, " {width: 40rem;}.slds-small-size_xx-large", shadowSelector, " {width: 60rem;}.slds-small-size_1-of-1", shadowSelector, " {width: 100%;}.slds-small-size_1-of-2", shadowSelector, " {width: 50%;}.slds-small-size_2-of-2", shadowSelector, " {width: 100%;}.slds-small-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-small-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-small-size_3-of-3", shadowSelector, " {width: 100%;}.slds-small-size_1-of-4", shadowSelector, " {width: 25%;}.slds-small-size_2-of-4", shadowSelector, " {width: 50%;}.slds-small-size_3-of-4", shadowSelector, " {width: 75%;}.slds-small-size_4-of-4", shadowSelector, " {width: 100%;}.slds-small-size_1-of-5", shadowSelector, " {width: 20%;}.slds-small-size_2-of-5", shadowSelector, " {width: 40%;}.slds-small-size_3-of-5", shadowSelector, " {width: 60%;}.slds-small-size_4-of-5", shadowSelector, " {width: 80%;}.slds-small-size_5-of-5", shadowSelector, " {width: 100%;}.slds-small-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-small-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-small-size_3-of-6", shadowSelector, " {width: 50%;}.slds-small-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-small-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-small-size_6-of-6", shadowSelector, " {width: 100%;}.slds-small-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-small-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-small-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-small-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-small-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-small-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-small-size_7-of-7", shadowSelector, " {width: 100%;}.slds-small-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-small-size_2-of-8", shadowSelector, " {width: 25%;}.slds-small-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-small-size_4-of-8", shadowSelector, " {width: 50%;}.slds-small-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-small-size_6-of-8", shadowSelector, " {width: 75%;}.slds-small-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-small-size_8-of-8", shadowSelector, " {width: 100%;}.slds-small-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-small-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-small-size_3-of-12", shadowSelector, " {width: 25%;}.slds-small-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-small-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-small-size_6-of-12", shadowSelector, " {width: 50%;}.slds-small-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-small-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-small-size_9-of-12", shadowSelector, " {width: 75%;}.slds-small-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-small-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-small-size_12-of-12", shadowSelector, " {width: 100%;}.slds-small-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-small-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-small-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-small-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-small-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-small-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-small-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-small-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-small-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-small-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-small-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-small-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (max-width: 30em) {[class*=\"slds-max-small-size_\"]", shadowSelector, ", [class*=\"slds-max-small-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-max-small-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-max-small-size_xx-small", shadowSelector, " {width: 6rem;}.slds-max-small-size_x-small", shadowSelector, " {width: 12rem;}.slds-max-small-size_small", shadowSelector, " {width: 15rem;}.slds-max-small-size_medium", shadowSelector, " {width: 20rem;}.slds-max-small-size_large", shadowSelector, " {width: 25rem;}.slds-max-small-size_x-large", shadowSelector, " {width: 40rem;}.slds-max-small-size_xx-large", shadowSelector, " {width: 60rem;}.slds-max-small-size_1-of-1", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-2", shadowSelector, " {width: 50%;}.slds-max-small-size_2-of-2", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-max-small-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-max-small-size_3-of-3", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-4", shadowSelector, " {width: 25%;}.slds-max-small-size_2-of-4", shadowSelector, " {width: 50%;}.slds-max-small-size_3-of-4", shadowSelector, " {width: 75%;}.slds-max-small-size_4-of-4", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-5", shadowSelector, " {width: 20%;}.slds-max-small-size_2-of-5", shadowSelector, " {width: 40%;}.slds-max-small-size_3-of-5", shadowSelector, " {width: 60%;}.slds-max-small-size_4-of-5", shadowSelector, " {width: 80%;}.slds-max-small-size_5-of-5", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-max-small-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-max-small-size_3-of-6", shadowSelector, " {width: 50%;}.slds-max-small-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-max-small-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-max-small-size_6-of-6", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-max-small-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-max-small-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-max-small-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-max-small-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-max-small-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-max-small-size_7-of-7", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-max-small-size_2-of-8", shadowSelector, " {width: 25%;}.slds-max-small-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-max-small-size_4-of-8", shadowSelector, " {width: 50%;}.slds-max-small-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-max-small-size_6-of-8", shadowSelector, " {width: 75%;}.slds-max-small-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-max-small-size_8-of-8", shadowSelector, " {width: 100%;}.slds-max-small-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-max-small-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-max-small-size_3-of-12", shadowSelector, " {width: 25%;}.slds-max-small-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-max-small-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-max-small-size_6-of-12", shadowSelector, " {width: 50%;}.slds-max-small-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-max-small-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-max-small-size_9-of-12", shadowSelector, " {width: 75%;}.slds-max-small-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-max-small-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-max-small-size_12-of-12", shadowSelector, " {width: 100%;}.slds-max-small-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-max-small-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-max-small-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-max-small-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-max-small-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-max-small-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-max-small-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-max-small-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-max-small-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-max-small-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-max-small-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-max-small-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (min-width: 48em) {[class*=\"slds-medium-size_\"]", shadowSelector, ", [class*=\"slds-medium-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-medium-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-medium-size_xx-small", shadowSelector, " {width: 6rem;}.slds-medium-size_x-small", shadowSelector, " {width: 12rem;}.slds-medium-size_small", shadowSelector, " {width: 15rem;}.slds-medium-size_medium", shadowSelector, " {width: 20rem;}.slds-medium-size_large", shadowSelector, " {width: 25rem;}.slds-medium-size_x-large", shadowSelector, " {width: 40rem;}.slds-medium-size_xx-large", shadowSelector, " {width: 60rem;}.slds-medium-size_1-of-1", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-2", shadowSelector, " {width: 50%;}.slds-medium-size_2-of-2", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-medium-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-medium-size_3-of-3", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-4", shadowSelector, " {width: 25%;}.slds-medium-size_2-of-4", shadowSelector, " {width: 50%;}.slds-medium-size_3-of-4", shadowSelector, " {width: 75%;}.slds-medium-size_4-of-4", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-5", shadowSelector, " {width: 20%;}.slds-medium-size_2-of-5", shadowSelector, " {width: 40%;}.slds-medium-size_3-of-5", shadowSelector, " {width: 60%;}.slds-medium-size_4-of-5", shadowSelector, " {width: 80%;}.slds-medium-size_5-of-5", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-medium-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-medium-size_3-of-6", shadowSelector, " {width: 50%;}.slds-medium-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-medium-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-medium-size_6-of-6", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-medium-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-medium-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-medium-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-medium-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-medium-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-medium-size_7-of-7", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-medium-size_2-of-8", shadowSelector, " {width: 25%;}.slds-medium-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-medium-size_4-of-8", shadowSelector, " {width: 50%;}.slds-medium-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-medium-size_6-of-8", shadowSelector, " {width: 75%;}.slds-medium-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-medium-size_8-of-8", shadowSelector, " {width: 100%;}.slds-medium-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-medium-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-medium-size_3-of-12", shadowSelector, " {width: 25%;}.slds-medium-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-medium-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-medium-size_6-of-12", shadowSelector, " {width: 50%;}.slds-medium-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-medium-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-medium-size_9-of-12", shadowSelector, " {width: 75%;}.slds-medium-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-medium-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-medium-size_12-of-12", shadowSelector, " {width: 100%;}.slds-medium-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-medium-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-medium-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-medium-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-medium-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-medium-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-medium-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-medium-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-medium-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-medium-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-medium-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-medium-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (max-width: 48em) {[class*=\"slds-max-medium-size_\"]", shadowSelector, ", [class*=\"slds-max-medium-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-max-medium-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-max-medium-size_xx-small", shadowSelector, " {width: 6rem;}.slds-max-medium-size_x-small", shadowSelector, " {width: 12rem;}.slds-max-medium-size_small", shadowSelector, " {width: 15rem;}.slds-max-medium-size_medium", shadowSelector, " {width: 20rem;}.slds-max-medium-size_large", shadowSelector, " {width: 25rem;}.slds-max-medium-size_x-large", shadowSelector, " {width: 40rem;}.slds-max-medium-size_xx-large", shadowSelector, " {width: 60rem;}.slds-max-medium-size_1-of-1", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-2", shadowSelector, " {width: 50%;}.slds-max-medium-size_2-of-2", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-max-medium-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-max-medium-size_3-of-3", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-4", shadowSelector, " {width: 25%;}.slds-max-medium-size_2-of-4", shadowSelector, " {width: 50%;}.slds-max-medium-size_3-of-4", shadowSelector, " {width: 75%;}.slds-max-medium-size_4-of-4", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-5", shadowSelector, " {width: 20%;}.slds-max-medium-size_2-of-5", shadowSelector, " {width: 40%;}.slds-max-medium-size_3-of-5", shadowSelector, " {width: 60%;}.slds-max-medium-size_4-of-5", shadowSelector, " {width: 80%;}.slds-max-medium-size_5-of-5", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-max-medium-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-max-medium-size_3-of-6", shadowSelector, " {width: 50%;}.slds-max-medium-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-max-medium-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-max-medium-size_6-of-6", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-max-medium-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-max-medium-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-max-medium-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-max-medium-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-max-medium-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-max-medium-size_7-of-7", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-max-medium-size_2-of-8", shadowSelector, " {width: 25%;}.slds-max-medium-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-max-medium-size_4-of-8", shadowSelector, " {width: 50%;}.slds-max-medium-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-max-medium-size_6-of-8", shadowSelector, " {width: 75%;}.slds-max-medium-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-max-medium-size_8-of-8", shadowSelector, " {width: 100%;}.slds-max-medium-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-max-medium-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-max-medium-size_3-of-12", shadowSelector, " {width: 25%;}.slds-max-medium-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-max-medium-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-max-medium-size_6-of-12", shadowSelector, " {width: 50%;}.slds-max-medium-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-max-medium-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-max-medium-size_9-of-12", shadowSelector, " {width: 75%;}.slds-max-medium-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-max-medium-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-max-medium-size_12-of-12", shadowSelector, " {width: 100%;}.slds-max-medium-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-max-medium-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-max-medium-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-max-medium-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-max-medium-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-max-medium-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-max-medium-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-max-medium-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-max-medium-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-max-medium-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-max-medium-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-max-medium-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (min-width: 64em) {[class*=\"slds-large-size_\"]", shadowSelector, ", [class*=\"slds-large-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-large-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-large-size_xx-small", shadowSelector, " {width: 6rem;}.slds-large-size_x-small", shadowSelector, " {width: 12rem;}.slds-large-size_small", shadowSelector, " {width: 15rem;}.slds-large-size_medium", shadowSelector, " {width: 20rem;}.slds-large-size_large", shadowSelector, " {width: 25rem;}.slds-large-size_x-large", shadowSelector, " {width: 40rem;}.slds-large-size_xx-large", shadowSelector, " {width: 60rem;}.slds-large-size_1-of-1", shadowSelector, " {width: 100%;}.slds-large-size_1-of-2", shadowSelector, " {width: 50%;}.slds-large-size_2-of-2", shadowSelector, " {width: 100%;}.slds-large-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-large-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-large-size_3-of-3", shadowSelector, " {width: 100%;}.slds-large-size_1-of-4", shadowSelector, " {width: 25%;}.slds-large-size_2-of-4", shadowSelector, " {width: 50%;}.slds-large-size_3-of-4", shadowSelector, " {width: 75%;}.slds-large-size_4-of-4", shadowSelector, " {width: 100%;}.slds-large-size_1-of-5", shadowSelector, " {width: 20%;}.slds-large-size_2-of-5", shadowSelector, " {width: 40%;}.slds-large-size_3-of-5", shadowSelector, " {width: 60%;}.slds-large-size_4-of-5", shadowSelector, " {width: 80%;}.slds-large-size_5-of-5", shadowSelector, " {width: 100%;}.slds-large-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-large-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-large-size_3-of-6", shadowSelector, " {width: 50%;}.slds-large-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-large-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-large-size_6-of-6", shadowSelector, " {width: 100%;}.slds-large-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-large-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-large-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-large-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-large-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-large-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-large-size_7-of-7", shadowSelector, " {width: 100%;}.slds-large-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-large-size_2-of-8", shadowSelector, " {width: 25%;}.slds-large-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-large-size_4-of-8", shadowSelector, " {width: 50%;}.slds-large-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-large-size_6-of-8", shadowSelector, " {width: 75%;}.slds-large-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-large-size_8-of-8", shadowSelector, " {width: 100%;}.slds-large-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-large-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-large-size_3-of-12", shadowSelector, " {width: 25%;}.slds-large-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-large-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-large-size_6-of-12", shadowSelector, " {width: 50%;}.slds-large-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-large-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-large-size_9-of-12", shadowSelector, " {width: 75%;}.slds-large-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-large-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-large-size_12-of-12", shadowSelector, " {width: 100%;}.slds-large-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-large-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-large-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-large-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-large-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-large-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-large-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-large-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-large-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-large-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-large-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-large-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}@media (max-width: 64em) {[class*=\"slds-max-large-size_\"]", shadowSelector, ", [class*=\"slds-max-large-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-max-large-size_xxx-small", shadowSelector, " {width: 3rem;}.slds-max-large-size_xx-small", shadowSelector, " {width: 6rem;}.slds-max-large-size_x-small", shadowSelector, " {width: 12rem;}.slds-max-large-size_small", shadowSelector, " {width: 15rem;}.slds-max-large-size_medium", shadowSelector, " {width: 20rem;}.slds-max-large-size_large", shadowSelector, " {width: 25rem;}.slds-max-large-size_x-large", shadowSelector, " {width: 40rem;}.slds-max-large-size_xx-large", shadowSelector, " {width: 60rem;}.slds-max-large-size_1-of-1", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-2", shadowSelector, " {width: 50%;}.slds-max-large-size_2-of-2", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-3", shadowSelector, " {width: 33.3333333333%;}.slds-max-large-size_2-of-3", shadowSelector, " {width: 66.6666666667%;}.slds-max-large-size_3-of-3", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-4", shadowSelector, " {width: 25%;}.slds-max-large-size_2-of-4", shadowSelector, " {width: 50%;}.slds-max-large-size_3-of-4", shadowSelector, " {width: 75%;}.slds-max-large-size_4-of-4", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-5", shadowSelector, " {width: 20%;}.slds-max-large-size_2-of-5", shadowSelector, " {width: 40%;}.slds-max-large-size_3-of-5", shadowSelector, " {width: 60%;}.slds-max-large-size_4-of-5", shadowSelector, " {width: 80%;}.slds-max-large-size_5-of-5", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-6", shadowSelector, " {width: 16.6666666667%;}.slds-max-large-size_2-of-6", shadowSelector, " {width: 33.3333333333%;}.slds-max-large-size_3-of-6", shadowSelector, " {width: 50%;}.slds-max-large-size_4-of-6", shadowSelector, " {width: 66.6666666667%;}.slds-max-large-size_5-of-6", shadowSelector, " {width: 83.3333333333%;}.slds-max-large-size_6-of-6", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-7", shadowSelector, " {width: 14.2857142857%;}.slds-max-large-size_2-of-7", shadowSelector, " {width: 28.5714285714%;}.slds-max-large-size_3-of-7", shadowSelector, " {width: 42.8571428571%;}.slds-max-large-size_4-of-7", shadowSelector, " {width: 57.1428571429%;}.slds-max-large-size_5-of-7", shadowSelector, " {width: 71.4285714286%;}.slds-max-large-size_6-of-7", shadowSelector, " {width: 85.7142857143%;}.slds-max-large-size_7-of-7", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-8", shadowSelector, " {width: 12.5%;}.slds-max-large-size_2-of-8", shadowSelector, " {width: 25%;}.slds-max-large-size_3-of-8", shadowSelector, " {width: 37.5%;}.slds-max-large-size_4-of-8", shadowSelector, " {width: 50%;}.slds-max-large-size_5-of-8", shadowSelector, " {width: 62.5%;}.slds-max-large-size_6-of-8", shadowSelector, " {width: 75%;}.slds-max-large-size_7-of-8", shadowSelector, " {width: 87.5%;}.slds-max-large-size_8-of-8", shadowSelector, " {width: 100%;}.slds-max-large-size_1-of-12", shadowSelector, " {width: 8.3333333333%;}.slds-max-large-size_2-of-12", shadowSelector, " {width: 16.6666666667%;}.slds-max-large-size_3-of-12", shadowSelector, " {width: 25%;}.slds-max-large-size_4-of-12", shadowSelector, " {width: 33.3333333333%;}.slds-max-large-size_5-of-12", shadowSelector, " {width: 41.6666666667%;}.slds-max-large-size_6-of-12", shadowSelector, " {width: 50%;}.slds-max-large-size_7-of-12", shadowSelector, " {width: 58.3333333333%;}.slds-max-large-size_8-of-12", shadowSelector, " {width: 66.6666666667%;}.slds-max-large-size_9-of-12", shadowSelector, " {width: 75%;}.slds-max-large-size_10-of-12", shadowSelector, " {width: 83.3333333333%;}.slds-max-large-size_11-of-12", shadowSelector, " {width: 91.6666666667%;}.slds-max-large-size_12-of-12", shadowSelector, " {width: 100%;}.slds-max-large-order_1", shadowSelector, " {-webkit-box-ordinal-group: 2;-ms-flex-order: 1;order: 1;}.slds-max-large-order_2", shadowSelector, " {-webkit-box-ordinal-group: 3;-ms-flex-order: 2;order: 2;}.slds-max-large-order_3", shadowSelector, " {-webkit-box-ordinal-group: 4;-ms-flex-order: 3;order: 3;}.slds-max-large-order_4", shadowSelector, " {-webkit-box-ordinal-group: 5;-ms-flex-order: 4;order: 4;}.slds-max-large-order_5", shadowSelector, " {-webkit-box-ordinal-group: 6;-ms-flex-order: 5;order: 5;}.slds-max-large-order_6", shadowSelector, " {-webkit-box-ordinal-group: 7;-ms-flex-order: 6;order: 6;}.slds-max-large-order_7", shadowSelector, " {-webkit-box-ordinal-group: 8;-ms-flex-order: 7;order: 7;}.slds-max-large-order_8", shadowSelector, " {-webkit-box-ordinal-group: 9;-ms-flex-order: 8;order: 8;}.slds-max-large-order_9", shadowSelector, " {-webkit-box-ordinal-group: 10;-ms-flex-order: 9;order: 9;}.slds-max-large-order_10", shadowSelector, " {-webkit-box-ordinal-group: 11;-ms-flex-order: 10;order: 10;}.slds-max-large-order_11", shadowSelector, " {-webkit-box-ordinal-group: 12;-ms-flex-order: 11;order: 11;}.slds-max-large-order_12", shadowSelector, " {-webkit-box-ordinal-group: 13;-ms-flex-order: 12;order: 12;}}[class*=\"slds-size_\"]", shadowSelector, ",[class*=\"slds-size--\"]", shadowSelector, " {-webkit-box-flex: 0;-ms-flex: none;flex: none;}.slds-has-buffer", shadowSelector, " {margin: 0.75rem;}.slds-has-full-bleed", shadowSelector, " {margin: 0;}.slds-has-bottom-magnet", shadowSelector, " {margin-bottom: 0 !important;border-bottom-left-radius: 0 !important;border-bottom-right-radius: 0 !important;}.slds-has-top-magnet", shadowSelector, " {margin-top: 0 !important;border-top-left-radius: 0 !important;border-top-right-radius: 0 !important;}.slds-has-top-magnet.slds-has-buffer", shadowSelector, " {margin-bottom: 0;border-radius: 0;border-top: 0;-webkit-box-shadow: none;box-shadow: none;}.slds-is-static", shadowSelector, " {position: static;}.slds-is-relative", shadowSelector, " {position: relative;}.slds-is-fixed", shadowSelector, " {position: fixed;}.slds-is-absolute", shadowSelector, " {position: absolute;}@media print {.slds-no-print", shadowSelector, " {display: none;}}.slds-assistive-text", shadowSelector, " {position: absolute !important;margin: -1px !important;border: 0 !important;padding: 0 !important;width: 1px !important;height: 1px !important;overflow: hidden !important;clip: rect(0 0 0 0) !important;text-transform: none !important;white-space: nowrap !important;}.slds-assistive-text_focus:focus", shadowSelector, " {margin: inherit !important;border: inherit !important;padding: inherit !important;width: auto !important;height: auto !important;overflow: visible !important;clip: auto !important;}.slds-is-collapsed", shadowSelector, " {height: 0;overflow: hidden;}.slds-is-expanded", shadowSelector, " {height: auto;overflow: visible;}.slds-hidden", shadowSelector, " {visibility: hidden !important;}.slds-visible", shadowSelector, " {visibility: visible;}.slds-hide", shadowSelector, " {display: none !important;}.slds-show", shadowSelector, " {display: block;}.slds-show_inline-block", shadowSelector, " {display: inline-block;}.slds-show_inline", shadowSelector, " {display: inline;}.slds-transition-hide", shadowSelector, " {opacity: 0;}.slds-transition-show", shadowSelector, " {opacity: 1;}.slds-x-small", shadowSelector, " {}.slds-x-small-show", shadowSelector, " {display: none;}@media (min-width: 320px) {.slds-x-small-show", shadowSelector, " {display: block;}.slds-x-small-show_inline-block", shadowSelector, " {display: inline-block;}.slds-x-small-show_inline", shadowSelector, " {display: inline;}}.slds-x-small-show-only", shadowSelector, " {display: none;}@media (min-width: 320px) and (max-width: 479px) {.slds-x-small-show-only", shadowSelector, " {display: block;}.slds-x-small-show-only_inline-block", shadowSelector, " {display: inline-block;}.slds-x-small-show-only_inline", shadowSelector, " {display: inline;}}@media (max-width: 479px) {.slds-max-x-small-hide", shadowSelector, " {display: none;}}.slds-small", shadowSelector, " {}.slds-small-show", shadowSelector, " {display: none;}@media (min-width: 480px) {.slds-small-show", shadowSelector, " {display: block;}.slds-small-show_inline-block", shadowSelector, " {display: inline-block;}.slds-small-show_inline", shadowSelector, " {display: inline;}}.slds-small-show-only", shadowSelector, " {display: none;}@media (min-width: 480px) and (max-width: 767px) {.slds-small-show-only", shadowSelector, " {display: block;}.slds-small-show-only_inline-block", shadowSelector, " {display: inline-block;}.slds-small-show-only_inline", shadowSelector, " {display: inline;}}@media (max-width: 767px) {.slds-max-small-hide", shadowSelector, " {display: none;}}.slds-medium", shadowSelector, " {}.slds-medium-show", shadowSelector, " {display: none;}@media (min-width: 768px) {.slds-medium-show", shadowSelector, " {display: block;}.slds-medium-show_inline-block", shadowSelector, " {display: inline-block;}.slds-medium-show_inline", shadowSelector, " {display: inline;}}.slds-medium-show-only", shadowSelector, " {display: none;}@media (min-width: 768px) and (max-width: 1023px) {.slds-medium-show-only", shadowSelector, " {display: block;}.slds-medium-show-only_inline-block", shadowSelector, " {display: inline-block;}.slds-medium-show-only_inline", shadowSelector, " {display: inline;}}@media (max-width: 1023px) {.slds-max-medium-hide", shadowSelector, " {display: none;}}.slds-large", shadowSelector, " {}.slds-large-show", shadowSelector, " {display: none;}@media (min-width: 1024px) {.slds-large-show", shadowSelector, " {display: block;}.slds-large-show_inline-block", shadowSelector, " {display: inline-block;}.slds-large-show_inline", shadowSelector, " {display: inline;}}@media (min-width: 320px) {.slds-hide_x-small", shadowSelector, " {display: none !important;}}@media (max-width: 319px) {.slds-show_x-small", shadowSelector, " {display: none !important;}}@media (min-width: 480px) {.slds-hide_small", shadowSelector, " {display: none !important;}}@media (max-width: 479px) {.slds-show_small", shadowSelector, " {display: none !important;}}@media (min-width: 768px) {.slds-hide_medium", shadowSelector, " {display: none !important;}}@media (max-width: 767px) {.slds-show_medium", shadowSelector, " {display: none !important;}}@media (min-width: 1024px) {.slds-hide_large", shadowSelector, " {display: none !important;}}@media (max-width: 1023px) {.slds-show_large", shadowSelector, " {display: none !important;}}@media (min-width: 1280px) {.slds-hide_x-large", shadowSelector, " {display: none !important;}}@media (max-width: 1279px) {.slds-show_x-large", shadowSelector, " {display: none !important;}}.slds-is-visually-empty", shadowSelector, " {visibility: hidden !important;width: 0;}.slds-line-clamp", shadowSelector, " {display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;text-overflow: ellipsis;white-space: pre-line;}.slds-line-clamp_x-small", shadowSelector, " {display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 2;overflow: hidden;text-overflow: ellipsis;white-space: pre-line;}.slds-line-clamp_small", shadowSelector, " {display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 3;overflow: hidden;text-overflow: ellipsis;white-space: pre-line;}.slds-line-clamp_medium", shadowSelector, " {display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;overflow: hidden;text-overflow: ellipsis;white-space: pre-line;}.slds-line-clamp_large", shadowSelector, " {display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 7;overflow: hidden;text-overflow: ellipsis;white-space: pre-line;}@media print {*", shadowSelector, ", *", shadowSelector, ":before, *", shadowSelector, ":after {background: transparent !important;color: #000 !important;-webkit-box-shadow: none !important;box-shadow: none !important;text-shadow: none !important;}a", shadowSelector, ", a:visited", shadowSelector, " {text-decoration: underline;}a[href]", shadowSelector, ":after {content: \" (\" attr(href) \")\";}abbr[title]", shadowSelector, ":after {content: \" (\" attr(title) \")\";}a[href^=\"#\"]", shadowSelector, ":after, a[href^=\"javascript:\"]", shadowSelector, ":after {content: \"\";}pre", shadowSelector, ", blockquote", shadowSelector, " {border: 1px solid #999;page-break-inside: avoid;}thead", shadowSelector, " {display: table-header-group;}tr", shadowSelector, ", img", shadowSelector, " {page-break-inside: avoid;}img", shadowSelector, " {max-width: 100% !important;}p", shadowSelector, ", h2", shadowSelector, ", h3", shadowSelector, " {orphans: 3;widows: 3;}h2", shadowSelector, ", h3", shadowSelector, " {page-break-after: avoid;}}"].join('');
  /*LWC compiler v2.13.3*/
}
var stylesheet0 = [stylesheet$3];

function stylesheet$2(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return "main" + shadowSelector + " {margin: 30px;display: flex;flex-direction: column;align-items: center;}h1" + shadowSelector + " {color: #1798c1;}";
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets$2 = [stylesheet0, stylesheet$2];

var _implicitScopedStylesheets$2 = undefined;

function stylesheet$1(token, useActualHostSelector, useNativeDirPseudoclass) {
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return ((useActualHostSelector ? ":host {display: block;}" : hostSelector + " {display: block;}"));
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets$1 = [stylesheet$1];

var _implicitScopedStylesheets$1 = undefined;

function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  return "_:-ms-lang(x)" + shadowSelector + ", svg" + shadowSelector + " {pointer-events: none;}";
  /*LWC compiler v2.13.3*/
}
var _implicitStylesheets = [stylesheet];

var _implicitScopedStylesheets = undefined;

function tmpl$8($api, $cmp, $slotset, $ctx) {
  const {fid: api_scoped_frag_id, h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true"
    },
    key: 0,
    svg: true
  }, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", api_scoped_frag_id($cmp.href))
    },
    key: 1,
    svg: true
  })])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$9 = registerTemplate(tmpl$8);
tmpl$8.stylesheets = [];


if (_implicitStylesheets) {
  tmpl$8.stylesheets.push.apply(tmpl$8.stylesheets, _implicitStylesheets);
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl$8.stylesheetToken = "lightning-primitiveIcon_primitiveIcon";
}

const classNamesHash = classes => {
  return typeof classes === 'string' ? classes.trim().split(/\s+/).reduce((acc, cn) => {
    acc[cn] = true;
    return acc;
  }, {}) : classes;
};

const proto = {
  add(className) {
    Object.assign(this, classNamesHash(className));
    return this;
  },

  invert() {
    Object.keys(this).forEach(key => {
      this[key] = !this[key];
    });
    return this;
  },

  toString() {
    return Object.keys(this).filter(key => this[key]).join(' ');
  }

};
function classSet(config) {
  return Object.assign(Object.create(proto), classNamesHash(config));
}

/**
 * Takes label strings with placeholder params (`{0}`) and updates the label with given `args`
 * @param {string} str - any label string requiring injections of other strings/params (e.g., 'foo {0}')
 * @param  {string|array} arguments - string(s) to be injected into the `string` param
 * @returns {string} fully replaced string, e.g., '{0} is a {1}' -> 'Hal Jordan is a Green Lantern'
 */
function formatLabel(str) {
  const args = Array.prototype.slice.call(arguments, 1);
  let replacements = args;

  if (Array.isArray(args[0])) {
    [replacements] = args;
  }

  return str.replace(/{(\d+)}/g, (match, i) => {
    return replacements[i];
  });
}

function assert(condition, message) {
  {
    if (!condition) {
      throw new Error(message);
    }
  }
}

/* All Valid Aria Attributes, in camel case
 * - it's better to start from camel-case
 *   because `aria-${_.kebabCase('describedBy')}` => 'aria-described-by' (NOT aria property)
 * - correct aria property: 'aria-describedby'
 *  https://www.w3.org/TR/wai-aria/
 */
const ARIA_PROP_LIST = ['activeDescendant', 'atomic', 'autoComplete', 'busy', 'checked', 'colCount', 'colIndex', 'colSpan', 'controls', 'current', 'describedAt', 'describedBy', 'description', 'details', 'disabled', 'dropEffect', 'errorMessage', 'expanded', 'flowTo', 'grabbed', 'hasPopup', 'hidden', 'invalid', 'keyShortcuts', 'label', 'labelledBy', 'level', 'live', 'modal', 'multiLine', 'multiSelectable', 'orientation', 'owns', 'placeholder', 'posInSet', 'pressed', 'readOnly', 'relevant', 'required', 'roleDescription', 'rowCount', 'rowIndex', 'rowSpan', 'selected', 'setSize', 'sort', 'valueMax', 'valueMin', 'valueNow', 'valueText'];
/**
 * Generate an ARIA lookup object when passing in a list of ARIA values
 * @param {Array} list A list of ARIA properties (array of strings)
 * @param {String} type A type which defaults to output ARIA properties as modified kebab-case, or camel-case
 * @example 'valueMax' string becomes: { VALUEMAX: 'aria-valuemax' }
 * @returns {Object} A lookup object for ARIA properties in (modified) kebab-case or camel-case
 */

const getAriaLookup = (list, type = 'default') => {
  if (!list || list.length === 0) {
    throw new Error('List of aria properties is required');
  }

  const lookupObj = {};

  if (type === 'default') {
    list.forEach(name => {
      const nameUpperCase = name.toUpperCase();

      if (!lookupObj[nameUpperCase]) {
        lookupObj[nameUpperCase] = `aria-${name.toLowerCase()}`;
      }
    });
    return lookupObj;
  }

  list.forEach(name => {
    const ariaPropertyLowerCase = `aria-${name.toLowerCase()}`;
    const ariaPropertyCamelCase = `aria${name.charAt(0).toUpperCase()}${name.slice(1)}`;

    if (!lookupObj[ariaPropertyLowerCase]) {
      lookupObj[ariaPropertyLowerCase] = ariaPropertyCamelCase;
    }
  });
  return lookupObj;
};
/**
 * ARIA lookup, 'modified' kebab-case
 * Given an array of aria property strings in camel-case, produce a lookup object
 * NOTE: 'ariaDescribedBy' (camel-case ARIA property) in TRUE kebab-case would be:
 * - 'aria-described-by' (not valid ARIA)
 * - 'aria-describedby' (valid ARIA, or modified kebab-case)
 * Example: 'describedBy' -> { DESCRIBEDBY: 'aria-describedby' }
 */


getAriaLookup(ARIA_PROP_LIST);
/**
 * ARIA lookup, aria-property (key): 'ariaCamelCase' (value)
 * Example: 'valueMax' -> { 'aria-valuemax': 'ariaValueMax' }
 * Useful for converting from normal aria properties to aria camel cased values
 */

getAriaLookup(ARIA_PROP_LIST, 'cc');

/**
An emitter implementation based on the Node.js EventEmitter API:
https://nodejs.org/dist/latest-v6.x/docs/api/events.html#events_class_eventemitter
**/
class EventEmitter {
  constructor() {
    this.registry = {};
  }
  /**
  Registers a listener on the emitter
  @method EventEmitter#on
  @param {String} name - The name of the event
  @param {Function} listener - The callback function
  @return {EventEmitter} - Returns a reference to the `EventEmitter` so that calls can be chained
  **/


  on(name, listener) {
    this.registry[name] = this.registry[name] || [];
    this.registry[name].push(listener);
    return this;
  }
  /**
  Registers a listener on the emitter that only executes once
  @method EventEmitter#once
  @param {String} name - The name of the event
  @param {Function} listener - The callback function
  @return {EventEmitter} - Returns a reference to the `EventEmitter` so that calls can be chained
  **/


  once(name, listener) {
    const doOnce = function () {
      listener.apply(null, arguments);
      this.removeListener(name, doOnce);
    }.bind(this);

    this.on(name, doOnce);
    return this;
  }
  /**
  Synchronously calls each listener registered with the specified event
  @method EventEmitter#emit
  @param {String} name - The name of the event
  @return {Boolean} - Returns `true` if the event had listeners, `false` otherwise
  **/


  emit(name) {
    const args = Array.prototype.slice.call(arguments, 1);
    const listeners = this.registry[name];
    let count = 0;

    if (listeners) {
      listeners.forEach(listener => {
        count += 1;
        listener.apply(null, args);
      });
    }

    return count > 0;
  }
  /**
  Removes the specified `listener` from the listener array for the event named `name`
  @method EventEmitter#removeListener
  @param {String} name - The name of the event
  @param {Function} listener - The callback function
  @return {EventEmitter} - Returns a reference to the `EventEmitter` so that calls can be chained
  **/


  removeListener(name, listener) {
    const listeners = this.registry[name];

    if (listeners) {
      for (let i = 0, len = listeners.length; i < len; i += 1) {
        if (listeners[i] === listener) {
          listeners.splice(i, 1);
          return this;
        }
      }
    }

    return this;
  }

}

/**
 * Utility function to generate an unique guid.
 * used on state objects to provide a performance aid when iterating
 * through the items and marking them for render
 * @returns {String} an unique string ID
 */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function classListMutation(classList, config) {
  Object.keys(config).forEach(key => {
    if (typeof key === 'string' && key.length) {
      if (config[key]) {
        classList.add(key);
      } else {
        classList.remove(key);
      }
    }
  });
}

const isIE11 = isIE11Test(navigator);
isChromeTest(navigator);
isSafariTest(navigator); // The following functions are for tests only

function isIE11Test(navigator) {
  // https://stackoverflow.com/questions/17447373/how-can-i-target-only-internet-explorer-11-with-javascript
  return /Trident.*rv[ :]*11\./.test(navigator.userAgent);
}
function isChromeTest(navigator) {
  // https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
  return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
}
function isSafariTest(navigator) {
  // via https://stackoverflow.com/questions/49872111/detect-safari-and-stop-script
  return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
}

/**
A string normalization utility for attributes.
@param {String} value - The value to normalize.
@param {Object} config - The optional configuration object.
@param {String} [config.fallbackValue] - The optional fallback value to use if the given value is not provided or invalid. Defaults to an empty string.
@param {Array} [config.validValues] - An optional array of valid values. Assumes all input is valid if not provided.
@return {String} - The normalized value.
**/
function normalizeString(value, config = {}) {
  const {
    fallbackValue = '',
    validValues,
    toLowerCase = true
  } = config;
  let normalized = typeof value === 'string' && value.trim() || '';
  normalized = toLowerCase ? normalized.toLowerCase() : normalized;

  if (validValues && validValues.indexOf(normalized) === -1) {
    normalized = fallbackValue;
  }

  return normalized;
}
/**
A boolean normalization utility for attributes.
@param {Any} value - The value to normalize.
@return {Boolean} - The normalized value.
**/

function normalizeBoolean(value) {
  return typeof value === 'string' || !!value;
}
/**
A aria attribute normalization utility.
@param {Any} value - A single aria value or an array of aria values
@return {String} - A space separated list of aria values
**/

function normalizeAriaAttribute(value) {
  let arias = Array.isArray(value) ? value : [value];
  arias = arias.map(ariaValue => {
    if (typeof ariaValue === 'string') {
      return ariaValue.replace(/\s+/g, ' ').trim();
    }

    return '';
  }).filter(ariaValue => !!ariaValue);
  return arias.length > 0 ? arias.join(' ') : null;
}

const keyCodes = {
  tab: 9,
  backspace: 8,
  enter: 13,
  escape: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  delete: 46,
  shift: 16
}; // Acceptable values are defined here: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values

/**
 * Set an attribute on an element, if it's a normal element
 * it will use setAttribute, if it's an LWC component
 * it will use the public property
 *
 * @param {HTMLElement} element The element to act on
 * @param {String} attribute the attribute to set
 * @param {Any} value the value to set
 */
function smartSetAttribute(element, attribute, value) {
  if (element.tagName.match(/^LIGHTNING/i)) {
    attribute = attribute.replace(/-\w/g, m => m[1].toUpperCase());
    element[attribute] = value ? value : null;
  } else if (value) {
    element.setAttribute(attribute, value);
  } else {
    element.removeAttribute(attribute);
  }
}

/**
 * @param {HTMLElement} element Element to act on
 * @param {Object} values values and attributes to set, if the value is
 *                        falsy it the attribute will be removed
 */

function synchronizeAttrs(element, values) {
  if (!element) {
    return;
  }

  const attributes = Object.keys(values);
  attributes.forEach(attribute => {
    smartSetAttribute(element, attribute, values[attribute]);
  });
}
/**
 * Get the actual DOM id for an element
 * @param {HTMLElement|String} el The element to get the id for (string will just be returned)
 *
 * @returns {String} The DOM id or null
 */

function getRealDOMId(el) {
  if (el && typeof el === 'string') {
    return el;
  } else if (el) {
    return el.getAttribute('id');
  }

  return null;
}
const DEFAULT_MODAL_ZINDEX = 9000;
const DEFAULT_ZINDEX_OFFSET = 100;
const DEFAULT_ZINDEX_BASELINE = DEFAULT_MODAL_ZINDEX + DEFAULT_ZINDEX_OFFSET;
/**
 * Returns the zIndex baseline from slds zIndex variable --lwc-zIndexModal.
 * @returns {Number} zIndex baseline
 */

function getZIndexBaseline() {
  // When SLDS styles are present, typically on Core
  // this currently resolves to: '9000' (string)
  const modalZindexValueLwc = (window.getComputedStyle(document.documentElement) || document.documentElement.style).getPropertyValue('--lwc-zIndexModal');
  const baseZindexModalLwc = parseInt(modalZindexValueLwc, 10);
  return isNaN(baseZindexModalLwc) ? DEFAULT_ZINDEX_BASELINE : baseZindexModalLwc + DEFAULT_ZINDEX_OFFSET;
}
const BUTTON_GROUP_ORDER = {
  FIRST: 'first',
  MIDDLE: 'middle',
  LAST: 'last',
  ONLY: 'only'
};
/**
 * returns the SLDS class for the given group order
 * @param groupOrder
 * @returns {string}
 */

function buttonGroupOrderClass(groupOrder) {
  return {
    [BUTTON_GROUP_ORDER.FIRST]: 'slds-button_first',
    [BUTTON_GROUP_ORDER.MIDDLE]: 'slds-button_middle',
    [BUTTON_GROUP_ORDER.LAST]: 'slds-button_last',
    [BUTTON_GROUP_ORDER.ONLY]: 'single-button'
  }[groupOrder];
}

/*
 * Regex to test a string for an ISO8601 Date. The following formats are matched.
 * Note that if a time element is present (e.g. 'T'), the string should have a time zone designator (Z or +hh:mm or -hh:mm).
 *
 *  YYYY
 *  YYYY-MM
 *  YYYY-MM-DD
 *  YYYY-MM-DDThh:mmTZD
 *  YYYY-MM-DDThh:mm:ssTZD
 *  YYYY-MM-DDThh:mm:ss.STZD
 *
 *
 * @see: https://www.w3.org/TR/NOTE-datetime
 */
const ISO8601_STRICT_PATTERN = /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z){1})?)?)?$/i;
/* Regex to test a string for an ISO8601 partial time or full time:
 * hh:mm
 * hh:mm:ss
 * hh:mm:ss.S
 * full time = partial time + TZD
 */

const ISO8601_TIME_PATTERN = /^\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?$/i;
const STANDARD_TIME_FORMAT = 'HH:mm:ss.SSS';
const STANDARD_DATE_FORMAT = 'YYYY-MM-DD';
const TIME_SEPARATOR = 'T';
const TIMEZONE_INDICATOR = /(Z|([+-])(\d{2}):(\d{2}))$/;
function isValidISODateTimeString(dateTimeString) {
  return isValidISO8601String(dateTimeString) && isValidDate(dateTimeString);
}
function isValidISOTimeString(timeString) {
  if (!isValidISO8601TimeString(timeString)) {
    return false;
  }

  const timeOnly = removeTimeZoneSuffix(timeString);
  return isValidDate(`2018-09-09T${timeOnly}Z`);
}
function removeTimeZoneSuffix(dateTimeString) {
  if (typeof dateTimeString === 'string') {
    return dateTimeString.split(TIMEZONE_INDICATOR)[0];
  }

  return dateTimeString;
}

function isValidISO8601String(dateTimeString) {
  if (typeof dateTimeString !== 'string') {
    return false;
  }

  return ISO8601_STRICT_PATTERN.test(dateTimeString);
}

function isValidISO8601TimeString(timeString) {
  if (typeof timeString !== 'string') {
    return false;
  }

  return ISO8601_TIME_PATTERN.test(timeString);
}

function isValidDate(value) {
  // Date.parse returns NaN if the argument doesn't represent a valid date
  const timeStamp = Date.parse(value);
  return isFinite(timeStamp);
}

var _tmpl$8 = void 0;

var labelSecondsLater = 'in a few seconds';

var labelSecondsAgo = 'a few seconds ago';

const fallbackFutureLabel = 'in {0} {1}'; // e.g. in 1 minute

const fallbackPastLabel = '{0} {1} ago'; // e.g. 1 minute ago

const fallbackPluralSuffix = 's'; // plural suffix for the units, e.g. in 10 minutes
// The threshold values come from moment.js

const units = {
  SECONDS: {
    name: 'second',
    threshold: 45
  },
  // a few seconds to minute
  MINUTES: {
    name: 'minute',
    threshold: 45
  },
  // minutes to hour
  HOURS: {
    name: 'hour',
    threshold: 22
  },
  // hours to day
  DAYS: {
    name: 'day',
    threshold: 26
  },
  // days to month
  MONTHS: {
    name: 'month',
    threshold: 11
  },
  // months to year
  YEARS: {
    name: 'year'
  }
};
const SECOND_TO_MILLISECONDS = 1000;
const MINUTE_TO_MILLISECONDS = 6e4; // 60 * SECOND_TO_MILLISECONDS;

const HOUR_TO_MILLISECONDS = 36e5; // 60 * MINUTE_TO_MILLISECONDS

const DAY_TO_MILLISECONDS = 864e5; // 24 * HOUR_TO_MILLISECONDS;

class Duration {
  constructor(milliseconds) {
    this.milliseconds = 0;

    if (typeof milliseconds !== 'number') {
      this.isValid = false; // eslint-disable-next-line no-console

      console.warn(`The value of milliseconds passed into Duration must be of type number,
                but we are getting the ${typeof milliseconds} value "${milliseconds}" instead.
                `);
      return;
    }

    this.isValid = true;
    this.milliseconds = milliseconds;
  }

  humanize(locale) {
    if (!this.isValid) {
      return '';
    }

    const unit = findBestUnitMatch(this);

    if (unit === units.SECONDS) {
      const isLater = this.milliseconds > 0;
      return isLater ? labelSecondsLater : labelSecondsAgo;
    }

    return format(locale, this.asIn(unit), unit.name);
  }

  asIn(unit) {
    switch (unit) {
      case units.SECONDS:
        return Math.round(this.milliseconds / SECOND_TO_MILLISECONDS);

      case units.MINUTES:
        return Math.round(this.milliseconds / MINUTE_TO_MILLISECONDS);

      case units.HOURS:
        return Math.round(this.milliseconds / HOUR_TO_MILLISECONDS);

      case units.DAYS:
        return Math.round(this.milliseconds / DAY_TO_MILLISECONDS);

      case units.MONTHS:
        return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS));

      case units.YEARS:
      default:
        return Math.round(daysToMonth(this.milliseconds / DAY_TO_MILLISECONDS) / 12);
    }
  }

}

registerDecorators(Duration, {
  fields: ["milliseconds"]
});

var Duration$1 = registerComponent(Duration, {
  tmpl: _tmpl$8
});

function daysToMonth(days) {
  // 400 years have 146097 days (taking into account leap year rules)
  // 400 years have 12 months === 4800
  const daysToMonthRatio = 4800 / 146097;
  return days * daysToMonthRatio;
}

function findBestUnitMatch(duration) {
  // Traversing the object keys in order from Seconds to Years
  // http://exploringjs.com/es6/ch_oop-besides-classes.html#_traversal-order-of-properties
  const match = Object.keys(units).find(key => {
    const unit = units[key]; // Year is the max and doesn't have a threshold

    return unit === units.YEARS || Math.abs(duration.asIn(unit)) < unit.threshold;
  });
  return units[match];
}

function format(locale, value, unit) {
  if ('Intl' in window && Intl.RelativeTimeFormat) {
    const formatter = new Intl.RelativeTimeFormat(locale, {
      style: 'long',
      numeric: 'always'
    });
    return formatter.format(value, unit);
  }

  return fallbackFormatter(value, unit);
}

function fallbackFormatter(value, unit) {
  // eslint-disable-next-line no-console
  console.warn(`The current environment does not support formatters for relative time.`);
  const absoluteValue = Math.abs(value);
  const unitString = absoluteValue !== 1 ? unit + fallbackPluralSuffix : unit;
  const label = value > 0 ? fallbackFutureLabel : fallbackPastLabel;
  return formatLabel(label, absoluteValue, unitString);
}

// default implementation of localization service for en-US locale. This covers the current usage of the localizationService in the code base.
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DATE_FORMAT = {
  short: 'M/d/yyyy',
  medium: 'MMM d, yyyy',
  long: 'MMMM d, yyyy'
};
const TIME_FORMAT = {
  short: 'h:mm a',
  medium: 'h:mm:ss a',
  long: 'h:mm:ss a'
}; // The parseTime method normalizes the time format so that minor deviations are accepted

const TIME_FORMAT_SIMPLE = {
  short: 'h:m a',
  medium: 'h:m:s a',
  long: 'h:m:s a'
}; // Only works with dates and iso strings
// formats the date object by ignoring the timezone offset
// e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
// formatDate(date, 'YYYY-MM-DD') -> 2019-03-11

function formatDate(value, format) {
  let isUTC = false;
  let dateString = value;

  if (typeof value === 'string') {
    dateString = value.split(TIME_SEPARATOR)[0];
    isUTC = true;
  }

  return formatDateInternal(dateString, format, isUTC);
} // Only works with date objects.
// formats the date object according to UTC.
// e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
// formatDateUTC(date, 'YYYY-MM-DD') -> 2019-03-10


function formatDateUTC(value, format) {
  return formatDateInternal(value, format, true);
} // Only works with a date object


function formatTime(date, format) {
  if (!isDate(date)) {
    return new Date('');
  }

  const hours = (date.getHours() + 11) % 12 + 1;
  const suffix = date.getHours() >= 12 ? 'PM' : 'AM';

  switch (format) {
    case STANDARD_TIME_FORMAT:
      // 16:12:32.000
      return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}.${doublePad(date.getMilliseconds())}`;

    case TIME_FORMAT.short:
      // 4:12 PM;
      return `${hours}:${pad(date.getMinutes())} ${suffix}`;

    case TIME_FORMAT.medium:
    case TIME_FORMAT.long:
    default:
      // 4:12:32 PM;
      return `${hours}:${pad(date.getMinutes())}:${pad(date.getSeconds())} ${suffix}`;
  }
} // Only works with a date object
// formats the date object according to UTC.
// e.g. assume date is Mar 11 2019 00:00:00 GMT+1100:
// formatDateTimeUTC(date) -> 2019-03-10  1:00:00 PM


function formatDateTimeUTC(value) {
  if (!isDate(value)) {
    return new Date('');
  }

  const date = new Date(value.getTime());
  return `${formatDateUTC(date)}, ${formatTime(addTimezoneOffset(date))}`;
} // parses ISO8601 date/time strings. Currently only used to parse ISO time strings without a TZD. Some examples:
// 20:00:00.000             -> Feb 26 2019 20:00:00 GMT-0500
// 2019-03-11               -> Mar 11 2019 00:00:00 GMT-0400
// 2019-03-11T00:00:00.000Z -> Mar 10 2019 20:00:00 GMT-0400


function parseDateTimeISO8601(value) {
  let isoString = null;
  let shouldAddOffset = true;

  if (isValidISOTimeString(value)) {
    isoString = `${getTodayInISO()}T${addTimezoneSuffix(value)}`;
  } else if (isValidISODateTimeString(value)) {
    if (value.indexOf(TIME_SEPARATOR) > 0) {
      isoString = addTimezoneSuffix(value);
      shouldAddOffset = false;
    } else {
      isoString = `${value}T00:00:00.000Z`;
    }
  }

  if (isoString) {
    // Browsers differ on how they treat iso strings without a timezone offset (local vs utc time)
    const parsedDate = new Date(isoString);

    if (shouldAddOffset) {
      addTimezoneOffset(parsedDate);
    }

    return parsedDate;
  }

  return null;
} // called by the datepicker and calendar for parsing iso and formatted date strings
// called by the timepicker to parse the formatted time string


function parseDateTime(value, format) {
  if (format === STANDARD_DATE_FORMAT && isValidISODateTimeString(value)) {
    return parseDateTimeISO8601(value);
  }

  if (Object.values(DATE_FORMAT).includes(format)) {
    return parseFormattedDate(value, format);
  }

  if (Object.values(TIME_FORMAT_SIMPLE).includes(format)) {
    return parseFormattedTime(value);
  }

  return null;
} // The input to this method is always an ISO string with timezone offset.


function parseDateTimeUTC(value) {
  return parseDateTimeISO8601(addTimezoneSuffix(value));
}

function isBefore(date1, date2, unit) {
  const normalizedDate1 = getDate(date1);
  const normalizedDate2 = getDate(date2);

  if (!normalizedDate1 || !normalizedDate2) {
    return false;
  }

  return startOf(normalizedDate1, unit).getTime() < startOf(normalizedDate2, unit).getTime();
} // unit can be millisecond, minute, day


function isAfter(date1, date2, unit) {
  const normalizedDate1 = getDate(date1);
  const normalizedDate2 = getDate(date2);

  if (!normalizedDate1 || !normalizedDate2) {
    return false;
  }

  return startOf(normalizedDate1, unit).getTime() > startOf(normalizedDate2, unit).getTime();
} // We're not doing timezone conversion in the default config. Only converting from UTC to system timezone


function UTCToWallTime(date, timezone, callback) {
  const utcDate = new Date(date.getTime());
  callback(subtractTimezoneOffset(utcDate));
} // We're not doing timezone conversion in the default config. Only converting from system timezone to UTC


function WallTimeToUTC(date, timezone, callback) {
  const localDate = new Date(date.getTime());
  callback(addTimezoneOffset(localDate));
} // We're assuming en-US locale so we don't need translation between calendar systems


function translateToOtherCalendar(date) {
  return date;
} // We're assuming en-US locale so we don't need translation between calendar systems


function translateFromOtherCalendar(date) {
  return date;
} // We're assuming en-US locale so we don't need translation of digits


function translateToLocalizedDigits(input) {
  return input;
} // We're assuming en-US locale so we don't need translation of digits


function translateFromLocalizedDigits(input) {
  return input;
} // This is called from the numberFormat library when the value exceeds the safe length.
// We currently rely on aura to format large numbers


function getNumberFormat() {
  return {
    format: value => {
      // eslint-disable-next-line no-console
      console.warn(`The current environment does not support large numbers and the original value of ${value} will be returned.`);
      return value;
    }
  };
} // relativeDateTime (currently the only user of duration) uses unit="minutes"
// The default implementation here assumes the unit is always minutes.


function duration(minutes) {
  return new Duration$1(minutes * 60 * 1000);
}

function displayDuration(value) {
  return value.humanize('en');
} // parses a time string formatted in en-US locale i.e. h:mm:ss a


function parseFormattedTime(value) {
  // for time strings it's easier to just split on :.\s
  const values = value.trim().split(/[:.\s*]/); // at least two parts i.e. 12 PM, and at most 5 parts i.e. 12:34:21.432 PM

  const length = values.length;

  if (!values || length < 2 || length > 5) {
    return null;
  }

  const ampm = values[length - 1];
  const isBeforeNoon = ampm.toLowerCase() === 'am';
  const isAfternoon = ampm.toLowerCase() === 'pm'; // remove ampm

  values.splice(-1, 1);
  const allNumbers = values.every(item => !isNaN(item));

  if (!isAfternoon && !isBeforeNoon || !allNumbers) {
    return null;
  }

  const hours = values[0];
  const hour24 = pad(isAfternoon ? hours % 12 + 12 : hours % 12);
  const minutes = length >= 3 && values[1] || '0';
  const seconds = length >= 4 && values[2] || '0';
  const milliseconds = length === 5 && values[3] || '0';
  const newDate = new Date(getTodayInISO());
  newDate.setHours(hour24, minutes, seconds, milliseconds);
  return isDate(newDate) ? newDate : null;
} // parses a date string formatted in en-US locale, i.e. MMM d, yyyy


function parseFormattedDate(value, format) {
  // default to medium style pattern
  let pattern = /^([a-zA-Z]{3})\s*(\d{1,2}),\s*(\d{4})$/;

  switch (format) {
    case DATE_FORMAT.short:
      pattern = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
      break;

    case DATE_FORMAT.long:
      pattern = /^([a-zA-Z]+)\s*(\d{1,2}),\s*(\d{4})$/;
      break;
  } // matches[1]: month, matches[2]: day, matches[3]: year


  const match = pattern.exec(value.trim());

  if (!match) {
    return null;
  }

  let month = match[1];
  const day = match[2];
  const year = match[3]; // for long and medium style formats, we need to find the month index

  if (format !== DATE_FORMAT.short) {
    month = MONTH_NAMES.findIndex(item => item.toLowerCase().includes(month.toLowerCase())); // the actual month for the ISO string is 1 more than the index

    month += 1;
  }

  const isoValue = `${year}-${pad(month)}-${pad(day)}`;
  const newDate = new Date(`${isoValue}T00:00:00.000Z`);
  return isDate(newDate) ? addTimezoneOffset(newDate) : null;
}

function formatDateInternal(value, format, isUTC) {
  const date = getDate(value);

  if (!date) {
    // return Invalid Date
    return new Date('');
  }

  if (isUTC && isDate(value)) {
    // if value is an ISO string, we already add the timezone offset when parsing the date string.
    addTimezoneOffset(date);
  }

  switch (format) {
    case STANDARD_DATE_FORMAT:
      return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

    case DATE_FORMAT.short:
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    case DATE_FORMAT.long:
      return `${MONTH_NAMES[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;

    case DATE_FORMAT.medium:
    default:
      {
        const shortMonthName = MONTH_NAMES[date.getMonth()].substring(0, 3);
        return `${shortMonthName} ${date.getDate()}, ${date.getFullYear()}`;
      }
  }
} // unit can be 'day' or 'minute', otherwise will default to milliseconds. These are the only units that are currently used in the codebase.


function startOf(date, unit) {
  switch (unit) {
    case 'day':
      date.setHours(0);
      date.setMinutes(0);
    // falls through

    case 'minute':
      date.setSeconds(0);
      date.setMilliseconds(0);
      break;
  }

  return date;
}

function isDate(value) {
  return Object.prototype.toString.call(value) === '[object Date]' && !isNaN(value.getTime());
}

function addTimezoneSuffix(value) {
  // first remove TZD if the string has one, and then add Z
  return removeTimeZoneSuffix(value) + 'Z';
}

function addTimezoneOffset(date) {
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  return date;
}

function subtractTimezoneOffset(date) {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date;
}

function getDate(value) {
  if (!value) {
    return null;
  }

  if (isDate(value)) {
    return new Date(value.getTime());
  }

  if (isFinite(value) && (typeof value === 'number' || typeof value === 'string')) {
    return new Date(parseInt(value, 10));
  }

  if (typeof value === 'string') {
    return parseDateTimeISO8601(value);
  }

  return null;
}

function getTodayInISO() {
  return new Date().toISOString().split('T')[0];
}

function pad(n) {
  return Number(n) < 10 ? '0' + n : n;
}

function doublePad(n) {
  return Number(n) < 10 ? '00' + n : Number(n) < 100 ? '0' + n : n;
}

var localizationService = {
  formatDate,
  formatDateUTC,
  formatTime,
  formatDateTimeUTC,
  parseDateTimeISO8601,
  parseDateTime,
  parseDateTimeUTC,
  isBefore,
  isAfter,
  UTCToWallTime,
  WallTimeToUTC,
  translateToOtherCalendar,
  translateFromOtherCalendar,
  translateToLocalizedDigits,
  translateFromLocalizedDigits,
  getNumberFormat,
  duration,
  displayDuration
};

function getConfigFromAura($A) {
  return {
    getLocalizationService() {
      return $A.localizationService;
    },

    getPathPrefix() {
      return $A.getContext().getPathPrefix();
    },

    getToken(name) {
      return $A.getToken(name);
    }

  };
}

function createStandAloneConfig() {
  return {
    getLocalizationService() {
      return localizationService;
    },

    getPathPrefix() {
      return ''; // @sfdc.playground path-prefix DO-NOT-REMOVE-COMMENT
    },

    getToken() {
      return undefined; // @sfdc.playground token DO-NOT-REMOVE-COMMENT
    },

    getOneConfig() {
      return {
        densitySetting: ''
      };
    }

  };
}

function getDefaultConfig() {
  return window.$A !== undefined && window.$A.localizationService ? getConfigFromAura(window.$A) : createStandAloneConfig();
}

getDefaultConfig();

// Taken from https://github.com/jonathantneal/svg4everybody/pull/139
// Remove this iframe-in-edge check once the following is resolved https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/8323875/
const isEdgeUA = /\bEdge\/.(\d+)\b/.test(navigator.userAgent);
const inIframe = window.top !== window.self;
const isIframeInEdge = isEdgeUA && inIframe;
var isIframeInEdge$1 = registerComponent(isIframeInEdge, {
  tmpl: _tmpl$8
});

// Taken from https://git.soma.salesforce.com/aura/lightning-global/blob/999dc35f948246181510df6e56f45ad4955032c2/src/main/components/lightning/SVGLibrary/stamper.js#L38-L60
function fetchSvg(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.responseText);
        } else {
          reject(xhr);
        }
      }
    };
  });
}

// Which looks like it was inspired by https://github.com/jonathantneal/svg4everybody/blob/377d27208fcad3671ed466e9511556cb9c8b5bd8/lib/svg4everybody.js#L92-L107
// Modify at your own risk!

const newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/;
const webkitUA = /\bAppleWebKit\/(\d+)\b/;
const olderEdgeUA = /\bEdge\/12\.(\d+)\b/;
const isIE = newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537;
const supportsSvg = !isIE && !isIframeInEdge$1;
var supportsSvg$1 = registerComponent(supportsSvg, {
  tmpl: _tmpl$8
});

/**
This polyfill injects SVG sprites into the document for clients that don't
fully support SVG. We do this globally at the document level for performance
reasons. This causes us to lose namespacing of IDs across sprites. For example,
if both #image from utility sprite and #image from doctype sprite need to be
rendered on the page, both end up as #image from the doctype sprite (last one
wins). SLDS cannot change their image IDs due to backwards-compatibility
reasons so we take care of this issue at runtime by adding namespacing as we
polyfill SVG elements.

For example, given "/assets/icons/action-sprite/svg/symbols.svg#approval", we
replace the "#approval" id with "#${namespace}-approval" and a similar
operation is done on the corresponding symbol element.
**/
const svgTagName = /svg/i;

const isSvgElement = el => el && svgTagName.test(el.nodeName);

const requestCache = {};
const symbolEls = {};
const svgFragments = {};
const spritesContainerId = 'slds-svg-sprites';
let spritesEl;
function polyfill(el) {
  if (!supportsSvg$1 && isSvgElement(el)) {
    if (!spritesEl) {
      spritesEl = document.createElement('svg');
      spritesEl.xmlns = 'http://www.w3.org/2000/svg';
      spritesEl['xmlns:xlink'] = 'http://www.w3.org/1999/xlink';
      spritesEl.style.display = 'none';
      spritesEl.id = spritesContainerId;
      document.body.insertBefore(spritesEl, document.body.childNodes[0]);
    }

    Array.from(el.getElementsByTagName('use')).forEach(use => {
      // We access the href differently in raptor and in aura, probably
      // due to difference in the way the svg is constructed.
      const src = use.getAttribute('xlink:href') || use.getAttribute('href');

      if (src) {
        // "/assets/icons/action-sprite/svg/symbols.svg#approval" =>
        // ["/assets/icons/action-sprite/svg/symbols.svg", "approval"]
        const parts = src.split('#');
        const url = parts[0];
        const id = parts[1];
        const namespace = url.replace(/[^\w]/g, '-');
        const href = `#${namespace}-${id}`;

        if (url.length) {
          // set the HREF value to no longer be an external reference
          if (use.getAttribute('xlink:href')) {
            use.setAttribute('xlink:href', href);
          } else {
            use.setAttribute('href', href);
          } // only insert SVG content if it hasn't already been retrieved


          if (!requestCache[url]) {
            requestCache[url] = fetchSvg(url);
          }

          requestCache[url].then(svgContent => {
            // create a document fragment from the svgContent returned (is parsed by HTML parser)
            if (!svgFragments[url]) {
              const svgFragment = document.createRange().createContextualFragment(svgContent);
              svgFragments[url] = svgFragment;
            }

            if (!symbolEls[href]) {
              const svgFragment = svgFragments[url];
              const symbolEl = svgFragment.querySelector(`#${id}`);
              symbolEls[href] = true;
              symbolEl.id = `${namespace}-${id}`;
              spritesEl.appendChild(symbolEl);
            }
          });
        }
      }
    });
  }
}

const validNameRe = /^([a-zA-Z]+):([a-zA-Z]\w*)$/;
const underscoreRe = /_/g;
Object.assign(Object.create(null), {
  action: 'lightning.actionSprite',
  custom: 'lightning.customSprite',
  doctype: 'lightning.doctypeSprite',
  standard: 'lightning.standardSprite',
  utility: 'lightning.utilitySprite'
});
Object.assign(Object.create(null), {
  action: 'lightning.actionSpriteRtl',
  custom: 'lightning.customSpriteRtl',
  doctype: 'lightning.doctypeSpriteRtl',
  standard: 'lightning.standardSpriteRtl',
  utility: 'lightning.utilitySpriteRtl'
});
Object.assign(Object.create(null), {
  'lightning.actionSprite': '/assets/icons/action-sprite/svg/symbols.svg',
  'lightning.actionSpriteRtl': '/assets/icons/action-sprite/svg/symbols.svg',
  'lightning.customSprite': '/assets/icons/custom-sprite/svg/symbols.svg',
  'lightning.customSpriteRtl': '/assets/icons/custom-sprite/svg/symbols.svg',
  'lightning.doctypeSprite': '/assets/icons/doctype-sprite/svg/symbols.svg',
  'lightning.doctypeSpriteRtl': '/assets/icons/doctype-sprite/svg/symbols.svg',
  'lightning.standardSprite': '/assets/icons/standard-sprite/svg/symbols.svg',
  'lightning.standardSpriteRtl': '/assets/icons/standard-sprite/svg/symbols.svg',
  'lightning.utilitySprite': '/assets/icons/utility-sprite/svg/symbols.svg',
  'lightning.utilitySpriteRtl': '/assets/icons/utility-sprite/svg/symbols.svg'
});

const getMatchAtIndex = index => iconName => {
  const result = validNameRe.exec(iconName);
  return result ? result[index] : '';
};

const getCategory = getMatchAtIndex(1);
const getName = getMatchAtIndex(2);
const isValidName = iconName => validNameRe.test(iconName);
const computeSldsClass = iconName => {
  if (isValidName(iconName)) {
    const category = getCategory(iconName);
    const name = getName(iconName).replace(underscoreRe, '-');
    return `slds-icon-${category}-${name}`;
  }

  return '';
};

var dir = 'ltr';

// Cache for promises that import icon templates
const importPromises = {};
const iconTemplateCache = {};
function hasIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category);
  return !!iconTemplateCache[cacheKey];
}
function getIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category);
  return iconTemplateCache[cacheKey] || null;
}
function fetchIconLibrary(dir, category) {
  const cacheKey = makeCacheKey(dir, category); // If icon template is being requested, return the cached promise

  if (importPromises[cacheKey]) {
    return importPromises[cacheKey];
  }

  const promise = fetchIconTemplate(dir, category);
  promise.then(tmpl => {
    iconTemplateCache[cacheKey] = tmpl;
    delete importPromises[cacheKey];
  }).catch(() => {
    delete importPromises[cacheKey];
  }); // Cache the promise to import

  importPromises[cacheKey] = promise;
  return promise;
}

function makeCacheKey(dir, category) {
  return `${category}${dir}`;
} // eslint-disable-next-line @lwc/lwc/no-async-await


async function fetchIconTemplate(dir, category) {
  if (dir === 'rtl') {
    switch (category) {
      case 'utility':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesUtilityRtl-a0c1fc37.js');
          return Lib;
        }

      case 'action':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesActionRtl-72015717.js');
          return Lib;
        }

      case 'standard':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesStandardRtl-1a1855b6.js');
          return Lib;
        }

      case 'doctype':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesDoctypeRtl-42156139.js');
          return Lib;
        }

      case 'custom':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesCustomRtl-3f92668e.js');
          return Lib;
        }

      default:
        return null;
    }
  } else {
    switch (category) {
      case 'utility':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesUtility-0083f3e5.js');
          return Lib;
        }

      case 'action':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesAction-93b288cc.js');
          return Lib;
        }

      case 'standard':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesStandard-2459a9a3.js');
          return Lib;
        }

      case 'doctype':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesDoctype-74873a1f.js');
          return Lib;
        }

      case 'custom':
        {
          // eslint-disable-next-line @lwc/lwc/no-async-await
          const {
            default: Lib
          } = await import('./iconSvgTemplatesCustom-e8457423.js');
          return Lib;
        }

      default:
        return null;
    }
  }
}

class LightningPrimitiveIcon extends LightningElement {
  constructor(...args) {
    super(...args);
    this.src = void 0;
    this.svgClass = void 0;
    this.size = 'medium';
    this.variant = void 0;
    this.iconLibrary = null;
    this._iconName = null;
  }

  get iconName() {
    return this._iconName;
  }

  set iconName(value) {
    if (value !== this._iconName) {
      this._iconName = value;
      this.requestIconTemplates();
    }
  }

  get category() {
    if (isValidName(this._iconName)) {
      const [spriteName] = this._iconName.split(':');

      return spriteName;
    }

    return null;
  }

  get isReady() {
    return !!this.iconLibrary;
  } // eslint-disable-next-line @lwc/lwc/no-async-await


  async requestIconTemplates() {
    if (hasIconLibrary(dir, this.category)) {
      this.iconLibrary = getIconLibrary(dir, this.category);
      return;
    }

    if (this.category) {
      try {
        this.iconLibrary = null;
        this.iconLibrary = await fetchIconLibrary(dir, this.category);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.warn(`<lightning-primitive-icon> failed to dynamically import icon templates for ${this.category}: ${e.message}`);
      }
    }
  }

  renderedCallback() {
    if (this.isReady || this.iconName !== this.prevIconName) {
      this.prevIconName = this.iconName;
      const svgElement = this.template.querySelector('svg');
      polyfill(svgElement);
    }
  }

  render() {
    if (this.isReady) {
      // If src is present, should use default template reply on given svg src
      if (!this.src) {
        const name = this.iconName;

        if (isValidName(name)) {
          const [spriteName, iconName] = name.split(':');
          const template = this.iconLibrary[`${spriteName}_${iconName}`];

          if (template) {
            return template;
          }
        }
      }
    }

    return _tmpl$9;
  }

  get href() {
    return this.src || '';
  }

  get name() {
    return getName(this.iconName);
  }

  get normalizedSize() {
    return normalizeString(this.size, {
      fallbackValue: 'medium',
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  get normalizedVariant() {
    // NOTE: Leaving a note here because I just wasted a bunch of time
    // investigating why both 'bare' and 'inverse' are supported in
    // lightning-primitive-icon. lightning-icon also has a deprecated
    // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
    // that no classes should be applied. So this component needs to
    // support both 'bare' and 'inverse' while lightning-icon only needs to
    // support 'inverse'.
    return normalizeString(this.variant, {
      fallbackValue: '',
      validValues: ['bare', 'error', 'inverse', 'warning', 'success']
    });
  }

  get computedClass() {
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const classes = classSet(this.svgClass);

    if (normalizedVariant !== 'bare') {
      classes.add('slds-icon');
    }

    switch (normalizedVariant) {
      case 'error':
        classes.add('slds-icon-text-error');
        break;

      case 'warning':
        classes.add('slds-icon-text-warning');
        break;

      case 'success':
        classes.add('slds-icon-text-success');
        break;

      case 'inverse':
      case 'bare':
        break;

      default:
        // if custom icon is set, we don't want to set
        // the text-default class
        if (!this.src) {
          classes.add('slds-icon-text-default');
        }

    }

    if (normalizedSize !== 'medium') {
      classes.add(`slds-icon_${normalizedSize}`);
    }

    return classes.toString();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningPrimitiveIcon, {
  publicProps: {
    src: {
      config: 0
    },
    svgClass: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 3
    }
  },
  fields: ["iconLibrary", "_iconName"]
});

var _lightningPrimitiveIcon = registerComponent(LightningPrimitiveIcon, {
  tmpl: _tmpl$9
});

const stc0$7 = {
  classMap: {
    "slds-form-element__icon": true
  },
  key: 0
};
const stc1$4 = {
  "type": "button"
};
const stc2$2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 3
};
function tmpl$7($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0$7, [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: stc1$4,
    key: 1
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "svgClass": "slds-button__icon",
      "iconName": $cmp.iconName,
      "variant": "bare"
    },
    key: 2
  }), api_element("span", stc2$2, [api_text(api_dynamic_text($cmp.alternativeText))])])])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$7 = registerTemplate(tmpl$7);
tmpl$7.stylesheets = [];

var labelButtonAlternativeText = 'Help';

const POSITION_ATTR_NAME = 'data-position-id';

class BrowserWindow {
  get window() {
    if (!this._window) {
      this._window = window; // JTEST/Ingtegration: getComputedStyle may be null

      if (!this.window.getComputedStyle) {
        this.window.getComputedStyle = node => {
          return node.style;
        };
      }
    }

    return this._window;
  }

  mockWindow(value) {
    // For test, allow mock window.
    this._window = value;
  }

  get documentElement() {
    assert(this.window.document, 'Missing window.document');
    return this.window.document.documentElement;
  }

  get MutationObserver() {
    return this.window.MutationObserver;
  }

  isWindow(element) {
    return element && element.toString() === '[object Window]';
  }

}

const WindowManager = new BrowserWindow();
function isShadowRoot(node) {
  return node && node.nodeType === 11;
}

function enumerateParent(elem, stopEl, checker) {
  // document.body is not necessarily a body tag, because of the (very rare)
  // case of a frameset.
  if (!elem || elem === stopEl || elem === document.body) {
    return null;
  } // if overflow is auto and overflow-y is also auto,
  // however in firefox the opposite is not true


  try {
    // getComputedStyle throws an exception
    // if elem is not an element
    // (can happen during unrender)
    const computedStyle = WindowManager.window.getComputedStyle(elem);

    if (!computedStyle) {
      return null;
    }

    if (checker(computedStyle)) {
      return elem;
    }

    return enumerateParent(isShadowRoot(elem.parentNode) ? elem.parentNode.host : elem.parentNode, stopEl, checker);
  } catch (e) {
    return null;
  }
}

function getScrollableParent(elem, stopEl) {
  return enumerateParent(elem, stopEl, computedStyle => {
    const overflow = computedStyle['overflow-y'];
    return overflow === 'auto' || overflow === 'scroll';
  });
}
function getScrollableParentFromEventPath(eventPath) {
  var computedStyle;
  var overflow;

  for (let i = 0; i < eventPath.length; i++) {
    let element = eventPath[i];

    if (element instanceof HTMLElement) {
      computedStyle = WindowManager.window.getComputedStyle(element);
      overflow = computedStyle['overflow-y'];

      if (overflow === 'auto' || overflow === 'scroll') {
        return element;
      }
    }
  }

  return null;
}

function queryOverflowHiddenParent(elem, stopEl) {
  return enumerateParent(elem, stopEl, computedStyle => {
    return computedStyle['overflow-x'] === 'hidden' || computedStyle['overflow-y'] === 'hidden';
  });
}

function isInDom(el) {
  if (el === WindowManager.window) {
    return true;
  }

  if (!isShadowRoot(el.parentNode) && el.parentNode && el.parentNode.tagName && el.parentNode.tagName.toUpperCase() === 'BODY') {
    return true;
  }

  if (isShadowRoot(el.parentNode) && el.parentNode.host) {
    return isInDom(el.parentNode.host);
  }

  if (el.parentNode) {
    return isInDom(el.parentNode);
  }

  return false;
}
function isDomNode(obj) {
  return obj.nodeType && (obj.nodeType === 1 || obj.nodeType === 11);
}
function timeout(time) {
  return new Promise(resolve => {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      resolve();
    }, time);
  });
}
function getPositionTarget(element) {
  return element.tagName === 'TEXTAREA' ? isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode : element;
}
let lastId = 1000000;
function generateUniqueSelector() {
  return `lgcp-${lastId++}`;
}
function normalizeElement(element) {
  const selector = generateUniqueSelector();
  element.setAttribute(POSITION_ATTR_NAME, selector);
  element = // eslint-disable-next-line @lwc/lwc/no-document-query
  document.querySelector(`[${POSITION_ATTR_NAME}="${selector}"]`) || element;
  return element;
}
function normalizePosition(element, overlay, nextIndex, target, alignWidth) {
  // Set element position to fixed
  // 1. element is inside overlay
  // or 2. When element isn't align with target's width, and target's parent has overflow-x:hidden setting.
  const isFixed = overlay.isInside || !alignWidth && queryOverflowHiddenParent(target, WindowManager.window);
  element.style.position = isFixed ? 'fixed' : 'absolute';
  element.style.zIndex = nextIndex || 0; // W-8042285 For RTL, left is positive value instead of negative.

  element.style.left = '-9999px'; // Avoid flicker
  // we always position from the left, but in RTL mode Omakase swaps left and right properties.
  // To always allow positioning from the left we set right to auto so position library can do its work.

  element.style.right = 'auto';
  element.style.top = '0px'; // Avoid flicker

  return {
    element,
    overlay
  };
}
function requestAnimationFrameAsPromise() {
  return new Promise(resolve => {
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    requestAnimationFrame(() => resolve());
  });
}

const Direction = {
  Center: 'center',
  Middle: 'middle',
  Right: 'right',
  Left: 'left',
  Bottom: 'bottom',
  Top: 'top',
  Default: 'default'
};
const VerticalMap = {
  top: Direction.Top,
  bottom: Direction.Bottom,
  center: Direction.Middle
};
const HorizontalMap = {
  left: Direction.Left,
  right: Direction.Right,
  center: Direction.Center
};
const FlipMap = {
  left: Direction.Right,
  right: Direction.Left,
  top: Direction.Bottom,
  bottom: Direction.Top,
  center: Direction.Center,
  default: Direction.Right
};

function getContainerSize(parent) {
  if (parent) {
    return parent.getBoundingClientRect();
  }

  const rect = {
    width: WindowManager.window.innerWidth || document.body.clientWidth || 0,
    height: WindowManager.window.innerHeight || document.body.clientHeight || 0,
    top: 0,
    left: 0
  };
  rect.bottom = rect.height;
  rect.right = rect.width;
  return rect;
}

function normalizeDirection(direction, defaultValue) {
  return normalizeString(direction, {
    fallbackValue: defaultValue || Direction.Default,
    validValues: [Direction.Center, Direction.Right, Direction.Left, Direction.Bottom, Direction.Top, Direction.Middle, Direction.Default]
  });
}
function mapToHorizontal(value) {
  value = normalizeDirection(value, Direction.Left);
  return HorizontalMap[value];
}
function mapToVertical(value) {
  value = normalizeDirection(value, Direction.Left);
  return VerticalMap[value];
}
function flipDirection(value) {
  value = normalizeDirection(value, Direction.Left);
  return FlipMap[value];
} // TODO: Remove, not currently in use.
function checkFlipPossibility(parent, element, target, leftAsBoundary) {
  const viewPort = getContainerSize(parent);
  const windowViewPort = getContainerSize();
  const elemRect = element.getBoundingClientRect();
  const referenceElemRect = target.getBoundingClientRect();
  const height = typeof elemRect.height !== 'undefined' ? elemRect.height : elemRect.bottom - elemRect.top;
  const width = typeof elemRect.width !== 'undefined' ? elemRect.width : elemRect.right - elemRect.left; // TODO: We'll need to revisit the leftAsBoundary config property. Either we'll need a better
  // name to cover the RTL language cases and maybe open up the possibility of bounding the
  // element to the target in both the horizontal and vertical directions.
  // The boundary shrinks the available area to the edge of the target rather than the viewport.

  let rightAsBoundary = false;

  if (document.dir === 'rtl') {
    rightAsBoundary = leftAsBoundary;
    leftAsBoundary = false;
  } // Bug Fix for https://gus.lightning.force.com/lightning/r/ADM_Work__c/a07B0000008DxOhIAK/view
  // If viewport is scrollableParent, then should count the top of scrollerParent,
  // otherwise, window top is 0. no change to original logic.
  // When used in console app, console's viewport is not window, but a scrollable div, then popup can be cut off easily.
  // scrollable parent => if any parent element set overflow-y:auto, then inner element won't popup, unless use position:fix.


  const aboveSpace = referenceElemRect.top - viewPort.top - height;
  const belowSpace = viewPort.height - referenceElemRect.bottom - height; // If there is scrollable parent, always check aboveSpace > 0

  const hasSpaceAbove = aboveSpace >= 0 || parent == null && belowSpace < 0 && aboveSpace > belowSpace;
  const hasSpaceBelow = belowSpace >= 0 || aboveSpace < 0 && belowSpace > aboveSpace; // Assuming left alignment is specified this tests if:
  // - there's room to accommodate the element with right alignment
  //      - within the viewport, if parent present
  // - there's not enough room to accommodate the element with left alignment

  let shouldAlignToRight = false;

  if (parent) {
    shouldAlignToRight = referenceElemRect.right - viewPort.left >= width && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width);
  } else {
    shouldAlignToRight = referenceElemRect.right >= width && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width);
  } // Assuming right alignment is specified this tests if:
  // - there's room to accommodate the element with left alignment
  //      - within the viewport if parent present
  // - there's not enough room to accommodate the element with right alignment


  let shouldAlignToLeft = false;

  if (parent) {
    shouldAlignToLeft = referenceElemRect.left + width <= viewPort.right && referenceElemRect.right - viewPort.left - width < (leftAsBoundary ? referenceElemRect.left : 0);
  } else {
    shouldAlignToLeft = referenceElemRect.left + width <= viewPort.width && referenceElemRect.right - width < (leftAsBoundary ? referenceElemRect.left : 0);
  }

  if (!shouldAlignToLeft && !shouldAlignToRight && parent) {
    shouldAlignToRight = (referenceElemRect.right - viewPort.left >= width || referenceElemRect.right >= width) && referenceElemRect.left + width > (rightAsBoundary ? referenceElemRect.right : viewPort.width);
    shouldAlignToLeft = (referenceElemRect.left + width <= viewPort.right || referenceElemRect.left + width <= windowViewPort.width) && referenceElemRect.right - width < (leftAsBoundary ? referenceElemRect.left : 0);
  } // Assuming center alignment, does the viewport have space to fit half of the element around
  // the target?


  const centerOverflow = {
    left: referenceElemRect.left - width * 0.5 < 0,
    right: referenceElemRect.right + width * 0.5 > viewPort.width,
    top: referenceElemRect.top - height * 0.5 < 0,
    bottom: referenceElemRect.bottom + height * 0.5 > viewPort.height
  };
  return {
    shouldAlignToLeft,
    shouldAlignToRight,
    hasSpaceAbove,
    hasSpaceBelow,
    centerOverflow
  };
}

class Transformer {
  constructor(pad, boxDirections, transformX, transformY) {
    this.pad = pad || 0;
    this.boxDirections = boxDirections || {
      left: true,
      right: true
    };

    this.transformX = transformX || function () {};

    this.transformY = transformY || function () {};
  }

  transform() {// no-op
  }

}

class TopTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      top: Math.floor(this.transformY(targetBox.top, targetBox, elementBox) + this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class BottomTransFormer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      top: Math.floor(this.transformY(targetBox.top, targetBox, elementBox) - elementBox.height - this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class CenterTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) - 0.5 * elementBox.width)
    };
  }
  /*LWC compiler v2.13.3*/


}

class MiddleTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      top: Math.floor(0.5 * (2 * targetBox.top + targetBox.height - elementBox.height))
    };
  }
  /*LWC compiler v2.13.3*/


}

class LeftTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) + this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class RightTransformer extends Transformer {
  transform(targetBox, elementBox) {
    return {
      left: Math.floor(this.transformX(targetBox.left, targetBox, elementBox) - elementBox.width - this.pad)
    };
  }
  /*LWC compiler v2.13.3*/


}

class BelowTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const top = targetBox.top + targetBox.height + this.pad;
    return elementBox.top < top ? {
      top
    } : {};
  }
  /*LWC compiler v2.13.3*/


}

const MIN_HEIGHT = 36; // Minimum Line Height

const MIN_WIDTH = 36;

class ShrinkingBoxTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const retBox = {};

    if (this.boxDirections.top && elementBox.top < targetBox.top + this.pad) {
      retBox.top = targetBox.top + this.pad;
      retBox.height = Math.max(elementBox.height - (retBox.top - elementBox.top), MIN_HEIGHT);
    }

    if (this.boxDirections.left && elementBox.left < targetBox.left + this.pad) {
      retBox.left = targetBox.left + this.pad;
      retBox.width = Math.max(elementBox.width - (retBox.left - elementBox.left), MIN_WIDTH);
    }

    if (this.boxDirections.right && elementBox.left + elementBox.width > targetBox.left + targetBox.width - this.pad) {
      retBox.right = targetBox.left + targetBox.width - this.pad;
      retBox.width = Math.max(retBox.right - (retBox.left || elementBox.left), MIN_WIDTH);
    }

    if (this.boxDirections.bottom && elementBox.top + elementBox.height > targetBox.top + targetBox.height - this.pad) {
      retBox.bottom = targetBox.top + targetBox.height - this.pad;
      retBox.height = Math.max(retBox.bottom - (retBox.top || elementBox.top), MIN_HEIGHT);
    }

    return retBox;
  }
  /*LWC compiler v2.13.3*/


}

class BoundingBoxTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const retBox = {};

    if (this.boxDirections.top && elementBox.top < targetBox.top + this.pad) {
      retBox.top = targetBox.top + this.pad;
    }

    if (this.boxDirections.left && elementBox.left < targetBox.left + this.pad) {
      retBox.left = targetBox.left + this.pad;
    }

    if (this.boxDirections.right && elementBox.left + elementBox.width > targetBox.left + targetBox.width - this.pad) {
      retBox.left = targetBox.left + targetBox.width - elementBox.width - this.pad;
    }

    if (this.boxDirections.bottom && elementBox.top + elementBox.height > targetBox.top + targetBox.height - this.pad) {
      retBox.top = targetBox.top + targetBox.height - elementBox.height - this.pad;
    }

    return retBox;
  }
  /*LWC compiler v2.13.3*/


}

class InverseBoundingBoxTransformer extends Transformer {
  transform(targetBox, elementBox) {
    const retBox = {};

    if (this.boxDirections.left && targetBox.left - this.pad < elementBox.left) {
      retBox.left = targetBox.left - this.pad;
    }

    if (this.boxDirections.right && elementBox.left + elementBox.width < targetBox.left + targetBox.width + this.pad) {
      retBox.left = targetBox.width + this.pad - elementBox.width + targetBox.left;
    }

    if (this.boxDirections.top && targetBox.top < elementBox.top + this.pad) {
      retBox.top = targetBox.top - this.pad;
    }

    if (this.boxDirections.bottom && elementBox.top + elementBox.height < targetBox.top + targetBox.height + this.pad) {
      retBox.top = targetBox.height + this.pad - elementBox.height + targetBox.top;
    }

    return retBox;
  }
  /*LWC compiler v2.13.3*/


}

const TransformFunctions = {
  center(input, targetBox) {
    return Math.floor(input + 0.5 * targetBox.width);
  },

  right(input, targetBox) {
    return input + targetBox.width;
  },

  left(input) {
    return input;
  },

  bottom(input, targetBox) {
    return input + targetBox.height;
  }

};
const Transformers = {
  top: TopTransformer,
  bottom: BottomTransFormer,
  center: CenterTransformer,
  middle: MiddleTransformer,
  left: LeftTransformer,
  right: RightTransformer,
  below: BelowTransformer,
  'bounding box': BoundingBoxTransformer,
  'shrinking box': ShrinkingBoxTransformer,
  'inverse bounding box': InverseBoundingBoxTransformer,
  default: Transformer
};
function toTransformFunctions(value) {
  return TransformFunctions[value] || TransformFunctions.left;
}

class TransformBuilder {
  type(value) {
    this._type = value;
    return this;
  }

  align(horizontal, vertical) {
    this._transformX = toTransformFunctions(horizontal);
    this._transformY = toTransformFunctions(vertical);
    return this;
  }

  pad(value) {
    this._pad = parseInt(value, 10);
    return this;
  }

  boxDirections(value) {
    this._boxDirections = value;
    return this;
  }

  build() {
    const AConstructor = Transformers[this._type] ? Transformers[this._type] : Transformers[Direction.Default];
    return new AConstructor(this._pad || 0, this._boxDirections || {}, this._transformX || toTransformFunctions(Direction.left), this._transformY || toTransformFunctions(Direction.left));
  }

}

class Constraint {
  constructor(type, config) {
    const {
      target,
      element,
      pad,
      boxDirections
    } = config;
    const {
      horizontal,
      vertical
    } = config.targetAlign;
    this._element = element;
    this._targetElement = target;
    this.destroyed = false;
    this._transformer = new TransformBuilder().type(type).align(horizontal, vertical).pad(pad).boxDirections(boxDirections).build();
  }

  detach() {
    this._disabled = true;
  }

  attach() {
    this._disabled = false;
  }

  computeDisplacement() {
    if (!this._disabled) {
      this._targetElement.refresh();

      this._element.refresh();

      this._pendingBox = this._transformer.transform(this._targetElement, this._element);
    }

    return this;
  }

  computePosition() {
    const el = this._element;

    if (!this._disabled) {
      Object.keys(this._pendingBox).forEach(key => {
        el.setDirection(key, this._pendingBox[key]);
      });
    }

    return this;
  }

  destroy() {
    this._element.release();

    this._targetElement.release();

    this._disabled = true;
    this.destroyed = true;
  }

}

class ElementProxy {
  constructor(el, id) {
    this.id = id;
    this.width = 0;
    this.height = 0;
    this.left = 0;
    this.top = 0;
    this.right = 0;
    this.bottom = 0;
    this._dirty = false;
    this._node = null;
    this._releaseCb = null;

    if (!el) {
      throw new Error('Element missing');
    } // W-3262919
    // for some reason I cannot figure out sometimes the
    // window, which clearly a window object, is not the window object
    // this will correct that. It might be related to locker


    if (WindowManager.isWindow(el)) {
      el = WindowManager.window;
    }

    this._node = el;
    this.setupObserver();
    this.refresh();
  }

  setupObserver() {
    // this check is because phantomjs does not support
    // mutation observers. The consqeuence here
    // is that any browser without mutation observers will
    // fail to update dimensions if they changwe after the proxy
    // is created and the proxy is not not refreshed
    if (WindowManager.MutationObserver && !this._node.isObserved) {
      // Use mutation observers to invalidate cache. It's magic!
      this._observer = new WindowManager.MutationObserver(this.refresh.bind(this)); // do not observe the window

      if (!WindowManager.isWindow(this._node)) {
        this._observer.observe(this._node, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });

        this._node.isObserved = true;
      }
    }
  }

  setReleaseCallback(cb, scope) {
    const scopeObj = scope || this;
    this._releaseCb = cb.bind(scopeObj);
  }

  checkNodeIsInDom() {
    // if underlying DOM node is gone,
    // this proxy should be released
    if (!isInDom(this._node)) {
      return false;
    }

    return true;
  }

  refresh() {
    const w = WindowManager.window;

    if (!this.isDirty()) {
      if (!this.checkNodeIsInDom()) {
        return this.release();
      }

      let box, x, scrollTop, scrollLeft;

      if (typeof w.pageYOffset !== 'undefined') {
        scrollTop = w.pageYOffset;
        scrollLeft = w.pageXOffset;
      } else {
        scrollTop = w.scrollY;
        scrollLeft = w.scrollX;
      }

      if (!WindowManager.isWindow(this._node)) {
        // force paint
        // eslint-disable-next-line no-unused-vars
        this._node.offsetHeight;
        box = this._node.getBoundingClientRect(); // not using integers causes weird rounding errors
        // eslint-disable-next-line guard-for-in

        for (x in box) {
          this[x] = Math.floor(box[x]);
        }

        this.top = Math.floor(this.top + scrollTop);
        this.bottom = Math.floor(this.top + box.height);
        this.left = Math.floor(this.left + scrollLeft);
        this.right = Math.floor(this.left + box.width);
      } else {
        box = {};
        this.width = WindowManager.documentElement.clientWidth;
        this.height = WindowManager.documentElement.clientHeight;
        this.left = scrollLeft;
        this.top = scrollTop;
        this.right = WindowManager.documentElement.clientWidth + scrollLeft;
        this.bottom = WindowManager.documentElement.clientHeight;
      }

      this._dirty = false;
    }

    return this._dirty;
  }

  getNode() {
    return this._node;
  }

  isDirty() {
    return this._dirty;
  }

  bake() {
    const w = WindowManager.window;

    const absPos = this._node.getBoundingClientRect();

    const style = w.getComputedStyle(this._node) || this._node.style;

    const hasPageOffset = typeof w.pageYOffset !== 'undefined';
    const scrollTop = hasPageOffset ? w.pageYOffset : w.scrollY;
    const scrollLeft = hasPageOffset ? w.pageXOffset : w.scrollX;
    const originalLeft = style.left.match(/auto|fixed/) ? '0' : parseInt(style.left.replace('px', ''), 10);
    const originalTop = style.top.match(/auto|fixed/) ? '0' : parseInt(style.top.replace('px', ''), 10);
    let leftDif = Math.round(this.left - (absPos.left + scrollLeft));
    const topDif = this.top - (absPos.top + scrollTop);
    const viewPortWidth = w.innerWidth || document.body.clientWidth;
    let rightPos = parseInt(style.right, 10);

    if (originalLeft + leftDif + parseInt(style.width, 10) > viewPortWidth && rightPos <= 0) {
      rightPos = rightPos < 0 ? -rightPos : leftDif;
      this._node.style.right = -rightPos + 'px';
      leftDif = 0;
    }

    this._node.style.left = `${originalLeft + leftDif}px`;
    this._node.style.top = `${originalTop + topDif}px`;

    if (this._restoreSize) {
      // Only store the first height/width which is the original height/width.
      if (this.originalHeight === undefined) {
        this.originalHeight = this._node.style.height;
      }

      if (this.originalWidth === undefined) {
        this.originalWidth = this._node.style.width;
      }

      this._node.style.width = `${this.width}px`;
      this._node.style.height = `${this.height}px`;
    }

    this._dirty = false;
  }

  setDirection(direction, val) {
    this[direction] = val;
    this._dirty = true; // if size is changed, should restore the original size.

    if (direction === 'height' || direction === 'width') {
      this._restoreSize = true;
    }
  }

  release() {
    if (this._restoreSize) {
      this._node.style.width = this.originalWidth;
      this._node.style.height = this.originalHeight;

      if (this._removeMinHeight) {
        this._node.style.minHeight = '';
      }
    }

    if (this._releaseCb) {
      this._releaseCb(this);
    } // Due to https://github.com/salesforce/lwc/pull/1423
    // require to call disconnect explicitly.


    if (this._observer) {
      this._observer.disconnect();

      this._observer = null;
    }
  }

  querySelectorAll(selector) {
    return this._node.querySelectorAll(selector);
  }

}

class ProxyCache {
  constructor() {
    this.proxyCache = {};
  }

  get count() {
    return Object.keys(this.proxyCache).length;
  }

  releaseOrphanProxies() {
    for (const proxy in this.proxyCache) {
      if (!this.proxyCache[proxy].el.checkNodeIsInDom()) {
        this.proxyCache[proxy].el.release();
      }
    }
  }

  bakeOff() {
    for (const proxy in this.proxyCache) {
      if (this.proxyCache[proxy].el.isDirty()) {
        this.proxyCache[proxy].el.bake();
      }
    }
  }

  getReferenceCount(proxy) {
    const id = proxy.id;

    if (!id || !this.proxyCache[id]) {
      return 0;
    }

    return this.proxyCache[id].refCount;
  }

  release(proxy) {
    const proxyInstance = this.proxyCache[proxy.id];

    if (proxyInstance) {
      --proxyInstance.refCount;
    }

    if (proxyInstance && proxyInstance.refCount <= 0) {
      delete this.proxyCache[proxy.id];
    }
  }

  reset() {
    this.proxyCache = {};
  }

  create(element) {
    let key = 'window';

    if (!WindowManager.isWindow(element)) {
      key = element ? element.getAttribute(POSITION_ATTR_NAME) : null; // 1 - Node.ELEMENT_NODE, 11 - Node.DOCUMENT_FRAGMENT_NODE

      assert(key && element.nodeType && (element.nodeType !== 1 || element.nodeType !== 11), `Element Proxy requires an element and has property ${POSITION_ATTR_NAME}`);
    }

    if (this.proxyCache[key]) {
      this.proxyCache[key].refCount++;
      return this.proxyCache[key].el;
    }

    const newProxy = new ElementProxy(element, key);
    newProxy.setReleaseCallback(release, newProxy);
    this.proxyCache[key] = {
      el: newProxy,
      refCount: 1
    }; // run GC

    timeout(0).then(() => {
      this.releaseOrphanProxies();
    });
    return this.proxyCache[key].el;
  }

}

registerDecorators(ProxyCache, {
  fields: ["proxyCache"]
});

const elementProxyCache = new ProxyCache();
function bakeOff() {
  elementProxyCache.bakeOff();
}
function release(proxy) {
  return elementProxyCache.release(proxy);
}
function createProxy(element) {
  return elementProxyCache.create(element);
}

class RepositionQueue {
  constructor() {
    this.callbacks = [];
    this.repositionScheduled = false;
    this._constraints = [];
    this.timeoutId = 0;
    this.lastIndex = getZIndexBaseline();
    this.eventsBound = false;
  }

  get nextIndex() {
    return this.lastIndex++;
  }

  get constraints() {
    return this._constraints;
  }

  set constraints(value) {
    this._constraints = this._constraints.concat(value);
  }

  dispatchRepositionCallbacks() {
    while (this.callbacks.length > 0) {
      this.callbacks.shift()();
    }
  }

  add(callback) {
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
      return true;
    }

    return false;
  }

  scheduleReposition(callback) {
    if (this.timeoutId === 0) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      this.timeoutId = setTimeout(() => {
        this.reposition(callback);
      }, 10);
    }
  }

  reposition(callback) {
    // all the callbacks will be called
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
    } // this is for throttling


    clearTimeout(this.timeoutId);
    this.timeoutId = 0; // this semaphore is to make sure
    // if reposition is called twice within one frame
    // we only run this once

    if (!this.repositionScheduled) {
      // eslint-disable-next-line @lwc/lwc/no-async-operation
      requestAnimationFrame(() => {
        this.repositionScheduled = false; // this must be executed in order or constraints
        // will behave oddly

        this._constraints = this._constraints.filter(constraint => {
          if (!constraint.destroyed) {
            constraint.computeDisplacement().computePosition();
            return true;
          }

          return false;
        });
        bakeOff();
        this.dispatchRepositionCallbacks();
      });
      this.repositionScheduled = true;
    }
  }

  get repositioning() {
    if (!this._reposition) {
      this._reposition = this.scheduleReposition.bind(this);
    }

    return this._reposition;
  }

  bindEvents() {
    if (!this.eventsBound) {
      window.addEventListener('resize', this.repositioning);
      window.addEventListener('scroll', this.repositioning);
      this.eventsBound = true;
    }
  }

  detachEvents() {
    window.removeEventListener('resize', this.repositioning);
    window.removeEventListener('scroll', this.repositioning);
    this.eventsBound = false;
  }

  rebase(index) {
    if (this.lastIndex <= index) {
      this.lastIndex = index + 1;
    }
  }

}

registerDecorators(RepositionQueue, {
  fields: ["callbacks", "repositionScheduled", "_constraints", "timeoutId", "lastIndex", "eventsBound"]
});

const positionQueue = new RepositionQueue();
function scheduleReposition(callback) {
  positionQueue.scheduleReposition(callback);
}
function bindEvents() {
  positionQueue.bindEvents();
}
function addConstraints(list) {
  positionQueue.constraints = list;
}
function reposition(callback) {
  positionQueue.reposition(callback);
}
function nextIndex() {
  return positionQueue.nextIndex;
}
function rebaseIndex(index) {
  return positionQueue.rebase(index);
}

class Relationship {
  constructor(config, constraintList, scrollableParent, observer) {
    this.config = config;
    this.constraintList = constraintList;
    this.scrollableParent = scrollableParent;
    this.observer = observer;
  }

  disable() {
    this.constraintList.forEach(constraintToDisable => {
      constraintToDisable.detach();
    });
  }

  enable() {
    this.constraintList.forEach(constraintToEnable => {
      constraintToEnable.attach();
    });
  }

  destroy() {
    if (this.config.removeListeners) {
      this.config.removeListeners();
      this.config.removeListeners = undefined;
    }

    while (this.constraintList.length > 0) {
      this.constraintList.pop().destroy();
    } // Clean up node appended to body of dom


    if (this.config.appendToBody && this.config.element) {
      // eslint-disable-next-line @lwc/lwc/no-document-query
      const nodeToRemove = document.querySelector(`[${POSITION_ATTR_NAME}="${this.config.element.getAttribute(POSITION_ATTR_NAME)}"]`);

      if (nodeToRemove) {
        nodeToRemove.parentNode.removeChild(nodeToRemove);
      }
    } // Due to https://github.com/salesforce/lwc/pull/1423
    // require to call disconnect explicitly.


    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  reposition() {
    return new Promise(resolve => {
      reposition(() => {
        resolve();
      });
    });
  }

}

const OVERLAY_TYPE = {
  NONE: 'none',
  MODAL: 'uiModal',
  DIALOG: 'lightning-dialog',
  POPOVER: 'lightning-popover',
  PANEL: 'uiPanel'
};
function isOverlay(element) {
  const isDialog = element.localName === OVERLAY_TYPE.DIALOG;

  if (isDialog) {
    return OVERLAY_TYPE.DIALOG;
  }

  const isPopover = element.localName === OVERLAY_TYPE.POPOVER;

  if (isPopover) {
    return OVERLAY_TYPE.POPOVER;
  }

  const isModal = element.classList && element.classList.contains(OVERLAY_TYPE.MODAL);

  if (isModal) {
    return OVERLAY_TYPE.MODAL;
  }

  const isPanel = element.classList && element.classList.contains(OVERLAY_TYPE.PANEL);

  if (isPanel) {
    return OVERLAY_TYPE.PANEL;
  }

  return OVERLAY_TYPE.NONE;
}

function isInsideOverlay(element) {
  if (!element) {
    return {
      isInside: false,
      type: null,
      overlay: null
    };
  }

  const type = isOverlay(element);

  if (type !== OVERLAY_TYPE.NONE) {
    return {
      isInside: true,
      type,
      overlay: element
    };
  }

  if (!element.parentNode) {
    return {
      isInside: false,
      type: null,
      overlay: null
    };
  }

  return isInsideOverlay(isShadowRoot(element.parentNode) ? element.parentNode.host : element.parentNode);
}

class OverlayDetector {
  constructor(element) {
    this._element = element;
    this._detection = isInsideOverlay(this._element) || {
      isInside: false,
      overlay: null
    };
  }

  get isInsideModal() {
    return this.isInside && (this._detection.type === OVERLAY_TYPE.MODAL || this._detection.type === OVERLAY_TYPE.DIALOG);
  }

  get isInside() {
    return this._detection.isInside;
  }

  get overlay() {
    return this._detection.overlay;
  }

}

const DEFAULT_MIN_HEIGHT = '1.875rem';

function setupObserver(config, scrollableParent) {
  const observedElement = config.element;
  let observer = null;

  if (WindowManager.MutationObserver && !observedElement.isObserved) {
    observer = new WindowManager.MutationObserver(() => {});
    observer.observe(observedElement, {
      attributes: true,
      subtree: true,
      childList: true
    });
    observedElement.isObserved = true;
  }

  if (scrollableParent) {
    scrollableParent.addEventListener('scroll', scheduleReposition);

    config.removeListeners = () => {
      scrollableParent.removeEventListener('scroll', scheduleReposition);
    };
  }

  return observer;
}

function validateConfig(config) {
  assert(config.element && isDomNode(config.element), 'Element is undefined or missing, or not a Dom Node');
  assert(config.target && (WindowManager.isWindow(config.target) || isDomNode(config.target)), 'Target is undefined or missing');
}

function createRelationship(originalConfig, disableReposition, eventComposedPath) {
  bindEvents();
  let scrollableParent = getScrollableParent(getPositionTarget(originalConfig.target), WindowManager.window);

  if (!scrollableParent && eventComposedPath) {
    scrollableParent = getScrollableParentFromEventPath(eventComposedPath);
  }

  const config = normalizeConfig(scrollableParent, originalConfig);

  if (config.alignWidth && config.element.style.position === 'fixed') {
    config.element.style.width = config.target.getBoundingClientRect().width + 'px';
  }

  const constraintList = []; // This observer and the test for scrolling children
  // is so that if a panel contains a scroll we do not
  // proxy the events to the "parent"  (actually the target's parent)

  const observer = setupObserver(config, scrollableParent);

  if (config.appendToBody) {
    document.body.appendChild(config.element);
  }

  config.element = createProxy(config.element);
  config.target = createProxy(config.target); // Add horizontal constraint.

  const horizontalConfig = Object.assign({}, config);

  if (horizontalConfig.padLeft !== undefined) {
    horizontalConfig.pad = horizontalConfig.padLeft;
  } // Add vertical constraint.


  const verticalConfig = Object.assign({}, config);

  if (verticalConfig.padTop !== undefined) {
    verticalConfig.pad = verticalConfig.padTop;
  }

  constraintList.push(new Constraint(mapToHorizontal(config.align.horizontal), horizontalConfig));
  constraintList.push(new Constraint(mapToVertical(config.align.vertical), verticalConfig));
  const autoShrink = config.autoShrink.height || config.autoShrink.width;

  if (config.scrollableParentBound && scrollableParent) {
    const parent = normalizeElement(scrollableParent);
    const boxConfig = {
      element: config.element,
      enabled: config.enabled,
      target: createProxy(parent),
      align: {},
      targetAlign: {},
      pad: 3,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    };

    if (autoShrink) {
      const style = boxConfig.element.getNode().style;

      if (!style.minHeight) {
        style.minHeight = config.minHeight;
        boxConfig.element._removeMinHeight = true;
      }

      boxConfig.boxDirections = {
        top: !!config.autoShrink.height,
        bottom: !!config.autoShrink.height,
        left: !!config.autoShrink.width,
        right: !!config.autoShrink.width
      };
      constraintList.push(new Constraint('shrinking box', boxConfig));
    } else {
      constraintList.push(new Constraint('bounding box', boxConfig));
    }
  }

  if (config.keepInViewport) {
    constraintList.push(new Constraint('bounding box', {
      element: config.element,
      enabled: config.enabled,
      target: createProxy(window),
      align: {},
      targetAlign: {},
      pad: 3,
      boxDirections: {
        top: true,
        bottom: true,
        left: true,
        right: true
      }
    }));
  }

  addConstraints(constraintList);

  if (!disableReposition) {
    reposition();
  }

  return new Relationship(config, constraintList, scrollableParent, observer);
}

function isAutoFlipHorizontal(config) {
  return config.autoFlip || config.autoFlipHorizontal;
}

function isAutoFlipVertical(config) {
  return config.autoFlip || config.autoFlipVertical;
}

function normalizeAlignments(config, flipConfig) {
  const align = {
    horizontal: config.align.horizontal,
    vertical: config.align.vertical
  };
  const targetAlign = {
    horizontal: config.targetAlign.horizontal,
    vertical: config.targetAlign.vertical
  }; // Horizontal alignments flip for RTL languages.

  if (document.dir === 'rtl') {
    align.horizontal = flipDirection(align.horizontal);
    targetAlign.horizontal = flipDirection(targetAlign.horizontal);
  } // When using the autoFlip flags with center alignment, we change the element alignment to fit
  // within the viewport when it's detected that it overflows the edge of the viewport.


  let vFlip = false;

  if (isAutoFlipVertical(config)) {
    if (align.vertical === Direction.Bottom) {
      vFlip = !flipConfig.hasSpaceAbove && flipConfig.hasSpaceBelow;
    } else if (align.vertical === Direction.Top) {
      vFlip = flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow;
    } else if (align.vertical === Direction.Center) {
      if (flipConfig.centerOverflow.top && !flipConfig.centerOverflow.bottom) {
        align.vertical = targetAlign.vertical = Direction.Top;
      } else if (flipConfig.centerOverflow.bottom && !flipConfig.centerOverflow.top) {
        align.vertical = targetAlign.vertical = Direction.Bottom;
      }
    }
  }

  let hFlip = false;

  if (isAutoFlipHorizontal(config)) {
    if (align.horizontal === Direction.Left) {
      hFlip = flipConfig.shouldAlignToRight && !flipConfig.shouldAlignToLeft;
    } else if (align.horizontal === Direction.Right) {
      hFlip = flipConfig.shouldAlignToLeft && !flipConfig.shouldAlignToRight;
    } else if (align.horizontal === Direction.Center) {
      if (flipConfig.centerOverflow.left && !flipConfig.centerOverflow.right) {
        align.horizontal = targetAlign.horizontal = Direction.Left;
      } else if (flipConfig.centerOverflow.right && !flipConfig.centerOverflow.left) {
        align.horizontal = targetAlign.horizontal = Direction.Right;
      }
    }
  }

  return {
    align: {
      horizontal: hFlip ? flipDirection(align.horizontal) : normalizeDirection(align.horizontal, Direction.Left),
      vertical: vFlip ? flipDirection(align.vertical) : normalizeDirection(align.vertical, Direction.Top)
    },
    targetAlign: {
      horizontal: hFlip ? flipDirection(targetAlign.horizontal) : normalizeDirection(targetAlign.horizontal, Direction.Left),
      vertical: vFlip ? flipDirection(targetAlign.vertical) : normalizeDirection(targetAlign.vertical, Direction.Bottom)
    }
  };
}

function normalizeConfig(parent, config) {
  config.align = config.align || {};
  config.targetAlign = config.targetAlign || {};
  const flipConfig = checkFlipPossibility(config.overlay.isInside ? null : parent, // For modal/panel, dialog/popover, should always popup.
  // And consider window is the viewport, ignore scrollable parent.
  // Otherwise, when stay on flat page, should use scrollable parent as viewpoint.
  config.element, config.target, config.leftAsBoundary);
  const {
    align,
    targetAlign
  } = normalizeAlignments(config, flipConfig); // When inside modal, element may expand out of the viewport and be cut off.
  // So if inside modal, and don't have enough space above or below, will add bounding box rule.
  // IMPORTANT: config.isInsideModal is for element, not target.

  if (config.isInsideModal && !flipConfig.hasSpaceAbove && !flipConfig.hasSpaceBelow) {
    config.scrollableParentBound = true;
  }

  return {
    target: config.target,
    element: config.element,
    align,
    targetAlign,
    alignWidth: config.alignWidth,
    scrollableParentBound: config.scrollableParentBound,
    keepInViewport: config.keepInViewport,
    pad: config.pad,
    padTop: config.padTop,
    padLeft: config.padLeft,
    autoShrink: {
      height: config.autoShrink || config.autoShrinkHeight,
      width: config.autoShrink || config.autoShrinkWidth
    },
    minHeight: config.minHeight || DEFAULT_MIN_HEIGHT
  };
}

function toElement(root, target) {
  if (target && typeof target === 'string') {
    return root.querySelector(target);
  } else if (target && typeof target === 'function') {
    return target();
  }

  return target;
}

function startPositioning(root, config, disableReposition) {
  assert(root, 'Root is undefined or missing');
  assert(config, 'Config is undefined or missing');
  const node = normalizeElement(root);
  const target = toElement(node, config.target);
  const element = toElement(node, config.element); // when target/element is selector, there is chance, dom isn't present anymore.

  if (!target || !element) {
    return null;
  }

  config.target = normalizeElement(target);
  config.element = normalizeElement(element); // Check if element is inside modal overlay.

  const result = new OverlayDetector(config.element); // IMPORTANT: config.isInsideModal will be used to decide if element should use modal as viewport.

  config.isInsideModal = result.isInsideModal; // stackManager will increase the zIndex too.
  // if detect inside modal, read modal zIndex and rebase to it.

  if (config.isInsideModal && result.overlay) {
    const index = parseInt(result.overlay.style.zIndex, 10);
    rebaseIndex(index);
  } // Also should check if target inside modal too.


  const targetResult = new OverlayDetector(config.target); // if detect target is inside modal, read modal zindex and rebase to it.
  // for example, lightning-helptext, lightning-primitive-bubble by default is global.
  // So it won't be in any modal. For other use case, target and element is inside same modal.

  if (targetResult.isInsideModal && targetResult.overlay) {
    const index = parseInt(targetResult.overlay.style.zIndex, 10);
    rebaseIndex(index);
  } // Element absolute / fixed must be set prior to getBoundingClientRect call or
  // the scrollable parent (usually due to uiModal/uiPanel) will push the page down.


  const overlayCheck = normalizePosition(config.element, result, nextIndex(), config.target, config.alignWidth);
  config.element = overlayCheck.element;
  config.overlay = overlayCheck.overlay;
  validateConfig(config);
  const relationship = createRelationship(config, disableReposition); // Scroll regions within a shadowRoot are skipped while traversing parent nodes.
  // Components that contain a scroll region in their template
  // must handle the `privatescrollablecontainer` event and execute the callback with the event path.
  // The event path is used to find the scrollable parent and the constraints
  // for positioning are set according to this element.
  // Usage in parent component with scroll region:
  // addEventListener('privatescrollablecontainer', (event) => {
  //     const { callback } = event.detail;
  //     callback(event.composedPath());
  //     event.stopPropagation();
  // });

  root.dispatchEvent(new CustomEvent('privatescrollablecontainer', {
    composed: true,
    bubbles: true,
    detail: {
      callback: eventComposedPath => {
        var updatedReltnWrtoScrollParent = createRelationship(config, disableReposition, eventComposedPath);
        relationship.config.align.horizontal = updatedReltnWrtoScrollParent.config.align.horizontal;
        relationship.config.align.vertical = updatedReltnWrtoScrollParent.config.align.vertical;
      }
    }
  }));
  return relationship;
}
function stopPositioning(relationship) {
  if (relationship) {
    relationship.destroy();
  }
}
class AutoPosition {
  constructor(root) {
    this._autoPositionUpdater = null;
    this._root = root;
  }

  start(config) {
    return requestAnimationFrameAsPromise().then(() => {
      let promise = Promise.resolve();

      if (!this._autoPositionUpdater) {
        this._autoPositionUpdater = startPositioning(this._root, config);
      } else {
        promise = promise.then(() => {
          return this._autoPositionUpdater.reposition();
        });
      }

      return promise.then(() => {
        return this._autoPositionUpdater;
      });
    });
  }

  stop() {
    if (this._autoPositionUpdater) {
      stopPositioning(this._autoPositionUpdater);
      this._autoPositionUpdater = null;
    }

    return Promise.resolve();
  }

}

registerDecorators(AutoPosition, {
  fields: ["_autoPositionUpdater"]
});

const stc0$6 = {
  "slds-popover__body": true
};
const stc1$3 = {
  lwc: {
    dom: "manual"
  }
};
function tmpl$6($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", {
    classMap: stc0$6,
    context: stc1$3,
    key: 0,
    on: {
      "mouseleave": _m0 || ($ctx._m0 = api_bind($cmp.handleMouseLeave))
    }
  })];
  /*LWC compiler v2.13.3*/
}
var _tmpl$6 = registerTemplate(tmpl$6);
tmpl$6.stylesheets = [];

const DEFAULT_ALIGN = {
  horizontal: 'left',
  vertical: 'bottom'
};

class LightningPrimitiveBubble extends LightningElement {
  constructor(...args) {
    super(...args);
    this.state = {
      visible: false,
      contentId: ''
    };
    this.divElement = void 0;
  }

  get contentId() {
    return this.state.contentId;
  }

  set contentId(value) {
    this.state.contentId = value;

    if (this.state.inDOM) {
      this.divEl.setAttribute('id', this.state.contentId);
    }
  }

  connectedCallback() {
    this.updateClassList();
    this.setAttribute('role', 'tooltip');
    this.state.inDOM = true;
  }

  disconnectedCallback() {
    this.state.inDOM = false;
  }

  renderedCallback() {
    // set content manually once rendered
    // - this is required to avoid the content update being in the wrong 'tick'
    this.setContentManually();
    this.setIdManually();
  }

  set content(value) {
    this.state.content = value;

    if (this.state.inDOM) {
      this.setContentManually();
    }
  }

  get content() {
    return this.state.content || '';
  }

  get align() {
    return this.state.align || DEFAULT_ALIGN;
  }

  set align(value) {
    this.state.align = value;
    this.updateClassList();
  }

  get visible() {
    return this.state.visible;
  }

  set visible(value) {
    this.state.visible = value;
    this.updateClassList();
  }

  setIdManually() {
    this.setAttribute('id', this.state.contentId);
  } // manually set the content value


  setContentManually() {
    /* manipulate DOM directly */
    this.template.querySelector('.slds-popover__body').textContent = this.state.content;
  } // compute class value for this bubble


  updateClassList() {
    const classes = classSet('slds-popover').add('slds-popover_tooltip'); // show or hide bubble

    classes.add({
      'slds-rise-from-ground': this.visible,
      'slds-fall-into-ground': !this.visible
    }); // apply the proper nubbin CSS class

    const {
      horizontal,
      vertical
    } = this.align;
    classes.add({
      'slds-nubbin_top-left': horizontal === 'left' && vertical === 'top',
      'slds-nubbin_top-right': horizontal === 'right' && vertical === 'top',
      'slds-nubbin_bottom-left': horizontal === 'left' && vertical === 'bottom',
      'slds-nubbin_bottom-right': horizontal === 'right' && vertical === 'bottom',
      'slds-nubbin_bottom': horizontal === 'center' && vertical === 'bottom',
      'slds-nubbin_top': horizontal === 'center' && vertical === 'top',
      'slds-nubbin_left': horizontal === 'left' && vertical === 'center',
      'slds-nubbin_right': horizontal === 'right' && vertical === 'center'
    });
    classListMutation(this.classList, classes);
  }

  handleMouseLeave() {
    this.visible = false;
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningPrimitiveBubble, {
  publicProps: {
    contentId: {
      config: 3
    },
    content: {
      config: 3
    },
    align: {
      config: 3
    },
    visible: {
      config: 3
    }
  },
  track: {
    state: 1
  },
  fields: ["divElement"]
});

var LightningPrimitiveBubble$1 = registerComponent(LightningPrimitiveBubble, {
  tmpl: _tmpl$6
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const BUBBLE_PREFIX = `salesforce-lightning-tooltip-bubble`;
const BUBBLE_ID = `${BUBBLE_PREFIX}_${guid()}`;

function isResizeObserverSupported() {
  return window.ResizeObserver != null;
}

function buildResizeObserver(callback) {
  if (isResizeObserverSupported()) {
    return new ResizeObserver(callback);
  }

  return {
    observe() {},

    unobserve() {}

  };
}
/**
 * Shared instance of a primitive bubble used as a tooltip by most components. This was originally
 * defined in the helptext component which is where the minWidth style came from.
 * TODO: We may want to revisit the minWidth style with the PO and/or UX.
 */


let CACHED_BUBBLE_ELEMENT;

function getCachedBubbleElement() {
  if (!CACHED_BUBBLE_ELEMENT) {
    CACHED_BUBBLE_ELEMENT = createElement('lightning-primitive-bubble', {
      is: LightningPrimitiveBubble$1
    });
    CACHED_BUBBLE_ELEMENT.contentId = BUBBLE_ID;
    CACHED_BUBBLE_ELEMENT.style.position = 'absolute';
    CACHED_BUBBLE_ELEMENT.style.minWidth = '75px'; // hide bubble element on create

    CACHED_BUBBLE_ELEMENT.classList.add('slds-hide');
    CACHED_BUBBLE_ELEMENT.addEventListener('transitionend', () => {
      // W-7201022 https://gus.lightning.force.com/lightning/r/ADM_Work__c/a07B00000079kNjIAI/view
      // The tooltip uses absolute positioning and visibility gets set to hidden to
      // hide it from view which means it's still part of the document layout.
      // If we don't hide the bubble it could stay on the page and accidentally scroll pages
      // in the console app after a tab switch, especially when the tab content lengths differ.
      if (!CACHED_BUBBLE_ELEMENT.visible) {
        CACHED_BUBBLE_ELEMENT.classList.add('slds-hide');
      }
    });
  }

  return CACHED_BUBBLE_ELEMENT;
}

const ARIA_DESCRIBEDBY$1 = 'aria-describedby';
/**
 * Used as a position offset to compensate for the nubbin. The dimensions of the nubbin are not
 * included in the position library bounding box calculations. This is the size in pixels of the
 * nubbin.
 * TODO: We may want to measure this instead in cases it changes.
 */

const NUBBIN_SIZE = 16;
/**
 * Used in the calculation that moves the tooltip to a location that places the nubbin at the
 * center of the target element. This is the nubbin offset from the edge of the bubble in pixels
 * when using slds-nubbin_bottom-left or slds-nubbin_bottom-right.
 * TODO: We may want to measure this instead in case it changes.
 */

const NUBBIN_OFFSET = 24;
/**
 * Known tooltip types:
 * - info: used in cases where target already has click handlers such as button-icon
 * - toggle: used in cases where target only shows a tooltip such as helptext
 */

const TooltipType = {
  Info: 'info',
  Toggle: 'toggle'
};
/**
 * Allows us to attach a tooltip to components. Typical usage is as follows:
 * - Create an instance of Tooltip
 * - Call Tooltip.initialize() to add the appropriate listeners to the element that needs a tooltip
 * See buttonIcon and buttonMenu for example usage.
 */

class Tooltip {
  /**
   * A shared instance of primitiveBubble is used when an element is not specified in the config
   * object.
   * @param {string} value the content of the tooltip
   * @param {object} config specifies the root component, target element of the tooltip
   */
  constructor(value, config) {
    this._autoPosition = null;
    this._disabled = true;
    this._initialized = false;
    this._visible = false;
    this._config = {};
    assert(config.target, 'target for tooltip is undefined or missing');
    this.value = value;
    this._root = config.root;
    this._target = config.target;
    this._config = _objectSpread$1({}, config);
    this._config.align = config.align || {};
    this._config.targetAlign = config.targetAlign || {};
    this._type = normalizeString(config.type, {
      fallbackValue: TooltipType.Info,
      validValues: Object.values(TooltipType)
    }); // If a tooltip element is not given, fall back on the globally shared instance.

    this._element = config.element;

    if (!this._element) {
      this._element = getCachedBubbleElement;
      const bubbleElement = getCachedBubbleElement();

      if (bubbleElement.parentNode === null) {
        document.body.appendChild(bubbleElement);
      }
    }

    this.handleDocumentTouch = this.handleDocumentTouch.bind(this);
  }
  /**
   * Disables the tooltip.
   */


  detach() {
    this._disabled = true;
  }
  /**
   * Enables the tooltip.
   */


  attach() {
    this._disabled = false;
  }
  /**
   * Adds the appropriate event listeners to the target element to make the tooltip appear. Also
   * links the tooltip and target element via the aria-describedby attribute for screen readers.
   */


  initialize() {
    const target = this._target();

    if (!this._initialized && target) {
      switch (this._type) {
        case TooltipType.Toggle:
          this.addToggleListeners();
          break;

        case TooltipType.Info:
        default:
          this.addInfoListeners();
          break;
      }

      const ariaDescribedBy = normalizeAriaAttribute([target.getAttribute(ARIA_DESCRIBEDBY$1), this._element().contentId]);
      target.setAttribute(ARIA_DESCRIBEDBY$1, ariaDescribedBy);
      this._initialized = true;
    }
  }

  addInfoListeners() {
    const target = this._target();

    if (!this._initialized && target) {
      ['mouseenter', 'focus'].forEach(name => target.addEventListener(name, () => this.show())); // Unlike the tooltip in Aura, we want clicks and keys to dismiss the tooltip.

      ['mouseleave', 'blur', 'click', 'keydown'].forEach(name => target.addEventListener(name, event => this.hideIfNotSelfCover(event)));
    }
  }

  hideIfNotSelfCover(event) {
    if (event.type === 'mouseleave' && event.clientX && event.clientY) {
      // In any chance, if mouseleave is caused by tooltip itself, it would means
      // tooltip cover the target which mostly caused by dynamic resize of tooltip by CSS or JS.
      try {
        const elementMouseIsOver = document.elementFromPoint ? document.elementFromPoint(event.clientX, event.clientY) : null;

        if (elementMouseIsOver === this._element()) {
          if (!isResizeObserverSupported()) {
            this.startPositioning();
          }

          return;
        }
      } catch (ex) {// Jest Throw Exception
      }
    }

    this.hide();
  }

  handleDocumentTouch() {
    if (this._visible) {
      this.hide();
    }
  }

  addToggleListeners() {
    const target = this._target();

    if (!this._initialized && target) {
      target.addEventListener('touchstart', e => {
        e.stopPropagation();
        this.toggle();
      });
      ['mouseenter', 'focus'].forEach(name => target.addEventListener(name, () => this.show()));
      ['mouseleave', 'blur'].forEach(name => target.addEventListener(name, event => this.hideIfNotSelfCover(event)));
    }
  }

  get resizeObserver() {
    if (!this._resizeObserver) {
      this._resizeObserver = buildResizeObserver(() => {
        if (this._visible && this._autoPosition) {
          this.startPositioning();
        }
      });
    }

    return this._resizeObserver;
  }

  show() {
    if (this._disabled) {
      return;
    }

    this._visible = true;

    const tooltip = this._element();
    /* We only change the visibility of the cached bubble element here,
       for custom bubble elements, we expect them to react to `visible`
       property change */


    if (CACHED_BUBBLE_ELEMENT) {
      // Show cached bubble element
      CACHED_BUBBLE_ELEMENT.classList.remove('slds-hide');
    }

    tooltip.content = this._value;
    this.startPositioning();
    document.addEventListener('touchstart', this.handleDocumentTouch);
    this.resizeObserver.observe(tooltip);
  }

  hide() {
    this._visible = false;

    const tooltip = this._element();

    tooltip.visible = this._visible;
    this.stopPositioning();
    document.removeEventListener('touchstart', this.handleDocumentTouch);
    this.resizeObserver.unobserve(tooltip);
  }

  toggle() {
    if (this._visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    this._disabled = !value;
  }

  get initialized() {
    return this._initialized;
  }

  get visible() {
    return this._visible;
  }

  startPositioning() {
    if (!this._autoPosition) {
      this._autoPosition = new AutoPosition(this._root);
    } // The lightning-helptext component was originally left aligned.


    const align = {
      horizontal: this._config.align.horizontal || Direction.Left,
      vertical: this._config.align.vertical || Direction.Bottom
    };
    const targetAlign = {
      horizontal: this._config.targetAlign.horizontal || Direction.Left,
      vertical: this._config.targetAlign.vertical || Direction.Top
    }; // Pads the tooltip so its nubbin is at the center of the target element.

    const targetBox = this._target().getBoundingClientRect();

    const padLeft = targetBox.width * 0.5 - NUBBIN_OFFSET;

    this._autoPosition.start({
      target: this._target,
      element: this._element,
      align,
      targetAlign,
      autoFlip: true,
      padTop: NUBBIN_SIZE,
      padLeft
    }).then(autoPositionUpdater => {
      // The calculation above may have flipped the alignment of the tooltip. When the
      // tooltip changes alignment we need to update the nubbin class to have it draw in
      // the appropriate place.
      if (autoPositionUpdater) {
        const tooltip = this._element();

        tooltip.align = autoPositionUpdater.config.align;
        tooltip.visible = this._visible;
      }
    });
  }

  stopPositioning() {
    if (this._autoPosition) {
      this._autoPosition.stop();
    }
  }

}

registerDecorators(Tooltip, {
  fields: ["_autoPosition", "_disabled", "_initialized", "_visible", "_config"]
});

const DEFAULT_BUTTON_ALT_TEXT = labelButtonAlternativeText;
const DEFAULT_ICON_NAME = 'utility:info';
const DEFAULT_ICON_VARIANT = 'bare';
/**
 * An icon with a text popover used for tooltips.
 */

class LightningHelptext extends LightningElement {
  constructor(...args) {
    super(...args);
    this.state = {
      iconName: DEFAULT_ICON_NAME,
      iconVariant: DEFAULT_ICON_VARIANT,
      alternativeText: DEFAULT_BUTTON_ALT_TEXT
    };
    this._tooltip = null;
  }

  /**
   * Text to be shown in the popover.
   * @type {string}
   * @param {string} value - The plain text string for the tooltip
   */
  get content() {
    return this._tooltip ? this._tooltip.value : undefined;
  }

  set content(value) {
    if (this._tooltip) {
      this._tooltip.value = value;
    } else if (value) {
      // Note that because the tooltip target is a child element it may not be present in the
      // dom during initial rendering.
      this._tooltip = new Tooltip(value, {
        root: this,
        target: () => this.template.querySelector('button'),
        type: TooltipType.Toggle
      });

      this._tooltip.initialize();
    }
  }

  set iconName(value) {
    this.state.iconName = value;
  }
  /**
   * The Lightning Design System name of the icon used as the visible element.
   * Names are written in the format 'utility:info' where 'utility' is the category,
   * and 'info' is the specific icon to be displayed.
   * The default is 'utility:info'.
   * @type {string}
   * @param {string} value the icon name to use
   * @default utility:info
   */


  get iconName() {
    if (isValidName(this.state.iconName)) {
      return this.state.iconName;
    }

    return DEFAULT_ICON_NAME;
  }

  set iconVariant(value) {
    this.state.iconVariant = value;
  }
  /**
   * Changes the appearance of the icon.
   * Accepted variants include inverse, warning, error.
   * @type {string}
   * @param {string} value the icon variant to use
   * @default bare
   */


  get iconVariant() {
    // NOTE: Leaving a note here because I just wasted a bunch of time
    // investigating why both 'bare' and 'inverse' are supported in
    // lightning-primitive-icon. lightning-icon also has a deprecated
    // 'bare', but that one is synonymous to 'inverse'. This 'bare' means
    // that no classes should be applied. So this component needs to
    // support both 'bare' and 'inverse' while lightning-icon only needs to
    // support 'inverse'.
    return normalizeString(this.state.iconVariant, {
      fallbackValue: DEFAULT_ICON_VARIANT,
      validValues: ['bare', 'error', 'inverse', 'warning']
    });
  }
  /**
   * The assistive text for the button icon. The default is "Help".
   * Screen readers announce the assistive text and help text content as {alternativeText} button {content}.
   * If not set, screen readers announce "Help button {content}".
   * The text should describe the function of the icon, for example, "Show help text".
   *
   * @type {string}
   * @param {string} value The assistive text to set
   * @default Help
   */


  get alternativeText() {
    return this.state.alternativeText;
  }

  set alternativeText(value) {
    // typeof 'string' check prevents <lightning-helptext alternative-text>
    //   from setting 'true' as the a11y help text
    // lwc treats above alternative-text as: true (typeof 'boolean')
    //   we want to prevent 'true' or empty string as a11y text, instead default to 'Help'
    if (value && typeof value === 'string' && value.trim() !== '') {
      this.state.alternativeText = value;
    } else {
      // warn why they can't unset the value
      // eslint-disable-next-line no-console
      console.warn(`<lightning-helptext> Invalid alternativeText value: ${value}`);
    }
  }
  /**
   * Sets focus on the button.
   */


  focus() {
    this.template.querySelector('button').focus();
  }

  disconnectedCallback() {
    // W-6441609 helptext maybe destroyed first, and tooltip won't receive events to hide.
    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.hide();
    }

    this._tooltip = null;
  }

  renderedCallback() {
    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.initialize();
    }
  } // Get the classes to be applied to button based on the icon variant


  get computedButtonClass() {
    const classes = classSet('slds-button slds-button_icon');

    switch (this.iconVariant) {
      case 'error':
        classes.add('slds-button_icon-error');
        break;

      case 'warning':
        classes.add('slds-button_icon-warning');
        break;

      case 'inverse':
        classes.add('slds-button_icon-inverse');
        break;
    }

    return classes.toString();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningHelptext, {
  publicProps: {
    content: {
      config: 3
    },
    iconName: {
      config: 3
    },
    iconVariant: {
      config: 3
    },
    alternativeText: {
      config: 3
    }
  },
  publicMethods: ["focus"],
  track: {
    state: 1
  },
  fields: ["_tooltip"]
});

var _lightningHelptext = registerComponent(LightningHelptext, {
  tmpl: _tmpl$7
});

const stc0$5 = {
  "role": "status"
};
const stc1$2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 1
};
const stc2$1 = {
  classMap: {
    "slds-spinner__dot-a": true
  },
  key: 2
};
const stc3$1 = {
  classMap: {
    "slds-spinner__dot-b": true
  },
  key: 3
};
function tmpl$5($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", {
    className: $cmp.computedClass,
    attrs: stc0$5,
    key: 0
  }, [$cmp.validAlternativeText ? api_element("span", stc1$2, [api_text(api_dynamic_text($cmp._altText))]) : null, api_element("div", stc2$1), api_element("div", stc3$1)])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$5 = registerTemplate(tmpl$5);
tmpl$5.stylesheets = [];

/**
 * Displays an animated spinner.
 */

class LightningSpinner extends LightningElement {
  constructor(...args) {
    super(...args);
    this.alternativeText = void 0;
    this.size = 'medium';
    this.variant = void 0;
    this._altText = '';
  }

  connectedCallback() {
    this.classList.add('slds-spinner_container');
    this.template.addEventListener('mousewheel', this.stopScrolling);
    this.template.addEventListener('touchmove', this.stopScrolling);
  }

  renderedCallback() {
    // [W-10320761] We set the _altText in the next tick because screen readers are not reading out
    // the text when the text along the aria-live container is inserted into the DOM together.
    // It is only working when only aria-live container is setup on load and later the content changes
    // eslint-disable-next-line @lwc/lwc/no-async-operation
    setTimeout(() => {
      this._altText = this.alternativeText;
    }, 0);
  }

  get normalizedVariant() {
    return normalizeString(this.variant, {
      fallbackValue: 'base',
      validValues: ['base', 'brand', 'inverse']
    });
  }

  get normalizedSize() {
    return normalizeString(this.size, {
      fallbackValue: 'medium',
      validValues: ['small', 'medium', 'large']
    });
  }

  get computedClass() {
    const {
      normalizedVariant,
      normalizedSize
    } = this;
    const classes = classSet('slds-spinner'); // add variant-specific class

    if (normalizedVariant !== 'base') {
      classes.add(`slds-spinner_${normalizedVariant}`);
    } // add size-specific class


    classes.add(`slds-spinner_${normalizedSize}`);
    return classes.toString();
  } // alternativeText validation


  get validAlternativeText() {
    const hasAlternativeText = !!this.alternativeText; // if we have an empty value output a console warning

    if (!hasAlternativeText) {
      // eslint-disable-next-line no-console
      console.warn(`<lightning-spinner> The alternativeText attribute should not be empty. Please add a description of what is causing the wait.`);
    }

    return hasAlternativeText;
  } // prevent scrolling


  stopScrolling(event) {
    event.preventDefault();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningSpinner, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    size: {
      config: 0
    },
    variant: {
      config: 0
    }
  },
  fields: ["_altText"]
});

var _lightningSpinner = registerComponent(LightningSpinner, {
  tmpl: _tmpl$5
});

const stc0$4 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 2
};
function tmpl$4($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("button", {
    className: $cmp.computedButtonClass,
    attrs: {
      "disabled": $cmp.disabled ? "" : null,
      "name": $cmp.name,
      "title": $cmp.computedTitle,
      "accesskey": $cmp.computedAccessKey,
      "type": $cmp.normalizedType,
      "value": $cmp.value,
      "aria-label": $cmp.computedAriaLabel,
      "aria-expanded": $cmp.computedAriaExpanded,
      "aria-live": $cmp.computedAriaLive,
      "aria-atomic": $cmp.computedAriaAtomic,
      "aria-haspopup": $cmp.computedAriaHasPopup
    },
    key: 0,
    on: {
      "focus": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "blur": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp.iconName,
      "svgClass": $cmp.computedIconClass,
      "variant": "bare"
    },
    key: 1
  }), $cmp.alternativeText ? api_element("span", stc0$4, [api_text(api_dynamic_text($cmp.alternativeText))]) : null])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$4 = registerTemplate(tmpl$4);
tmpl$4.stylesheets = [];

const stc0$3 = [];
function tmpl$3($api, $cmp, $slotset, $ctx) {
  return stc0$3;
  /*LWC compiler v2.13.3*/
}
var _tmpl$3 = registerTemplate(tmpl$3);
tmpl$3.stylesheets = [];

const ARIA_DESCRIBEDBY = 'aria-describedby';
const ARIA_CONTROLS = 'aria-controls';
const ARIA_LABELLEDBY = 'aria-labelledby';
/**
 * Primitive for button, buttonIcon and buttonIconStateful
 */

class LightningPrimitiveButton extends LightningElement {
  /**
   * Specifies whether this button should be displayed in a disabled state.
   * Disabled buttons can't be clicked. This value defaults to false.
   *
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this.state.disabled;
  }

  set disabled(value) {
    this.state.disabled = normalizeBoolean(value);
  }

  set accessKey(value) {
    this.state.accesskey = value;
  }
  /**
   * Specifies a shortcut key to activate or focus an element.
   *
   * @type {string}
   */


  get accessKey() {
    return this.state.accesskey;
  }

  get computedAccessKey() {
    return this.state.accesskey;
  }
  /**
   * Displays tooltip text when the mouse cursor moves over the element.
   *
   * @type {string}
   */


  get title() {
    return this.state.title;
  }

  set title(value) {
    this.state.title = value;
  }
  /**
   * Label describing the button to assistive technologies.
   *
   * @type {string}
   */


  get ariaLabel() {
    return this.state.ariaLabel;
  }

  set ariaLabel(value) {
    this.state.ariaLabel = value;
  }

  get computedAriaLabel() {
    return this.state.ariaLabel;
  }
  /**
   * Specifies the ID or list of IDs of the element or elements that
   * contain visible descriptive text to describe the button.
   */


  get ariaLabelledBy() {
    return this.state.ariaLabelledBy;
  }

  set ariaLabelledBy(value) {
    this.state.ariaLabelledBy = value;
    const button = this.template.querySelector('button');
    synchronizeAttrs(button, {
      [ARIA_LABELLEDBY]: value
    });
  }

  get computedAriaLabelledBy() {
    return this.state.ariaLabelledBy;
  }
  /**
   * A space-separated list of element IDs that provide descriptive labels for the button.
   *
   * @type {string}
   */


  get ariaDescribedBy() {
    return this.state.ariaDescribedBy;
  }

  set ariaDescribedBy(value) {
    this.state.ariaDescribedBy = value;
    const button = this.template.querySelector('button');
    synchronizeAttrs(button, {
      [ARIA_DESCRIBEDBY]: value
    });
  }
  /**
   * A space-separated list of element IDs whose presence or content is controlled by this button.
   *
   * @type {string}
   */


  get ariaControls() {
    return this.state.ariaControls;
  }

  set ariaControls(value) {
    this.state.ariaControls = value;
    const button = this.template.querySelector('button');
    synchronizeAttrs(button, {
      [ARIA_CONTROLS]: value
    });
  }
  /**
   * Indicates whether an element that the button controls is expanded or collapsed.
   * Valid values are 'true' or 'false'. The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */


  get ariaExpanded() {
    return this.state.ariaExpanded;
  }

  set ariaExpanded(value) {
    this.state.ariaExpanded = normalizeString(value, {
      fallbackValue: undefined,
      validValues: ['true', 'false']
    });
  }

  get computedAriaExpanded() {
    return this.state.ariaExpanded || null;
  }

  set ariaLive(value) {
    this.state.ariaLive = value;
  }
  /**
   * Indicates that the button has an interactive popup element.
   * Valid values are 'true', 'dialog', 'menu', 'listbox', 'tree', and 'grid' based on ARIA 1.1 specifications.
   * The default value is undefined.
   *
   * @type {string}
   * @default undefined
   */


  get ariaHasPopup() {
    return this.state.ariaHasPopup;
  }

  set ariaHasPopup(value) {
    this.state.ariaHasPopup = normalizeString(value, {
      fallbackValue: undefined,
      validValues: ['true', 'dialog', 'menu', 'listbox', 'tree', 'grid']
    });
  }

  get computedAriaHasPopup() {
    return this.state.ariaHasPopup || null;
  }
  /**
   * Indicates that the button can be updated when it doesn't have focus.
   * Valid values are 'polite', 'assertive', or 'off'. The polite value causes assistive
   * technologies to notify users of updates at a low priority, generally without interrupting.
   * The assertive value causes assistive technologies to notify users immediately,
   * potentially clearing queued speech updates.
   *
   * @type {string}
   */


  get ariaLive() {
    return this.state.ariaLive;
  }

  get computedAriaLive() {
    return this.state.ariaLive;
  }
  /**
   * Indicates whether assistive technologies present all, or only parts of,
   * the changed region. Valid values are 'true' or 'false'.
   *
   * @type {string}
   */


  get ariaAtomic() {
    return this.state.ariaAtomic || null;
  }

  set ariaAtomic(value) {
    this.state.ariaAtomic = normalizeString(value, {
      fallbackValue: undefined,
      validValues: ['true', 'false']
    });
  }

  get computedAriaAtomic() {
    return this.state.ariaAtomic || null;
  }
  /**
   * Sets focus on the element.
   */


  focus() {}
  /**
   * Reserved for internal use only.
   * Describes the order of this element (first, middle or last) inside lightning-button-group.
   * @type {string}
   */


  constructor() {
    super(); // Workaround for an IE11 bug where click handlers on button ancestors
    // receive the click event even if the button element has the `disabled`
    // attribute set.

    this._initialized = false;
    this.state = {
      accesskey: null,
      ariaAtomic: null,
      ariaControls: null,
      ariaDescribedBy: null,
      ariaLabelledBy: null,
      ariaExpanded: null,
      ariaHasPopup: null,
      ariaLabel: null,
      ariaLive: null,
      disabled: false
    };
    this.groupOrder = '';

    if (isIE11) {
      this.template.addEventListener('click', event => {
        if (this.disabled) {
          event.stopImmediatePropagation();
        }
      });
    }
  }

  renderedCallback() {
    if (!this._initialized) {
      const button = this.template.querySelector('button');
      synchronizeAttrs(button, {
        [ARIA_CONTROLS]: this.state.ariaControls,
        [ARIA_DESCRIBEDBY]: this.state.ariaDescribedBy,
        [ARIA_LABELLEDBY]: this.state.ariaLabelledBy
      });
      this._initialized = true;
    }
  }

  get computedButtonClass() {
    const classes = classSet('slds-button');
    classes.add(buttonGroupOrderClass(this.groupOrder));
    return classes.toString();
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningPrimitiveButton, {
  publicProps: {
    disabled: {
      config: 3
    },
    accessKey: {
      config: 3
    },
    title: {
      config: 3
    },
    ariaLabel: {
      config: 3
    },
    ariaLabelledBy: {
      config: 3
    },
    ariaDescribedBy: {
      config: 3
    },
    ariaControls: {
      config: 3
    },
    ariaExpanded: {
      config: 3
    },
    ariaHasPopup: {
      config: 3
    },
    ariaLive: {
      config: 3
    },
    ariaAtomic: {
      config: 3
    },
    groupOrder: {
      config: 0
    }
  },
  publicMethods: ["focus"],
  track: {
    state: 1
  },
  fields: ["_initialized"]
});

var LightningPrimitiveButton$1 = registerComponent(LightningPrimitiveButton, {
  tmpl: _tmpl$3
});

const DEFAULT_SIZE = 'medium';
const DEFAULT_VARIANT = 'border';
const DEFAULT_TYPE = 'button';
/**
 * An icon-only HTML button.
 */

class LightningButtonIcon extends LightningPrimitiveButton$1 {
  constructor(...args) {
    super(...args);
    this.name = void 0;
    this.value = void 0;
    this.variant = DEFAULT_VARIANT;
    this.iconName = void 0;
    this.iconClass = void 0;
    this.size = DEFAULT_SIZE;
    this.type = DEFAULT_TYPE;
    this.alternativeText = void 0;
    this._tooltip = null;
  }

  // remove-next-line-for-c-namespace
  set tooltip(value) {
    if (this._tooltip) {
      this._tooltip.value = value;
    } else if (value) {
      // Note that because the tooltip target is a child element it may not be present in the
      // dom during initial rendering.
      this._tooltip = new Tooltip(value, {
        root: this,
        target: () => this.template.querySelector('button')
      });

      this._tooltip.initialize();
    }
  } // remove-next-line-for-c-namespace

  /**
   * Text to display when the user mouses over or focuses on the button.
   * The tooltip is auto-positioned relative to the button and screen space.
   * @type {string}
   * @param {string} value - The plain text string for the tooltip
   */


  get tooltip() {
    return this._tooltip ? this._tooltip.value : undefined;
  } // remove-next-line-for-c-namespace


  // this is there because raptor currently doesnt support inheritance
  render() {
    return _tmpl$4;
  }

  get computedTitle() {
    return this.state.title || this.alternativeText || '';
  }

  get normalizedVariant() {
    return normalizeString(this.variant, {
      fallbackValue: DEFAULT_VARIANT,
      validValues: ['bare', 'brand', 'container', 'border', 'border-filled', 'bare-inverse', 'border-inverse']
    });
  }

  get normalizedType() {
    return normalizeString(this.type, {
      fallbackValue: DEFAULT_TYPE,
      validValues: ['button', 'reset', 'submit']
    });
  }

  get normalizedSize() {
    return normalizeString(this.size, {
      fallbackValue: DEFAULT_SIZE,
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  getVariantBase() {
    return this.normalizedVariant.split('-')[0];
  }

  getVariantModifier() {
    return this.normalizedVariant.split('-')[1] || '';
  }

  get computedButtonClass() {
    const classes = classSet(super.computedButtonClass);
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const isBare = this.getVariantBase(normalizedSize) === 'bare';
    classes.add('slds-button_icon');

    if (!isBare) {
      // If the variant is not bare, then size the button instead of the icon
      switch (normalizedSize) {
        case 'small':
          classes.add('slds-button_icon-small');
          break;

        case 'x-small':
          classes.add('slds-button_icon-x-small');
          break;

        case 'xx-small':
          classes.add('slds-button_icon-xx-small');
          break;

        case 'large':
          // There is no `large` modifier for buttons so we should drop down one size to `medium`
          console.warn(`<lightning-button-icon> The non-bare variants of buttonIcon do not support a size value of "large". Supported values include "xx-small", "x-small", "small", and "medium". Falling back to size value "medium".`);
      }
    }

    return classes.add({
      'slds-button_icon-bare': isBare,
      'slds-button_icon-container': normalizedVariant === 'container',
      'slds-button_icon-border': normalizedVariant === 'border',
      'slds-button_icon-border-filled': normalizedVariant === 'border-filled',
      'slds-button_icon-border-inverse': normalizedVariant === 'border-inverse',
      'slds-button_icon-inverse': normalizedVariant === 'bare-inverse',
      'slds-button_icon-brand': normalizedVariant === 'brand'
    }).toString();
  }

  get computedIconClass() {
    const {
      normalizedSize,
      normalizedVariant
    } = this;
    const isBare = this.getVariantBase(normalizedVariant) === 'bare';
    const iconClass = this.iconClass || '';
    const classes = classSet('slds-button__icon');
    classes.add(iconClass);

    if (isBare) {
      // If the variant is bare, then size the icon instead of the button
      switch (normalizedSize) {
        case 'large':
          classes.add('slds-button__icon_large');
          break;

        case 'small':
          classes.add('slds-button__icon_small');
          break;

        case 'xx-small':
          // There is no `xx-small` modifier for bare so we should drop down one size to `x-small`
          console.warn(`<lightning-button-icon> The bare variant of buttonIcon does not support a size value of "xx-small". Supported values include "x-small", "small", "medium", and "large". The default is "medium".`);

        /* falls through */

        case 'x-small':
          classes.add('slds-button__icon_x-small');
          break;
      }
    }

    if (this.getVariantModifier(normalizedVariant) === 'inverse') {
      classes.add('slds-button_icon-inverse');
    }

    return classes.toString();
  }

  handleFocus() {
    this.dispatchEvent(new CustomEvent('focus'));
  }

  handleBlur() {
    this.dispatchEvent(new CustomEvent('blur'));
  }
  /**
   * Sets focus on the button.
   */


  focus() {
    if (this._connected) {
      this.template.querySelector('button').focus();
    }
  }
  /**
   * Simulates a mouse click on the button.
   */


  click() {
    if (this._connected) {
      this.template.querySelector('button').click();
    }
  }
  /**
   * Once we are connected, we fire a register event so the button-group (or other) component can register
   * the buttons.
   */


  connectedCallback() {
    this._connected = true;
  }

  renderedCallback() {
    // initialize aria attributes in primitiveButton
    super.renderedCallback(); // remove-next-line-for-c-namespace

    if (this._tooltip && !this._tooltip.initialized) {
      this._tooltip.initialize();
    } // button is inherit from primitiveButton, button.css not working in this case.
    // change host style to disable pointer event.


    this.template.host.style.pointerEvents = this.disabled ? 'none' : '';
  }

  disconnectedCallback() {
    this._connected = false;
  }
  /*LWC compiler v2.13.3*/


}

LightningButtonIcon.delegatesFocus = true;

registerDecorators(LightningButtonIcon, {
  publicProps: {
    name: {
      config: 0
    },
    value: {
      config: 0
    },
    variant: {
      config: 0
    },
    iconName: {
      config: 0
    },
    iconClass: {
      config: 0
    },
    size: {
      config: 0
    },
    type: {
      config: 0
    },
    alternativeText: {
      config: 0
    },
    tooltip: {
      config: 3
    }
  },
  publicMethods: ["focus", "click"],
  fields: ["_tooltip"]
});

var _lightningButtonIcon = registerComponent(LightningButtonIcon, {
  tmpl: _tmpl$4
});

const stc0$2 = {
  classMap: {
    "slds-assistive-text": true
  },
  key: 1
};
function tmpl$2($api, $cmp, $slotset, $ctx) {
  const {c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_custom_element("lightning-primitive-icon", _lightningPrimitiveIcon, {
    props: {
      "iconName": $cmp._iconName,
      "size": $cmp.size,
      "variant": $cmp.variant,
      "src": $cmp._src
    },
    key: 0
  }), $cmp.alternativeText ? api_element("span", stc0$2, [api_text(api_dynamic_text($cmp.alternativeText))]) : null];
  /*LWC compiler v2.13.3*/
}
var _tmpl$2 = registerTemplate(tmpl$2);
tmpl$2.stylesheets = [];

function normalizeVariant$1(variant, iconName) {
  // Unfortunately, the `bare` variant was implemented to do what the
  // `inverse` variant should have done. Keep this logic for as long as
  // we support the `bare` variant.
  if (variant === 'bare') {
    // TODO: Deprecation warning using strippable assertion
    variant = 'inverse';
  }

  if (getCategory(iconName) === 'utility') {
    return normalizeString(variant, {
      fallbackValue: '',
      validValues: ['error', 'inverse', 'warning', 'success']
    });
  }

  return 'inverse';
}

/**
 * Represents a visual element that provides context and enhances usability.
 */

class LightningIcon extends LightningElement {
  constructor(...args) {
    super(...args);
    this._src = void 0;
    this.privateIconName = void 0;
    this._iconName = void 0;
    this._size = void 0;
    this._variant = void 0;
    this.alternativeText = void 0;
  }

  /**
   * A uri path to a custom svg sprite, including the name of the resouce,
   * for example: /assets/icons/standard-sprite/svg/test.svg#icon-heart
   * @type {string}
   */
  get src() {
    return this.privateSrc;
  }

  set src(value) {
    this.privateSrc = value; // if value is not present, then we set the state back
    // to the original iconName that was passed
    // this might happen if the user sets a custom icon, then
    // decides to revert back to SLDS by removing the src attribute

    if (!value) {
      this._iconName = this.iconName;
      this.classList.remove('slds-icon-standard-default');
    } // if isIE11 and the src is set
    // we'd like to show the 'standard:default' icon instead
    // for performance reasons.


    if (value && isIE11) {
      this.setDefault();
      return;
    }

    this._src = value;
  }
  /**
   * The Lightning Design System name of the icon.
   * Names are written in the format 'utility:down' where 'utility' is the category,
   * and 'down' is the specific icon to be displayed.
   * @type {string}
   * @required
   */


  get iconName() {
    return this.privateIconName;
  }

  set iconName(value) {
    this.privateIconName = value; // if src is set, we don't need to validate
    // iconName

    if (this.src) {
      return;
    }

    if (isValidName(value)) {
      const isAction = getCategory(value) === 'action'; // update classlist only if new iconName is different than _iconName
      // otherwise classListMutation receives class:true and class: false and removes slds class

      if (value !== this._iconName) {
        classListMutation(this.classList, {
          'slds-icon_container_circle': isAction,
          [computeSldsClass(value)]: true,
          [computeSldsClass(this._iconName)]: false
        });
      }

      this._iconName = value;
    } else {
      console.warn(`<lightning-icon> Invalid icon name ${value}`); // eslint-disable-line no-console
      // Invalid icon names should render a blank icon. Remove any
      // classes that might have been previously added.

      classListMutation(this.classList, {
        'slds-icon_container_circle': false,
        [computeSldsClass(this._iconName)]: false
      });
      this._iconName = undefined;
    }
  }
  /**
   * The size of the icon. Options include xx-small, x-small, small, medium, or large.
   * The default is medium.
   * @type {string}
   * @default medium
   */


  get size() {
    return normalizeString(this._size, {
      fallbackValue: 'medium',
      validValues: ['xx-small', 'x-small', 'small', 'medium', 'large']
    });
  }

  set size(value) {
    this._size = value;
  }
  /**
   * The variant changes the appearance of a utility icon.
   * Accepted variants include inverse, success, warning, and error.
   * Use the inverse variant to implement a white fill in utility icons on dark backgrounds.
   * @type {string}
   */


  get variant() {
    return normalizeVariant$1(this._variant, this._iconName);
  }

  set variant(value) {
    this._variant = value;
  }

  connectedCallback() {
    this.classList.add('slds-icon_container');
  }

  setDefault() {
    this._src = undefined;
    this._iconName = 'standard:default';
    this.classList.add('slds-icon-standard-default');
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningIcon, {
  publicProps: {
    alternativeText: {
      config: 0
    },
    src: {
      config: 3
    },
    iconName: {
      config: 3
    },
    size: {
      config: 3
    },
    variant: {
      config: 3
    }
  },
  fields: ["_src", "privateIconName", "_iconName", "_size", "_variant"]
});

var _lightningIcon = registerComponent(LightningIcon, {
  tmpl: _tmpl$2
});

const stc0$1 = {
  "slds-required": true
};
const stc1$1 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 4
};
const stc2 = {
  "slds-dueling-list": true
};
const stc3 = {
  "slds-assistive-text": true
};
const stc4 = {
  "slds-form-element__label": true
};
const stc5 = {
  "slds-listbox": true,
  "slds-listbox_vertical": true
};
const stc6 = {
  "slds-listbox__item": true
};
const stc7 = {
  "role": "presentation"
};
const stc8 = {
  classMap: {
    "slds-media__body": true
  },
  key: 14
};
const stc9 = {
  "slds-truncate": true
};
const stc10 = {
  key: 16
};
const stc11 = {
  classMap: {
    "slds-dueling-list__column": true
  },
  key: 18
};
const stc12 = {
  classMap: {
    "slds-dueling-list__column": true,
    "slds-dueling-list__column_responsive": true
  },
  key: 21
};
const stc13 = {
  classMap: {
    "slds-media__body": true
  },
  key: 27
};
const stc14 = {
  classMap: {
    "slds-media__figure": true,
    "slds-media__figure_reverse": true
  },
  key: 29
};
const stc15 = {
  classMap: {
    "slds-dueling-list__column": true
  },
  key: 31
};
const stc16 = {
  "slds-has-error": true,
  "slds-form-element__help": true
};
function tmpl$1($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, t: api_text, h: api_element, d: api_dynamic_text, c: api_custom_element, b: api_bind, k: api_key, ti: api_tab_index, i: api_iterator} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9} = $ctx;
  return [api_element("div", {
    attrs: {
      "role": "group",
      "aria-labelledby": api_scoped_id("group-label")
    },
    key: 0
  }, [api_element("div", {
    className: $cmp.computedGroupLabelClass,
    attrs: {
      "id": api_scoped_id("group-label")
    },
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc0$1,
    attrs: {
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), $cmp.fieldLevelHelp ? api_custom_element("lightning-helptext", _lightningHelptext, {
    props: {
      "content": $cmp.fieldLevelHelp
    },
    key: 3
  }) : null, api_element("div", stc1$1, [api_element("div", {
    classMap: stc2,
    key: 5,
    on: {
      "focusin": _m0 || ($ctx._m0 = api_bind($cmp.handleFocus)),
      "focusout": _m1 || ($ctx._m1 = api_bind($cmp.handleBlur))
    }
  }, [api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("assertive-thing"),
      "aria-live": "assertive"
    },
    key: 6
  }, [api_text(api_dynamic_text($cmp._messageToDisplay))]), api_element("div", {
    classMap: stc3,
    attrs: {
      "id": api_scoped_id("keyboard-interacton")
    },
    key: 7
  }, [api_text(api_dynamic_text($cmp.i18n.componentAssistiveText))]), api_element("div", {
    className: $cmp.computedLeftColumnClass,
    key: 8
  }, [api_element("span", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("source-list-label")
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.sourceLabel))]), api_element("div", {
    className: $cmp.computedListboxContainerClass,
    style: $cmp.computedColumnStyle,
    key: 10
  }, [api_element("ul", {
    classMap: stc5,
    attrs: {
      "data-source-list": "",
      "id": api_scoped_id("source-list"),
      "aria-describedby": api_scoped_id("keyboard-interacton"),
      "aria-labelledby": api_scoped_id("source-list-label"),
      "aria-multiselectable": "true",
      "role": "listbox",
      "aria-disabled": $cmp.ariaDisabled
    },
    key: 11
  }, api_iterator($cmp.computedSourceList, function (option, index) {
    return api_element("li", {
      classMap: stc6,
      attrs: stc7,
      key: api_key(12, option.value)
    }, [api_element("div", {
      className: option.classList,
      attrs: {
        "aria-selected": option.selected,
        "role": "option",
        "tabindex": api_tab_index(option.tabIndex),
        "data-index": index,
        "data-value": option.value,
        "data-type": $cmp.computedSourceListId
      },
      key: 13,
      on: {
        "click": _m2 || ($ctx._m2 = api_bind($cmp.handleOptionClick)),
        "keydown": _m3 || ($ctx._m3 = api_bind($cmp.handleOptionKeyDown))
      }
    }, [api_element("span", stc8, [api_element("span", {
      classMap: stc9,
      attrs: {
        "title": option.label
      },
      key: 15
    }, [api_text(api_dynamic_text(option.label))])])])]);
  }))]), $cmp.showActivityIndicator ? api_element("div", stc10, [api_custom_element("lightning-spinner", _lightningSpinner, {
    props: {
      "size": "small",
      "variant": "brand",
      "alternativeText": $cmp.i18n.loadingText
    },
    key: 17
  })]) : null]), api_element("div", stc11, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:right",
      "variant": "container",
      "disabled": $cmp.moveButtonsDisabled,
      "title": $cmp.addButtonLabel,
      "alternativeText": $cmp.addButtonLabel
    },
    key: 19,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleRightButtonClick))
    }
  }), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:left",
      "variant": "container",
      "disabled": $cmp.moveButtonsDisabled,
      "title": $cmp.removeButtonLabel,
      "alternativeText": $cmp.removeButtonLabel
    },
    key: 20,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleLeftButtonClick))
    }
  })]), api_element("div", stc12, [api_element("span", {
    classMap: stc4,
    attrs: {
      "id": api_scoped_id("selected-list-label")
    },
    key: 22
  }, [api_text(api_dynamic_text($cmp.selectedLabel))]), api_element("div", {
    className: $cmp.computedListboxContainerClass,
    style: $cmp.computedColumnStyle,
    key: 23
  }, [api_element("ul", {
    classMap: stc5,
    attrs: {
      "data-selected-list": "",
      "id": api_scoped_id("selected-list"),
      "aria-describedby": api_scoped_id("keyboard-interacton"),
      "aria-labelledby": api_scoped_id("selected-list-label"),
      "aria-multiselectable": "true",
      "role": "listbox",
      "aria-disabled": $cmp.ariaDisabled
    },
    key: 24
  }, api_iterator($cmp.computedSelectedList, function (option, index) {
    return api_element("li", {
      classMap: stc6,
      attrs: stc7,
      key: api_key(25, option.value)
    }, [api_element("div", {
      className: option.classList,
      attrs: {
        "aria-selected": option.selected,
        "role": "option",
        "tabindex": api_tab_index(option.tabIndex),
        "data-index": index,
        "data-value": option.value,
        "data-type": $cmp.computedSelectedListId
      },
      key: 26,
      on: {
        "click": _m6 || ($ctx._m6 = api_bind($cmp.handleOptionClick)),
        "keydown": _m7 || ($ctx._m7 = api_bind($cmp.handleOptionKeyDown))
      }
    }, [api_element("span", stc13, [api_element("span", {
      classMap: stc9,
      attrs: {
        "title": option.label
      },
      key: 28
    }, [api_text(api_dynamic_text(option.label))])]), option.isLocked ? api_element("span", stc14, [api_custom_element("lightning-icon", _lightningIcon, {
      props: {
        "iconName": "utility:lock",
        "size": "x-small",
        "alternativeText": $cmp.computedLockAssistiveText
      },
      key: 30
    })]) : null])]);
  }))])]), !$cmp.disableReordering ? api_element("div", stc15, [api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:up",
      "variant": "container",
      "disabled": $cmp.disabled,
      "title": $cmp.upButtonLabel,
      "alternativeText": $cmp.upButtonLabel
    },
    key: 32,
    on: {
      "click": _m8 || ($ctx._m8 = api_bind($cmp.handleUpButtonClick))
    }
  }), api_custom_element("lightning-button-icon", _lightningButtonIcon, {
    props: {
      "iconName": "utility:down",
      "variant": "container",
      "disabled": $cmp.disabled,
      "title": $cmp.downButtonLabel,
      "alternativeText": $cmp.downButtonLabel
    },
    key: 33,
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleDownButtonClick))
    }
  })]) : null])]), $cmp.errorMessage ? api_element("span", {
    classMap: stc16,
    attrs: {
      "id": api_scoped_id("error-message"),
      "aria-live": "assertive"
    },
    key: 34
  }, [api_text(api_dynamic_text($cmp.errorMessage))]) : null])];
  /*LWC compiler v2.13.3*/
}
var _tmpl$1 = registerTemplate(tmpl$1);
tmpl$1.stylesheets = [];


if (_implicitStylesheets$1) {
  tmpl$1.stylesheets.push.apply(tmpl$1.stylesheets, _implicitStylesheets$1);
}
if (_implicitStylesheets$1 || _implicitScopedStylesheets$1) {
  tmpl$1.stylesheetToken = "lightning-dualListbox_dualListbox";
}

var labelComponentAssistiveText = 'Press Ctrl (Cmd on Mac) + Left Arrow or Ctrl (Cmd on Mac) + Right Arrow to move items between lists.';

var labelDownButtonAssistiveText = 'Move selection down';

var labelMaxError = 'Select at most {0} options';

var labelMaxHelp = ' [and a maximum of {0}]';

var labelMinErrorPlural = 'Select at least {0} options';

var labelMinErrorSingular = 'Select at least 1 option';

var labelMinHelp = ' [and a minimum of {0}]';

var labelMinRequiredErrorPlural = 'At least {0} options must be selected';

var labelMinRequiredErrorSingular = 'At least 1 option must be selected';

var labelOptionLockAssistiveText = ': item cannot be removed from {0}';

var labelRequired = 'required';

var labelRequiredError = 'An option must be selected';

var labelRequiredOptionError = '{0} must be selected';

var labelUpButtonAssistiveText = 'Move selection up';

var labelMoveSelectionToAssistiveText = 'Move selection to {0}';

var labelLoadingText = 'Loading';

var labelMovedOptionsSingular = 'Item {0} moved to the list {1}';

var labelMovedOptionsPlural = 'Items {0} moved to the list {1}';

function preventDefaultAndStopPropagation(event) {
  event.preventDefault();
  event.stopPropagation();
}

function setFocusOnNextOption(option, moveUp, intf) {
  const index = parseInt(option.getAttribute('data-index'), 10);
  const i = index + (moveUp ? -1 : 1);
  const options = intf.getElementsOfList(option.getAttribute('data-type'));
  const next = options[i];

  if (next) {
    next.focus();
  }
}

function selectNextOption(option, moveUp, intf) {
  const selected = option.getAttribute('aria-selected') === 'true';
  const index = parseInt(option.getAttribute('data-index'), 10);
  const i = index + (selected ? moveUp ? -1 : 1 : 0);
  const options = intf.getElementsOfList(option.getAttribute('data-type'));
  const next = options[i];

  if (next) {
    intf.updateSelectedOptions(next, true, false);
  }
}

function selectNextOptionFromShift(option, moveUp, isMultiple, intf) {
  const curr = parseInt(option.getAttribute('data-index'), 10);

  if (intf.getShiftIndex() < 0) {
    intf.setShiftIndex(curr);
    intf.setLastShift(moveUp);
  }

  const next = curr + (intf.getLastShift() !== moveUp ? 0 : moveUp ? -1 : 1);
  const pos = next < intf.getShiftIndex();
  const shiftAdd = pos === moveUp || intf.getShiftIndex() === next;
  const options = intf.getElementsOfList(option.getAttribute('data-type'));
  const nextOption = options[next];

  if (nextOption) {
    intf.updateSelectedOptions(nextOption, shiftAdd, true);
    intf.setLastShift(moveUp);
  }
}

function handleKeyDownOnOption(event, keyboardInterface) {
  if (event.metaKey || event.ctrlKey) {
    keyboardInterface.setShiftIndex(-1);
    const keyCodesA = 'A'.charCodeAt(0);
    const selected = event.target.getAttribute('aria-selected') === 'true';

    switch (event.keyCode) {
      case keyCodes.up:
        preventDefaultAndStopPropagation(event);
        setFocusOnNextOption(event.target, true, keyboardInterface);
        break;

      case keyCodes.down:
        preventDefaultAndStopPropagation(event);
        setFocusOnNextOption(event.target, false, keyboardInterface);
        break;

      case keyCodes.right:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.moveOptionsBetweenLists(true);
        break;

      case keyCodes.left:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.moveOptionsBetweenLists(false);
        break;

      case keyCodes.space:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.updateSelectedOptions(event.target, !selected, true);
        break;

      case keyCodesA:
        preventDefaultAndStopPropagation(event);
        keyboardInterface.selectAllOptions(event.target);
        break;

    }
  } else if (event.shiftKey) {
    switch (event.keyCode) {
      case keyCodes.up:
        preventDefaultAndStopPropagation(event);
        selectNextOptionFromShift(event.target, true, true, keyboardInterface);
        break;

      case keyCodes.down:
        preventDefaultAndStopPropagation(event);
        selectNextOptionFromShift(event.target, false, true, keyboardInterface);
        break;

    }
  } else {
    keyboardInterface.setShiftIndex(-1);

    switch (event.keyCode) {
      case keyCodes.up:
        preventDefaultAndStopPropagation(event);
        selectNextOption(event.target, true, keyboardInterface);
        break;

      case keyCodes.down:
        preventDefaultAndStopPropagation(event);
        selectNextOption(event.target, false, keyboardInterface);
        break;

    }
  }
}

/**
 Represents an object which keeps track of a user's interacting state.
 @constructor InteractingState
 @param {Object} options - The options object.
 @param {Object} [options.duration=2000] - The number of milliseconds of idle time to wait before exiting the interacting state.
 @param {Object} [options.debounceInteraction=false] - Whether to debounce interaction to ignore consecutive leave-enter interactions.
 **/

class InteractingState {
  constructor(options) {
    const duration = options && options.duration >= 0 ? options.duration : 2000;
    this.eventemitter = new EventEmitter();
    this._interacting = false;
    this._debouncedLeave = debounce(this.leave.bind(this), duration);
    this._debounceInteraction = options && options.debounceInteraction;
    this._interactedRecently = false;

    if (this._debounceInteraction) {
      // debounce leave until a short time later
      this._debouncedEmitLeave = debounce(() => {
        if (!this._interacting) {
          this._interactedRecently = false;
          this.eventemitter.emit('leave');
        }
      }, 200); // debounce enter until left

      this._debouncedEmitEnter = () => {
        if (!this._interactedRecently) {
          this._interactedRecently = true;
          this.eventemitter.emit('enter');
        }
      };
    }
  }
  /**
   Checks whether or not we are in the interacting state.
   @method InteractingState#isInteracting
   @return {Boolean} - Whether or not we are interacting.
   **/


  isInteracting() {
    return this._interacting;
  }
  /**
   Enters the interacting state.
   @method InteractingState#enter
   @returns {void}
   **/


  enter() {
    if (!this._interacting) {
      this._interacting = true;

      if (this._debounceInteraction) {
        this._debouncedEmitEnter();
      } else {
        this.eventemitter.emit('enter');
      }
    }
  }
  /**
   Registers a handler to execute when we enter the interacting state.
   @method InteractingState#onenter
   @param {Function} handler - The callback function.
   **/


  onenter(handler) {
    this.eventemitter.on('enter', handler);
  }
  /**
   Leaves the interacting state.
   @method InteractingState#leave
   @returns {void}
   **/


  leave() {
    if (this._interacting) {
      this._interacting = false;

      if (this._debounceInteraction) {
        this._debouncedEmitLeave();
      } else {
        this.eventemitter.emit('leave');
      }
    }
  }
  /**
   Registers a handler to execute when we leave the interacting state.
   @method InteractingState#onleave
   @param {Function} handler - The callback function.
   **/


  onleave(handler) {
    this.eventemitter.on('leave', handler);
  }
  /**
   Signals the start of the transition into the interacting state and
   schedules a transition out of the interacting state after an idle
   duration. Calling this method multiple times will reset the timer.
   @method InteractingState#interacting
   @returns {void}
   **/


  interacting() {
    this.enter();

    this._debouncedLeave();
  }

}
/**
 Creates a debounced function that delays invoking `func` until after
 `delay` milliseconds have elapsed since the last time the debounced
 function was invoked.
 @function debounce
 @param {Function} func - The function to debounce
 @param {Number} delay - The number of milliseconds to delay
 @param {Object} options - The options object
 @param {Boolean} options.leading - Specify invoking on the leading edge of the timeout
 @return {Function} - debounced function
 **/

function debounce(func, delay, options) {
  const _options = options || {};

  let invokeLeading = _options.leading;
  let timer;
  return function debounced() {
    const args = Array.prototype.slice.apply(arguments);

    if (invokeLeading) {
      func.apply(this, args);
      invokeLeading = false;
    }

    clearTimeout(timer); // eslint-disable-next-line @lwc/lwc/no-async-operation

    timer = setTimeout(function () {
      func.apply(this, args);
      invokeLeading = _options.leading; // reset for next debounce sequence
    }, delay);
  };
}

var labelBadInput = 'Enter a valid value.';

var labelPatternMismatch = 'Your entry does not match the allowed pattern.';

var labelRangeOverflow = 'The number is too high.';

var labelRangeUnderflow = 'The number is too low.';

var labelStepMismatch = 'Your entry isn\'t a valid increment.';

var labelTooLong = 'Your entry is too long.';

var labelTooShort = 'Your entry is too short.';

var labelTypeMismatch = 'You have entered an invalid format.';

var labelValueMissing = 'Complete this field.';

var labelSelectAtleastOneValue = 'You must select at least one choice from this set.';

const constraintsSortedByPriority = ['customError', 'badInput', 'patternMismatch', 'rangeOverflow', 'rangeUnderflow', 'stepMismatch', 'tooLong', 'tooShort', 'typeMismatch', 'valueMissing', 'selectAtleastOneValue'];
const defaultLabels = {
  badInput: labelBadInput,
  customError: labelBadInput,
  patternMismatch: labelPatternMismatch,
  rangeOverflow: labelRangeOverflow,
  rangeUnderflow: labelRangeUnderflow,
  stepMismatch: labelStepMismatch,
  tooLong: labelTooLong,
  tooShort: labelTooShort,
  typeMismatch: labelTypeMismatch,
  valueMissing: labelValueMissing,
  selectAtleastOneValue: labelSelectAtleastOneValue
};

function resolveBestMatch(validity) {
  let validityState;

  if (validity && validity.valid === false) {
    validityState = 'badInput';
    constraintsSortedByPriority.some(stateName => {
      if (validity[stateName] === true) {
        validityState = stateName;
        return true;
      }

      return false;
    });
  }

  return validityState;
}

function computeConstraint(valueProvider, constraint) {
  const provider = valueProvider[constraint];

  if (typeof provider === 'function') {
    return provider();
  }

  if (typeof provider === 'boolean') {
    return provider;
  }

  return false;
} // We're doing the below to avoid exposing the constraintsProvider in the ValidityState


function newValidityState(constraintsProvider) {
  class ValidityState {
    get valueMissing() {
      return computeConstraint(constraintsProvider, 'valueMissing');
    }

    get typeMismatch() {
      return computeConstraint(constraintsProvider, 'typeMismatch');
    }

    get patternMismatch() {
      return computeConstraint(constraintsProvider, 'patternMismatch');
    }

    get tooLong() {
      return computeConstraint(constraintsProvider, 'tooLong');
    }

    get tooShort() {
      return computeConstraint(constraintsProvider, 'tooShort');
    }

    get rangeUnderflow() {
      return computeConstraint(constraintsProvider, 'rangeUnderflow');
    }

    get rangeOverflow() {
      return computeConstraint(constraintsProvider, 'rangeOverflow');
    }

    get stepMismatch() {
      return computeConstraint(constraintsProvider, 'stepMismatch');
    }

    get customError() {
      return computeConstraint(constraintsProvider, 'customError');
    }

    get badInput() {
      return computeConstraint(constraintsProvider, 'badInput');
    }

    get selectAtleastOneValue() {
      return computeConstraint(constraintsProvider, 'validitySelectAtleastOneValue');
    }

    get valid() {
      return !(this.valueMissing || this.typeMismatch || this.patternMismatch || this.tooLong || this.tooShort || this.rangeUnderflow || this.rangeOverflow || this.stepMismatch || this.customError || this.badInput || this.selectAtleastOneValue);
    }

  }

  return new ValidityState();
}

function buildSyntheticValidity(constraintProvider) {
  return Object.freeze(newValidityState(constraintProvider));
}
function getErrorMessage(validity, labelMap) {
  const key = resolveBestMatch(validity);

  if (key) {
    return labelMap[key] ? labelMap[key] : defaultLabels[key];
  }

  return '';
}
class FieldConstraintApi {
  constructor(inputComponentProvider, constraintProviders) {
    assert(typeof inputComponentProvider === 'function');
    this._inputComponentProvider = inputComponentProvider;
    this._constraintsProvider = Object.assign({}, constraintProviders);

    if (!this._constraintsProvider.customError) {
      this._constraintsProvider.customError = () => typeof this._customValidityMessage === 'string' && this._customValidityMessage !== '';
    }
  }

  get validity() {
    if (!this._constraint) {
      this._constraint = buildSyntheticValidity(this._constraintsProvider);
    }

    return this._constraint;
  }

  checkValidity() {
    const isValid = this.validity.valid;

    if (!isValid) {
      if (this.inputComponent) {
        this.inputComponent.dispatchEvent(new CustomEvent('invalid', {
          cancellable: true
        }));
      }
    }

    return isValid;
  }

  reportValidity(callback) {
    const valid = this.checkValidity(); // the input might have been removed from the DOM by the time we query it

    if (this.inputComponent) {
      this.inputComponent.classList.toggle('slds-has-error', !valid);

      if (callback) {
        callback(this.validationMessage);
      }
    }

    return valid;
  }

  setCustomValidity(message) {
    this._customValidityMessage = message;
  }

  get validationMessage() {
    return getErrorMessage(this.validity, {
      customError: this._customValidityMessage,
      badInput: this.inputComponent.messageWhenBadInput,
      patternMismatch: this.inputComponent.messageWhenPatternMismatch,
      rangeOverflow: this.inputComponent.messageWhenRangeOverflow,
      rangeUnderflow: this.inputComponent.messageWhenRangeUnderflow,
      stepMismatch: this.inputComponent.messageWhenStepMismatch,
      tooShort: this.inputComponent.messageWhenTooShort,
      tooLong: this.inputComponent.messageWhenTooLong,
      typeMismatch: this.inputComponent.messageWhenTypeMismatch,
      valueMissing: this.inputComponent.messageWhenValueMissing,
      selectAtleastOneValue: this.inputComponent.messageWhenValueMissing
    });
  }

  get inputComponent() {
    if (!this._inputComponentElement) {
      this._inputComponentElement = this._inputComponentProvider();
    }

    return this._inputComponentElement;
  }

}

const VARIANT = {
  STANDARD: 'standard',
  LABEL_HIDDEN: 'label-hidden',
  LABEL_STACKED: 'label-stacked',
  LABEL_INLINE: 'label-inline'
};
/**
A variant normalization utility for attributes.
@param {Any} value - The value to normalize.
@return {Boolean} - The normalized value.
**/

function normalizeVariant(value) {
  return normalizeString(value, {
    fallbackValue: VARIANT.STANDARD,
    validValues: [VARIANT.STANDARD, VARIANT.LABEL_HIDDEN, VARIANT.LABEL_STACKED, VARIANT.LABEL_INLINE]
  });
}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
const i18n = {
  componentAssistiveText: labelComponentAssistiveText,
  downButtonAssistiveText: labelDownButtonAssistiveText,
  maxError: labelMaxError,
  maxHelp: labelMaxHelp,
  minErrorPlural: labelMinErrorPlural,
  minErrorSingular: labelMinErrorSingular,
  minHelp: labelMinHelp,
  minRequiredErrorPlural: labelMinRequiredErrorPlural,
  minRequiredErrorSingular: labelMinRequiredErrorSingular,
  optionLockAssistiveText: labelOptionLockAssistiveText,
  required: labelRequired,
  requiredError: labelRequiredError,
  requiredOptionError: labelRequiredOptionError,
  upButtonAssistiveText: labelUpButtonAssistiveText,
  moveSelectionToAssistiveText: labelMoveSelectionToAssistiveText,
  loadingText: labelLoadingText,
  movedOptionsSingular: labelMovedOptionsSingular,
  movedOptionsPlural: labelMovedOptionsPlural
};
/**
 * A pair of listboxes that enables multiple options to be selected and reordered.
 */

class LightningDualListbox extends LightningElement {
  constructor(...args) {
    super(...args);
    this.sourceLabel = void 0;
    this.selectedLabel = void 0;
    this.label = void 0;
    this.options = void 0;
    this.min = 0;
    this.max = void 0;
    this.name = void 0;
    this._showActivityIndicator = false;
    this._requiredOptions = [];
    this._selectedValues = [];
    this._variant = void 0;
    this._disabled = void 0;
    this._disableReordering = false;
    this._required = false;
    this._addButtonLabel = void 0;
    this._removeButtonLabel = void 0;
    this._upButtonLabel = void 0;
    this._downButtonLabel = void 0;
    this._size = void 0;
    this.errorMessage = '';
    this.highlightedOptions = [];
    this.focusableInSource = void 0;
    this.focusableInSelected = void 0;
    this.highlightedOptionsLabel = [];
    this._messageToDisplay = '';
    this.isFocusOnList = false;
    this.messageWhenValueMissing = i18n.requiredError;
    this.fieldLevelHelp = void 0;
  }

  /**
   * Error message to be displayed when a range overflow is detected.
   * @type {string}
   */
  get messageWhenRangeOverflow() {
    return this._messageWhenRangeOverflow || this._overflowMessage;
  }

  set messageWhenRangeOverflow(message) {
    this._messageWhenRangeOverflow = message;
  }
  /**
   * Error message to be displayed when a range underflow is detected.
   * @type {string}
   */


  get messageWhenRangeUnderflow() {
    return this._messageWhenRangeUnderflow || this._underflowMessage;
  }

  set messageWhenRangeUnderflow(message) {
    this._messageWhenRangeUnderflow = message;
  }
  /**
   * If present, the listbox is disabled and users cannot interact with it.
   * @type {string}
   */


  get disabled() {
    return this._disabled || false;
  }

  set disabled(value) {
    this._disabled = normalizeBoolean(value);
  }
  /**
   * If present, the user must add an item to the selected listbox before submitting the form.
   * @type {string}
   * @default false
   */


  get required() {
    return this._required;
  }

  set required(value) {
    this._required = normalizeBoolean(value);
  }
  /**
   * A list of default options that are included in the selected options listbox. This list is populated with values from the options attribute.
   * @type {list}
   */


  get value() {
    return this._selectedValues;
  }

  set value(newValue) {
    this.updateHighlightedOptions(newValue);
    this._selectedValues = newValue || [];

    if (this._connected) {
      this.addRequiredOptionsToValue();
    }
  }
  /**
   * A list of required options that cannot be removed from selected options listbox. This list is populated with values from the options attribute.
   * @type {list}
   */


  get requiredOptions() {
    return this._requiredOptions;
  }

  set requiredOptions(newValue) {
    this._requiredOptions = newValue || [];

    if (this._connected) {
      this.addRequiredOptionsToValue();
    }
  }
  /**
   * The variant changes the appearance of the dual listbox.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and dual listbox.
   * Use label-stacked to place the label above the dual listbox.
   * @type {string}
   */


  get variant() {
    return this._variant || VARIANT.STANDARD;
  }

  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
  }

  set size(value) {
    this._size = value;
  }
  /**
   * Number of items that display in the listboxes before vertical scrollbars are displayed. Determines the vertical size of the listbox.
   * @type {number}
   * @default
   */


  get size() {
    return this._size;
  }
  /**
   * Help text detailing the purpose and function of the dual listbox.
   * @type {string}
   */


  set disableReordering(value) {
    this._disableReordering = normalizeBoolean(value);
  }
  /**
   * If present, the Up and Down buttons used for reordering the selected list items are hidden.
   * @type {boolean}
   * @default false
   */


  get disableReordering() {
    return this._disableReordering;
  }
  /**
   * If present, a spinner is displayed in the first listbox to indicate loading activity.
   * @type {boolean}
   * @default false
   */


  get showActivityIndicator() {
    return this._showActivityIndicator;
  }

  set showActivityIndicator(value) {
    this._showActivityIndicator = normalizeBoolean(value);
  }
  /**
   * Sets focus on the first option from either list.
   * If the source list doesn't contain any options, the first option on the selected list is focused on.
   */


  focus() {
    // focus on the first option from either list
    // if nothing on source, then it'll pick the one on selected
    const firstOption = this.template.querySelector(`div[data-index='0']`);

    if (firstOption) {
      firstOption.focus();
      this.updateSelectedOptions(firstOption, true, false);
    }
  }
  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   */


  get validity() {
    return this._constraint.validity;
  }
  /**
   * Returns the valid attribute value (Boolean) on the ValidityState object.
   * @returns {boolean} Indicates whether the dual listbox meets all constraint validations.
   */


  checkValidity() {
    return this._constraint.checkValidity();
  }
  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */


  reportValidity() {
    return this._constraint.reportValidity(message => {
      this.errorMessage = message;
    });
  }
  /**
   * Sets a custom error message to be displayed when the dual listbox value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message
   *     is reset.
   */


  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }
  /**
   * Displays an error message if the dual listbox value is required.
   */


  showHelpMessageIfInvalid() {
    this.reportValidity();
  }

  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this.keyboardInterface = this.selectKeyboardInterface();
    this._connected = true;
    this.addRequiredOptionsToValue(); // debounceInteraction since DualListbox has multiple focusable elements

    this.interactingState = new InteractingState({
      debounceInteraction: true
    });
    this.interactingState.onenter(() => {
      this.dispatchEvent(new CustomEvent('focus'));
    });
    this.interactingState.onleave(() => {
      this.showHelpMessageIfInvalid();
      this.dispatchEvent(new CustomEvent('blur')); // reset the optionToFocus otherwise dualListbox will steal the focus any time it's rerendered.

      this.optionToFocus = null;
    });
  }

  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }

  renderedCallback() {
    this.assertRequiredAttributes();

    if (this.disabled) {
      return;
    }

    if (this.optionToFocus) {
      // value could have an apostrophe, which is why we need to escape it otherwise the queryselector will not work
      const option = this.template.querySelector(`div[data-value='${this.optionToFocus.replace(/'/g, "\\'")}']`);

      if (option) {
        this.isFocusOnList = true;
        option.focus();
      }
    }
  }

  get computedUniqueId() {
    return this.uniqueId;
  }

  get computedSourceListId() {
    return getRealDOMId(this.template.querySelector('[data-source-list]'));
  }

  get computedSelectedListId() {
    return getRealDOMId(this.template.querySelector('[data-selected-list]'));
  }

  get ariaDisabled() {
    // aria-disabled works only with String not Boolean value
    return String(this.disabled);
  }

  get computedSourceList() {
    let sourceListOptions = [];

    if (this.options) {
      const required = this.requiredOptions;
      const values = this.value;
      sourceListOptions = this.options.filter(option => values.indexOf(option.value) === -1 && required.indexOf(option.value) === -1);
    }

    return this.computeListOptions(sourceListOptions, this.focusableInSource);
  }

  get computedSelectedList() {
    const selectedListOptions = [];

    if (this.options) {
      const optionsMap = {};
      this.options.forEach(option => {
        optionsMap[option.value] = _objectSpread({}, option);
      });
      this.value.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          option.isSelected = true;
        }
      });
      this.requiredOptions.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          option.isLocked = true;
        }
      }); // add selected items in the given order

      this.value.forEach(optionValue => {
        const option = optionsMap[optionValue];

        if (option) {
          selectedListOptions.push(option);
        }
      });
    }

    return this.computeListOptions(selectedListOptions, this.focusableInSelected);
  }

  computeListOptions(options, focusableOptionValue) {
    if (options.length > 0) {
      const focusableOption = options.find(option => {
        return option.value === focusableOptionValue;
      });
      const focusableValue = focusableOption ? focusableOption.value : options[0].value;
      return options.map(option => {
        return this.computeOptionProperties(option, focusableValue);
      });
    }

    return [];
  }

  computeOptionProperties(option, focusableValue) {
    const isSelected = this.highlightedOptions.indexOf(option.value) > -1;
    const classList = classSet('slds-listbox__option slds-listbox__option_plain slds-media slds-media_small slds-media_inline').add({
      'slds-is-selected': isSelected
    }).toString();
    return _objectSpread(_objectSpread({}, option), {}, {
      tabIndex: option.value === focusableValue ? '0' : '-1',
      selected: isSelected ? 'true' : 'false',
      classList
    });
  }

  get computedLeftColumnClass() {
    return classSet('slds-dueling-list__column slds-dueling-list__column_responsive').add({
      'slds-is-relative': this.showActivityIndicator
    }).toString();
  }

  get computedColumnStyle() {
    if (this.isNumber(this.size)) {
      // From the SLDS page on how to adjust the height: lightningdesignsystem.com/components/dueling-picklist/#Responsive
      const newHeight = parseInt(this.size, 10) * 2.25 + 1;
      return `height:${newHeight}rem`;
    }

    return '';
  }

  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }

  get computedGroupLabelClass() {
    return classSet('slds-form-element__label slds-form-element__legend').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }

  get computedListboxContainerClass() {
    return classSet('slds-dueling-list__options').add({
      'slds-is-disabled': this.disabled
    }).toString();
  }

  get computedLockAssistiveText() {
    return formatLabel(this.i18n.optionLockAssistiveText, this.selectedLabel);
  }

  get i18n() {
    return i18n;
  }

  getRightButtonAssistiveText() {
    return formatLabel(i18n.moveSelectionToAssistiveText, this.selectedLabel);
  }
  /**
   * Label for add button.
   * @type {string}
   * @default Move selection to {selectedLabel}
   */


  get addButtonLabel() {
    if (this._addButtonLabel) {
      return this._addButtonLabel;
    }

    return this.getRightButtonAssistiveText();
  }

  set addButtonLabel(value) {
    this._addButtonLabel = value;
  }

  getLeftButtonAssistiveText() {
    return formatLabel(i18n.moveSelectionToAssistiveText, this.sourceLabel);
  }
  /**
   * Label for remove button.
   * @type {string}
   * @default "Move selection to {sourceLabel}"
   */


  get removeButtonLabel() {
    if (this._removeButtonLabel) {
      return this._removeButtonLabel;
    }

    return this.getLeftButtonAssistiveText();
  }

  set removeButtonLabel(value) {
    this._removeButtonLabel = value;
  }
  /**
   * Label for up button.
   * @type {string}
   * @default "Move selection up"
   */


  get upButtonLabel() {
    return this._upButtonLabel || this.i18n.upButtonAssistiveText;
  }

  set upButtonLabel(value) {
    this._upButtonLabel = value;
  }
  /**
   * Label for down button.
   * @type {string}
   * @default "Move selection down"
   */


  get downButtonLabel() {
    return this._downButtonLabel || this.i18n.downButtonAssistiveText;
  }

  set downButtonLabel(value) {
    this._downButtonLabel = value;
  }

  get moveButtonsDisabled() {
    return this.disabled || this.showActivityIndicator;
  }

  handleOptionClick(event) {
    this.interactingState.interacting();

    if (this.disabled) {
      return;
    }

    const selectMultiple = event.metaKey || event.ctrlKey || event.shiftKey;
    const option = event.currentTarget;

    if (event.shiftKey) {
      this.selectAllFromLastSelectedToOption(option, false);
      return;
    }

    const selected = selectMultiple && option.getAttribute('aria-selected') === 'true';
    this.updateSelectedOptions(option, !selected, selectMultiple);
    this.shiftIndex = -1;
  }

  handleFocus(event) {
    this.interactingState.enter(); // select the focused option if entering a listbox

    const element = event.target;

    if (element.role === 'option') {
      if (!this.isFocusOnList) {
        this.isFocusOnList = true;
        this.updateSelectedOptions(element, true, false);
      }
    }
  }

  handleBlur(event) {
    this.interactingState.leave();
    const element = event.target;

    if (element.role !== 'option') {
      this.isFocusOnList = false;
    }
  }

  handleRightButtonClick() {
    this.interactingState.interacting();
    this.moveOptionsBetweenLists(true);
  }

  handleLeftButtonClick() {
    this.interactingState.interacting();
    this.moveOptionsBetweenLists(false);
  }

  handleUpButtonClick() {
    this.interactingState.interacting();
    this.changeOrderOfOptionsInList(true);
  }

  handleDownButtonClick() {
    this.interactingState.interacting();
    this.changeOrderOfOptionsInList(false);
  }

  handleOptionKeyDown(event) {
    this.interactingState.interacting();

    if (this.disabled) {
      return;
    }

    handleKeyDownOnOption(event, this.keyboardInterface);
  }

  moveOptionsBetweenLists(addToSelect, retainFocus) {
    const isValidList = addToSelect ? this.selectedList === this.computedSourceListId : this.selectedList === this.computedSelectedListId;

    if (!isValidList) {
      return;
    }

    const toMove = this.highlightedOptions;
    const values = this.computedSelectedList.map(option => option.value);
    const required = this.requiredOptions;
    let newValues = [];

    if (addToSelect) {
      newValues = values.concat(toMove);
    } else {
      newValues = values.filter(value => toMove.indexOf(value) === -1 || required.indexOf(value) > -1);
    }

    this.movedOptions(addToSelect);
    const oldSelectedValues = this._selectedValues;
    this._selectedValues = newValues;
    const invalidMove = this.validity.valueMissing || this.validity.rangeOverflow && this.selectedList === this.computedSourceListId || this.validity.rangeUnderflow && this.selectedList === this.computedSelectedListId;

    if (invalidMove || toMove.length === 0) {
      this.showHelpMessageIfInvalid();
      this._selectedValues = oldSelectedValues;
      return;
    }

    if (retainFocus) {
      const listId = addToSelect ? this.computedSelectedListId : this.computedSourceListId;
      this.selectedList = listId;
      this.updateFocusableOption(listId, toMove[0]);
    } else {
      this.interactingState.leave();
      this.isFocusOnList = false;
      this.highlightedOptions = [];
      this.highlightedOptionsLabel = [];
      this.optionToFocus = null;
    }

    this.dispatchChangeEvent(newValues);
  }

  changeOrderOfOptionsInList(moveUp) {
    const elementList = this.getElementsOfList(this.selectedList);
    const values = this.computedSelectedList.map(option => option.value);
    const toMove = values.filter(option => this.highlightedOptions.indexOf(option) > -1);
    const validSelection = toMove.length === 0 || this.selectedList !== this.computedSelectedListId;

    if (validSelection) {
      return;
    }

    let start = moveUp ? 0 : toMove.length - 1;
    let index = values.indexOf(toMove[start]);
    const validMove = moveUp && index === 0 || !moveUp && index === values.length - 1;

    if (validMove) {
      return;
    }

    if (moveUp) {
      while (start < toMove.length) {
        index = values.indexOf(toMove[start]);
        this.swapOptions(index, index - 1, values, elementList);
        start++;
      }
    } else {
      while (start > -1) {
        index = values.indexOf(toMove[start]);
        this.swapOptions(index, index + 1, values, elementList);
        start--;
      }
    }

    this._selectedValues = values;
    this.updateFocusableOption(this.selectedList, toMove[0]);
    this.optionToFocus = null;
    this.dispatchChangeEvent(values);
  }

  selectAllFromLastSelectedToOption(option, all) {
    const listId = option.getAttribute('data-type');
    this.updateCurrentSelectedList(listId, true);
    const options = this.getElementsOfList(listId);
    const end = all ? 0 : this.getOptionIndex(option);
    this.lastSelected = this.lastSelected < 0 ? end : this.lastSelected;
    const start = all ? options.length : this.lastSelected;
    let val, select;
    this.highlightedOptions = [];
    this.highlightedOptionsLabel = [];

    for (let i = 0; i < options.length; i++) {
      select = (i - start) * (i - end) <= 0;

      if (select) {
        val = options[i].getAttribute('data-value');
        this.highlightedOptions.push(val);
      }
    }
  }

  updateSelectedOptions(option, select, isMultiple) {
    const value = option.getAttribute('data-value');
    const listId = this.getListId(option);
    const optionIndex = this.getOptionIndex(option);
    this.updateCurrentSelectedList(listId, isMultiple);

    if (select) {
      if (this.highlightedOptions.indexOf(value) === -1) {
        this.highlightedOptions.push(value);
      }
    } else {
      this.highlightedOptions.splice(this.highlightedOptions.indexOf(value), 1);
    }

    this.updateFocusableOption(listId, value);
    this.lastSelected = optionIndex;
  }

  addRequiredOptionsToValue() {
    if (!this.options || !this.options.length || !this._requiredOptions || !this._requiredOptions.length) {
      // no options/requiredOptions, just ignore
      return;
    }

    const numOfSelectedValues = this._selectedValues.length;
    const allValues = this.options.map(option => option.value);

    const requiredValues = this._requiredOptions.filter(option => allValues.includes(option)); // add required options to the selected values as they are already displayed in the selected list


    this._selectedValues = [...new Set([...requiredValues, ...this._selectedValues])];

    if (numOfSelectedValues !== this._selectedValues.length) {
      // value was changed
      this.dispatchChangeEvent(this._selectedValues);
    }
  }

  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApi(() => this, {
        valueMissing: () => !this.disabled && this.required && this.computedSelectedList.length < 1,
        rangeUnderflow: () => this.computedSelectedList.length < this.min,
        rangeOverflow: () => this.computedSelectedList.length > this.max
      });
    }

    return this._constraintApi;
  }

  get _overflowMessage() {
    const minHelpMsg = this.min > 0 ? formatLabel(this.i18n.minHelp, this.min) : '';
    return formatLabel(this.i18n.maxError, this.max) + minHelpMsg;
  }

  get _underflowMessage() {
    const maxHelpMsg = this.max ? formatLabel(this.i18n.maxHelp, this.max) : '';
    const minRequiredError = this.min > 1 ? formatLabel(this.i18n.minRequiredErrorPlural, this.min) : this.i18n.minRequiredErrorSingular;
    const minError = this.min > 1 ? formatLabel(this.i18n.minErrorPlural, this.min) : this.i18n.minErrorSingular;
    return this.required ? minRequiredError + maxHelpMsg : minError + maxHelpMsg;
  }

  updateCurrentSelectedList(currentList, isMultiple) {
    if (this.selectedList !== currentList || !isMultiple) {
      if (this.selectedList) {
        this.highlightedOptions = [];
        this.highlightedOptionsLabel = [];
        this.lastSelected = -1;
      }

      this.selectedList = currentList;
    }
  }

  dispatchChangeEvent(values) {
    // the change event needs to propagate to elements outside of the light-DOM, hence making it composed.
    this.dispatchEvent(new CustomEvent('change', {
      composed: true,
      bubbles: true,
      detail: {
        value: values
      }
    }));
  }

  assertRequiredAttributes() {
    assert(!!this.label, `<lightning-dual-listbox> Missing required "label" attribute.`);
    assert(!!this.sourceLabel, `<lightning-dual-listbox> Missing required "sourceLabel" attribute.`);
    assert(!!this.selectedLabel, `<lightning-dual-listbox> Missing required "selectedLabel" attribute.`);
    assert(!!this.options, `<lightning-dual-listbox> Missing required "options" attribute.`);
  }

  swapOptions(i, j, array) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  getElementsOfList(listId) {
    const elements = this.template.querySelectorAll(`div[data-type='${listId}']`);
    return elements ? elements : [];
  }

  selectKeyboardInterface() {
    const that = this;
    that.shiftIndex = -1;
    that.lastShift = null;
    return {
      getShiftIndex() {
        return that.shiftIndex;
      },

      setShiftIndex(value) {
        that.shiftIndex = value;
      },

      getLastShift() {
        return that.lastShift;
      },

      setLastShift(value) {
        that.lastShift = value;
      },

      getElementsOfList(listId) {
        return that.getElementsOfList(listId);
      },

      selectAllOptions(option) {
        that.selectAllFromLastSelectedToOption(option, true);
      },

      updateSelectedOptions(option, select, isMultiple) {
        that.updateSelectedOptions(option, select, isMultiple);
      },

      moveOptionsBetweenLists(addToSelect) {
        that.moveOptionsBetweenLists(addToSelect, true);
      }

    };
  }

  getOptionIndex(optionElement) {
    return parseInt(optionElement.getAttribute('data-index'), 10);
  }

  getListId(optionElement) {
    return getRealDOMId(optionElement.parentElement.parentElement);
  }

  updateFocusableOption(listId, value) {
    if (listId === this.computedSourceListId) {
      this.focusableInSource = value;
    } else if (listId === this.computedSelectedListId) {
      this.focusableInSelected = value;
    }

    this.optionToFocus = value;
  }

  isNumber(value) {
    return value !== '' && value !== null && isFinite(value);
  }
  /**
   * If the new value is different than internal selected values,
   * we need to un-highlight the already highlighted options
   *
   * @param newValue
   */


  updateHighlightedOptions(newValue) {
    let isSame = false;

    if (newValue && newValue.length && this._selectedValues && this._selectedValues.length) {
      isSame = newValue.length === this._selectedValues.length && newValue.every(option => this._selectedValues.includes(option));
    }

    if (!isSame) {
      this.highlightedOptions = [];
      this.highlightedOptionsLabel = [];
    }
  }

  movedOptions(addToSelect) {
    const listName = addToSelect ? this.selectedLabel : this.sourceLabel;

    for (let i = 0; i < this.highlightedOptions.length; i++) {
      let selectedOption = addToSelect ? this.computedSourceList.filter(item => item.value === this.highlightedOptions[i]) : this.computedSelectedList.filter(item => item.value === this.highlightedOptions[i]);
      this.highlightedOptionsLabel.push(selectedOption[0].label);
    }

    if (this.highlightedOptions.length) {
      const strToFormat = this.highlightedOptions.length > 1 ? i18n.movedOptionsPlural : i18n.movedOptionsSingular;
      this._messageToDisplay = formatLabel(strToFormat, this.highlightedOptionsLabel.join(', '), listName);
    } else {
      this._messageToDisplay = '';
    }
  }
  /*LWC compiler v2.13.3*/


}

registerDecorators(LightningDualListbox, {
  publicProps: {
    sourceLabel: {
      config: 0
    },
    selectedLabel: {
      config: 0
    },
    label: {
      config: 0
    },
    options: {
      config: 0
    },
    min: {
      config: 0
    },
    max: {
      config: 0
    },
    name: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    messageWhenRangeOverflow: {
      config: 3
    },
    messageWhenRangeUnderflow: {
      config: 3
    },
    disabled: {
      config: 3
    },
    required: {
      config: 3
    },
    value: {
      config: 3
    },
    requiredOptions: {
      config: 3
    },
    variant: {
      config: 3
    },
    size: {
      config: 3
    },
    fieldLevelHelp: {
      config: 0
    },
    disableReordering: {
      config: 3
    },
    showActivityIndicator: {
      config: 3
    },
    validity: {
      config: 1
    },
    addButtonLabel: {
      config: 3
    },
    removeButtonLabel: {
      config: 3
    },
    upButtonLabel: {
      config: 3
    },
    downButtonLabel: {
      config: 3
    }
  },
  publicMethods: ["focus", "checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid"],
  track: {
    _showActivityIndicator: 1,
    _requiredOptions: 1,
    _selectedValues: 1,
    _variant: 1,
    _disabled: 1,
    _disableReordering: 1,
    _required: 1,
    _addButtonLabel: 1,
    _removeButtonLabel: 1,
    _upButtonLabel: 1,
    _downButtonLabel: 1,
    _size: 1,
    errorMessage: 1,
    highlightedOptions: 1,
    focusableInSource: 1,
    focusableInSelected: 1,
    highlightedOptionsLabel: 1
  },
  fields: ["_messageToDisplay", "isFocusOnList"]
});

var _lightningDualListbox = registerComponent(LightningDualListbox, {
  tmpl: _tmpl$1
});

const stc0 = {
  classMap: {
    "slds-box": true
  },
  key: 1
};
const stc1 = {
  key: 2
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, b: api_bind, c: api_custom_element, d: api_dynamic_text, t: api_text, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_custom_element("lightning-dual-listbox", _lightningDualListbox, {
    props: {
      "id": api_scoped_id("selectOptions"),
      "name": "Select Options",
      "label": "Select Options",
      "sourceLabel": "Available Options",
      "selectedLabel": "Selected Options",
      "options": $cmp.listOptions,
      "value": $cmp.defaultOptions,
      "requiredOptions": $cmp.requiredOptions
    },
    key: 0,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
    }
  }), api_element("div", stc0, [api_element("p", stc1, [api_text("Selected values are: " + api_dynamic_text($cmp.selected))])])];
  /*LWC compiler v2.13.3*/
}
var _tmpl = registerTemplate(tmpl);
tmpl.stylesheets = [];
tmpl.renderMode = "light";


if (_implicitStylesheets$2) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets$2);
}
if (_implicitStylesheets$2 || _implicitScopedStylesheets$2) {
  tmpl.stylesheetToken = "tnf-list_list";
}

class List extends LightningElement {
  constructor(...args) {
    super(...args);
    this.listOptions = [{
      value: '1',
      label: 'Option 1'
    }, {
      value: '2',
      label: 'Option 2'
    }, {
      value: '3',
      label: 'Option 3'
    }, {
      value: '4',
      label: 'Option 4'
    }, {
      value: '5',
      label: 'Option 5'
    }, {
      value: '6',
      label: 'Option 6'
    }, {
      value: '7',
      label: 'Option 7'
    }, {
      value: '8',
      label: 'Option 8'
    }];
    this.defaultOptions = ['7', '2', '3'];
    this.requiredOptions = ['2', '7'];
  }

  handleChange(event) {
    // Get the list of the "value" attribute on all the selected options
    const selectedOptionsList = event.detail.value;
    alert(`Options selected: ${selectedOptionsList}`);
  }
  /*LWC compiler v2.13.3*/


}

List.renderMode = "light";

registerDecorators(List, {
  fields: ["listOptions", "defaultOptions", "requiredOptions"]
});

var list = registerComponent(List, {
  tmpl: _tmpl
}); // Don't use the same name as tnf-list. It will break the functionality during composition

customElements.define('tnf-list-ce', List.CustomElementConstructor);

export { _tmpl$8 as _, list as l };
