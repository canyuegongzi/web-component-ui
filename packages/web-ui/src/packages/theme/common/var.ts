/*******************************************************框架颜色主题****************************************************/

/**
 * 基本颜色声明
 * @type {{}}
 */
export const baseColor = {
    // base
    '--color-success': '#67C23A',
    '--color-warning': '#E6A23C',
    '--color-danger': '#F56C6C',
    '--color-info': '#909399',
    '--color-primary': '#409EFF',
    // normal
    '--color-white': '#FFFFFF',
    '--color-black': '#000000',
    // text
    '--color-text-primary': '#303133',
    '--color-text-regular': '#606266',
    '--color-text-secondary': '#909399',
    '--color-text-placeholder': '#C0C4CC',
    // border
    '--border-color-base': '#DCDFE6',
    '--border-color-light': '#E4E7ED',
    '--border-color-lighter': '#EBEEF5',
    '--border-color-extra-light': '#F2F6FC',
    // background
    '--background-color-base': '#F5F7FA',

}

/**
 * a标签样式
 */
export const aStyle = {
    '--link-color': baseColor['--color-primary'],
    '--link-hover-color': baseColor['--color-primary']
}

/**
 * 边框样式
 */
export const borderStyle = {
    '--border-width-base': '1px',
    '--border-style-base': 'solid',
    '--border-color-hover': baseColor['--color-text-placeholder'],
    '--border-base': `1px solid ${ baseColor['--color-text-placeholder']}`,
    '--border-radius-base': '4px',
    '--border-radius-small': '2px',
    '--border-radius-circle': '100%',
    '--border-radius-zero': 0,
    // Box-shadow
    '--box-shadow-base': '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)',
    '--box-shadow-dark': '0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .12)',
    '--box-shadow-light': '0 2px 12px 0 rgba(0, 0, 0, 0.1)'
}

/**
 * 基本字体
 * @type {{}}
 */
export const baseFontStyle = {
    '--font-size-extra-large': '20px',
    '--font-size-large': '18px',
    '--font-size-medium': '16px',
    '--font-size-base': '14px',
    '--font-size-small': '13px',
    '--font-size-extra-small': '12px',
    '--font-weight-primary': 500,
    '--font-weight-secondary': 100,
    '--font-line-height-primary': '24px',
    '--font-line-height-secondary': '16px',
    '--font-color-disabled-base': '#bbb',
    '--size-base': '14px'
}

/**
 * 禁用样式
 */
export const disableStyle = {
    '--disabled-fill-base': '#F5F7FA',
    '--disabled-color-base': '#C0C4CC',
    '--disabled-border-base': '#E4E7ED'
}

/**
 * 基本边框样式
 */
export const baseBorderStyle = {

}

/**
 * button 主题
 */
export const buttonThemeStyle = {
/// fontSize||Font|1
/*$--button-font-size: $--font-size-base !default;
/// fontWeight||Font|1
$--button-font-weight: $--font-weight-primary !default;
/// borderRadius||Border|2
$--button-border-radius: $--border-radius-base !default;
/// padding||Spacing|3
$--button-padding-vertical: 12px !default;
/// padding||Spacing|3
$--button-padding-horizontal: 20px !default;

/// fontSize||Font|1
$--button-medium-font-size: $--font-size-base !default;
/// borderRadius||Border|2
$--button-medium-border-radius: $--border-radius-base !default;
/// padding||Spacing|3
$--button-medium-padding-vertical: 10px !default;
/// padding||Spacing|3
$--button-medium-padding-horizontal: 20px !default;

/// fontSize||Font|1
$--button-small-font-size: 12px !default;
$--button-small-border-radius: #{$--border-radius-base - 1} !default;
/// padding||Spacing|3
$--button-small-padding-vertical: 9px !default;
/// padding||Spacing|3
$--button-small-padding-horizontal: 15px !default;
/// fontSize||Font|1
$--button-mini-font-size: 12px !default;
$--button-mini-border-radius: #{$--border-radius-base - 1} !default;
/// padding||Spacing|3
$--button-mini-padding-vertical: 7px !default;
/// padding||Spacing|3
$--button-mini-padding-horizontal: 15px !default;

/// color||Color|0
$--button-default-font-color: $--color-text-regular !default;
/// color||Color|0
$--button-default-background-color: $--color-white !default;
/// color||Color|0
$--button-default-border-color: $--border-color-base !default;

/// color||Color|0
$--button-disabled-font-color: $--color-text-placeholder !default;
/// color||Color|0
$--button-disabled-background-color: $--color-white !default;
/// color||Color|0
$--button-disabled-border-color: $--border-color-lighter !default;

/// color||Color|0
$--button-primary-border-color: $--color-primary !default;
/// color||Color|0
$--button-primary-font-color: $--color-white !default;
/// color||Color|0
$--button-primary-background-color: $--color-primary !default;
/// color||Color|0
$--button-success-border-color: $--color-success !default;
/// color||Color|0
$--button-success-font-color: $--color-white !default;
/// color||Color|0
$--button-success-background-color: $--color-success !default;
/// color||Color|0
$--button-warning-border-color: $--color-warning !default;
/// color||Color|0
$--button-warning-font-color: $--color-white !default;
/// color||Color|0
$--button-warning-background-color: $--color-warning !default;
/// color||Color|0
$--button-danger-border-color: $--color-danger !default;
/// color||Color|0
$--button-danger-font-color: $--color-white !default;
/// color||Color|0
$--button-danger-background-color: $--color-danger !default;
/// color||Color|0
$--button-info-border-color: $--color-info !default;
/// color||Color|0
$--button-info-font-color: $--color-white !default;
/// color||Color|0
$--button-info-background-color: $--color-info !default;

$--button-hover-tint-percent: 20% !default;
$--button-active-shade-percent: 10% !default;*/
}
