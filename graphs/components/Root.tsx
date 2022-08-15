import React, {FC, useEffect, useState} from "react";
import {SigmaContainer, ZoomControl, FullScreenControl} from "react-sigma-v2";
import {omit, mapValues, keyBy, constant} from "lodash";

import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";

import GraphSettingsController from "./GraphSettingsController";
import GraphEventsController from "./GraphEventsController";
import GraphDataController from "./GraphDataController";
import DescriptionPanel from "./DescriptionPanel";
import {Dataset, FiltersState} from "../types";
import ClustersPanel from "./ClustersPanel";
import SearchField from "./SearchField";
import drawLabel from "../canvas-utils";
import GraphTitle from "./GraphTitle";
import TagsPanel from "./TagsPanel";

import "react-sigma-v2/lib/react-sigma-v2.css";
import {GrClose} from "react-icons/gr";
import {BiRadioCircleMarked, BiBookContent} from "react-icons/bi";
import {BsArrowsFullscreen, BsFullscreenExit, BsZoomIn, BsZoomOut} from "react-icons/bs";

const Root: FC = () => {
    const [showContents, setShowContents] = useState(false);
    const [dataReady, setDataReady] = useState(false);
    const [dataset, setDataset] = useState<Dataset | null>(null);
    const [filtersState, setFiltersState] = useState<FiltersState>({
        clusters: {},
        tags: {},
    });
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    let url: string;

    if (typeof window !== "undefined") {
            window.location.protocol == 'http:' ? url = 'http://localhost:3000'  : url = 'https://lexinode.vercel.app';
        }

    // Load data on mount:
    useEffect(() => {
        //change fetch to axios
        fetch(`${url}/api/dataset`)
            .then((res) => res.json())
            .then((dataset: Dataset) => {
                setDataset(dataset);
                setFiltersState({
                    clusters: mapValues(keyBy(dataset.clusters, "key"), constant(true)),
                    tags: mapValues(keyBy(dataset.tags, "key"), constant(true)),
                });
                requestAnimationFrame(() => setDataReady(true));
            });
    }, []);

    if (!dataset) return null;

    return (
        <div id="app-root" className={showContents ? "show-contents" : ""}>
            <SigmaContainer
                graphOptions={{type: "directed"}}
                initialSettings={{
                    nodeProgramClasses: {image: getNodeProgramImage()},
                    labelRenderer: drawLabel,
                    defaultNodeType: "image",
                    defaultEdgeType: "arrow",
                    labelDensity: 0.07,
                    labelGridCellSize: 60,
                    labelRenderedSizeThreshold: 15,
                    labelFont: "Lato, sans-serif",
                    zIndex: true,
                    
                }}
                className="react-sigma"
            >
                <GraphSettingsController hoveredNode={hoveredNode} />
                <GraphEventsController setHoveredNode={setHoveredNode} />
                <GraphDataController dataset={dataset} filters={filtersState} />

                {dataReady && (
                    <>
                        <div className="controls">
                            <div className="ico">
                                <button type="button" className="show-contents" onClick={() => setShowContents(true)} title="Show caption and description">
                                    <BiBookContent />
                                </button>
                            </div>
                            <FullScreenControl className="ico" customEnterFullScreen={<BsArrowsFullscreen />} customExitFullScreen={<BsFullscreenExit />} />
                            <ZoomControl className="ico" customZoomIn={<BsZoomIn />} customZoomOut={<BsZoomOut />} customZoomCenter={<BiRadioCircleMarked />} />
                        </div>
                        <div className="contents">
                            <div className="ico">
                                <button type="button" className="ico hide-contents" onClick={() => setShowContents(false)} title="Show caption and description">
                                    <GrClose />
                                </button>
                            </div>
                            <GraphTitle filters={filtersState} />
                            <div className="panels">
                                <SearchField filters={filtersState} />
                                <DescriptionPanel />
                                <ClustersPanel
                                    clusters={dataset.clusters}
                                    filters={filtersState}
                                    setClusters={(clusters) =>
                                        setFiltersState((filters) => ({
                                            ...filters,
                                            clusters,
                                        }))
                                    }
                                    toggleCluster={(cluster) => {
                                        setFiltersState((filters) => ({
                                            ...filters,
                                            clusters: filters.clusters[cluster] ? omit(filters.clusters, cluster) : {...filters.clusters, [cluster]: true},
                                        }));
                                    }}
                                />
                                <TagsPanel
                                    tags={dataset.tags}
                                    filters={filtersState}
                                    setTags={(tags) =>
                                        setFiltersState((filters) => ({
                                            ...filters,
                                            tags,
                                        }))
                                    }
                                    toggleTag={(tag) => {
                                        setFiltersState((filters) => ({
                                            ...filters,
                                            tags: filters.tags[tag] ? omit(filters.tags, tag) : {...filters.tags, [tag]: true},
                                        }));
                                    }}
                                />
                            </div>
                        </div>
                    </>
                )}
            </SigmaContainer>
        </div>
    );
};

export default Root;

// AUTH0_SECRET='c958e7f21497340bc51870028f91cc7afa1490f6a64e59f98a06b5266eaa11ec'
// AUTH0_BASE_URL='http://localhost:3000'
// AUTH0_ISSUER_BASE_URL='https://dev-epk7auvt.us.auth0.com'
// AUTH0_CLIENT_ID='xfpWXjsA8pdF4hCDorJw2cuAMRNj2apI'
// AUTH0_CLIENT_SECRET='DWrYeNnifD2FubNBI6Bs9u-NYpOspO7RZdptWPx1EkDHFWOC0W14z-Fk4ECFoaAa'
