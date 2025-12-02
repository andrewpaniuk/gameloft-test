import boundaries from 'eslint-plugin-boundaries'

const FS_LAYERS = [
    "app",
    "processes",
    "pages",
    "widgets",
    "features",
    "entities",
    "shared",
]

const FS_SEGMENTS = [
    "ui",
    "model",
    "lib",
    "api",
    "config",
    "assets"
]

const getLowerLayers = (layer) => FS_LAYERS.slice(FS_LAYERS.indexOf(layer) + 1)
const getUpperLayers = (layer) => FS_LAYERS.slice(0, FS_LAYERS.indexOf(layer))

const layersLib = { FS_LAYERS, FS_SEGMENTS, getLowerLayers, getUpperLayers }

const getNotSharedLayersRules = () =>
    layersLib.getUpperLayers("shared").map((layer) => ({
        from: layer,
        allow: layersLib.getLowerLayers(layer),
    }))

const slicelessLayerRules = [
    {
        from: "shared",
        allow: "shared",
    },
    {
        from: "app",
        allow: "app",
    }
]

const getLayersBoundariesElements = () =>
    layersLib.FS_LAYERS.map((layer) => ({
        type: layer,
        pattern: `${layer}/!(_*){,/*}`,
        mode: "folder",
        capture: ["slices"],
    }))

const getGodModeRules = () =>
    layersLib.FS_LAYERS.map((layer) => ({
        from: `gm_${layer}`,
        allow: [layer, ...layersLib.getLowerLayers(layer)]
    }))

const getGodModeElements = () =>
    layersLib.FS_LAYERS.map((layer) => ({
        type: `gm_${layer}`,
        pattern: `${layer}/_*`,
        mode: "folder",
        capture: ["slices"],
    }))


const fsdRules = [{
    plugins: {
        boundaries,
    },
    settings: {
        "boundaries/elements": [...getLayersBoundariesElements(), ...getGodModeElements()],
    },
    rules: {
        "boundaries/element-types": [
            2,
            {
                "default": "disallow",
                "message": "\"${file.type}\" is not allowed to import \"${dependency.type}\" | See rules: https://feature-sliced.design/docs/reference/layers/overview ",
                "rules": [...getNotSharedLayersRules(), ...slicelessLayerRules, ...getGodModeRules()],
            },
        ],
    },
}]

export default fsdRules