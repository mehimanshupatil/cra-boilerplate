
// const designBasePxSize = require("./src/shared/utils/scaling").designBasePxSize;
const designBasePxSize = 16;
const { POSTCSS_MODES } = require("@craco/craco");
const postcssPxtorem = require("postcss-pxtorem")
module.exports = {
    style: {
        postcss: {
            mode: POSTCSS_MODES.extends,

            plugins: (process.env.NODE_ENV === 'development') ? [] : [
                postcssPxtorem({
                    rootValue: designBasePxSize,
                    unitPrecision: 6,
                    propList: ['*'],
                    // selectorBlackList: [],
                    // replace: true,
                    // mediaQuery: false,
                    // minPixelValue: 0,
                    // exclude: /node_modules/i
                })

            ]
        }
    }
};
