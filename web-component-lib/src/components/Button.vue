<script lang="ts" setup>
import { css, sva, cva } from '@acme/ui-lib/css';
import { ButtonHTMLAttributes } from 'vue';
/*////////
// Props //
////////*/

interface IProps {
  visual?: string;
  size?: string | undefined;
  label: string;
  type?: ButtonHTMLAttributes['type'];
  disabled?: boolean;
  isLoading?: boolean;
}

withDefaults(defineProps<IProps>(), {
  type: 'button',
  visual: 'dark',
  disabled: false,
});

/*/////////
// Store //
/////////*/

/*////////////
// Computed //
////////////*/

/*/////////////
// Variables //
/////////////*/
const slots = sva({
  slots: ['icon', 'auth'],
  base: {
    icon: {
      width: '16px',
      height: { base: '16px' },
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    auth: {
      opacity: '0',
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: '0px',
      left: '0px',
      overflow: 'hidden',
    },
  },
});

const button = cva({
  base: {
    transition: 'all .5s ease',
    fontFamily: 'sourcesans3',
    fontSize: 'sm',
    lineHeight: 's',
    position: 'relative',
    textStyle: 'body',
    fontWeight: 'semiBold',
    borderRadius: 'sm',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 'inherit',
    _disabled: {
      cursor: 'not-allowed',
    },
  },
  variants: {
    visual: {
      dark: {
        layerStyle: 'buttonSurfacePrimary',
      },
      white: {
        layerStyle: 'buttonSurfaceSecondary',
      },
      text: {
        layerStyle: '',
        color: 'textPrimary',
        textDecoration: 'underline',
      },
      brand: {
        layerStyle: 'buttonSurfaceBrand',
      },
    },
    size: {
      sm: {
        height: '1.75rem',
        padding: '0rem 1rem',
        fontSize: 'sm',
        borderRadius: 'sm',
      },
      md: {
        height: '2rem',
        padding: '0rem 1.5rem',
        fontSize: 'sm',
        borderRadius: 'sm',
      },
      lg: {
        height: '2.5rem',
        padding: '0.5rem 2rem',
        borderRadius: 'sm',
      },
      xl: {
        height: '3rem',
        padding: '0rem 3rem',
        fontSize: 'sm',
        borderRadius: 'sm',
      },
    },
  },
});
/*//////////////
// Life cycle //
//////////////*/

/*///////////
// Methods //
///////////*/
/*////////////
// Watchers //
////////////*/
</script>

<template>
  <button
    :type="type"
    :class="button({ visual: visual, size: size })"
    :disabled="disabled"
  >
    <slot name="auth" />
    <span
      v-if="$slots.preprend"
      :class="[
        slots().icon,
        css({
          marginRight: label ? 2 : 0,
        }),
      ]"
    >
      <slot name="preprend" />
    </span>
    {{ label }}
    <span
      v-if="$slots.append"
      :class="[
        slots().icon,
        css({
          marginLeft: 2,
        }),
      ]"
    >
      <slot name="append" />
    </span>
  </button>
</template>
