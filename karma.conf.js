module.exports = function(config) {
    config.set({

        frameworks: ["jasmine", "karma-typescript"],

        files: [
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        karmaTypescriptConfig: {
	    bundlerOptions: {
		transforms:[require("karma-typescript-es6-transform")]
	    },

            reports: {
                "html": {
                    "directory": "coverage",
                    "filename": ".",
                    "subdirectory": "."
                }
            },
            tsconfig: "./tsconfig.json"
        },

        logLevel: config.LOG_INFO,

        reporters: ["progress", "karma-typescript"],

        browsers: ["PhantomJS"]
    });
};
