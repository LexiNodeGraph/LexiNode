import React, { FC, useEffect, useMemo, useState, useCallback } from "react";
import { SigmaContainer, ZoomControl, FullScreenControl } from "react-sigma-v2";
import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";

import GraphSettingsController from "./GraphSettingsController";
import GraphDataController from "./GraphDataController";
import GraphEventsController from "./GraphEventsController";
import drawLabel from "../canvas-utils";

import "react-sigma-v2/lib/react-sigma-v2.css";
import { GrClose } from "react-icons/gr";
import { BiRadioCircleMarked, BiBookContent } from "react-icons/bi";
import { BsArrowsFullscreen, BsFullscreenExit, BsZoomIn, BsZoomOut } from "react-icons/bs";
import axios from "axios";

const Root: FC = () => {
    const [showContents, setShowContents] = useState(false);
    const [dataReady, setDataReady] = useState(false);
    const [data, setData] = useState<any[] | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    const url = useMemo(() => {
        if (typeof window !== "undefined") {
            return window.location.protocol === "http:"
                ? "http://localhost:3000"
                : "https://lexinode.vercel.app";
        }
    }, []);

    // Load data on mount:
    useEffect(() => {
        axios.get(`${url}/api/paper/find/keywords/all`).then((response) => {
            setData(response.data);
            requestAnimationFrame(() => setDataReady(true));
        });
    }, [url]);

    if (!data) {
        return null; // or a loading spinner, etc.
    }

    return (
        <div id="app-root" className={`z-0 ${showContents ? "show-contents" : ""}`}>
            <SigmaContainer
                initialSettings={{
                    nodeProgramClasses: { image: getNodeProgramImage() },
                    labelRenderer: drawLabel,
                    defaultNodeType: "image",
                    defaultEdgeType: "line",
                    labelDensity: 0.1,
                    labelGridCellSize: 60,
                    labelRenderedSizeThreshold: 15,
                    labelFont: "Lato, sans-serif",
                    zIndex: true,
                    allowInvalidContainer: true,
                }}
                className="react-sigma"
            >
                <GraphEventsController setHoveredNode={setHoveredNode} />
                <GraphSettingsController hoveredNode={hoveredNode} />
                <GraphDataController dataset={data} />

                <div className="controls">
                    <div className="ico">
                        <button
                            type="button"
                            className="show-contents"
                            onClick={() => setShowContents(true)}
                            title="Show caption and description"
                        >
                            <BiBookContent />
                        </button>
                    </div>
                    <FullScreenControl
                        className="ico"
                        customEnterFullScreen={<BsArrowsFullscreen />}
                        customExitFullScreen={<BsFullscreenExit />}
                    />
                    <ZoomControl
                        className="ico"
                        customZoomIn={<BsZoomIn />}
                        customZoomOut={<BsZoomOut />}
                        customZoomCenter={<BiRadioCircleMarked />}
                    />
                </div>
                {showContents && (
                    <div className="contents">
                        <div className="ico">
                            <button
                                type="button"
                                className="ico hide-contents"
                                onClick={() => setShowContents(false)}
                                title="Hide caption and description"
                            >
                                <GrClose />
                            </button>
                        </div>
                        <div className="panels">{/* contents */}</div>
                    </div>
                )}
            </SigmaContainer>
        </div>
    );
};

export default Root;
