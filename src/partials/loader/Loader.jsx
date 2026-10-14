import {useEffect} from 'react';
import './Loader.scss';

const Loader = () => {
    useEffect(() => {
        const root = document.documentElement;
        const body = document.body;
        const previousRootOverflow = root.style.overflow;
        const previousBodyOverflow = body.style.overflow;

        root.style.overflow = 'hidden';
        body.style.overflow = 'hidden';

        return () => {
            root.style.overflow = previousRootOverflow;
            body.style.overflow = previousBodyOverflow;
        };
    }, []);

    return (
        <div className="loader" role="status" aria-live="polite" aria-label="Готуємо рецепт">
            <div className="loader__scene" aria-hidden="true">
                <svg className="loader__art" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
                    <rect className="loader__surface" x="28" y="28" width="264" height="264" rx="8" />

                    <g className="loader__burner">
                        <circle cx="92" cy="96" r="30" />
                        <circle cx="92" cy="96" r="21" />
                        <circle cx="92" cy="96" r="12" />
                    </g>
                    <g className="loader__burner loader__burner--second">
                        <circle cx="228" cy="96" r="30" />
                        <circle cx="228" cy="96" r="21" />
                        <circle cx="228" cy="96" r="12" />
                    </g>
                    <g className="loader__burner loader__burner--third">
                        <circle cx="92" cy="184" r="30" />
                        <circle cx="92" cy="184" r="21" />
                        <circle cx="92" cy="184" r="12" />
                    </g>
                    <g className="loader__burner loader__burner--fourth">
                        <circle cx="228" cy="184" r="30" />
                        <circle cx="228" cy="184" r="21" />
                        <circle cx="228" cy="184" r="12" />
                    </g>

                    <g className="loader__controls">
                        <circle cx="92" cy="256" r="8" />
                        <circle cx="160" cy="256" r="8" />
                        <circle cx="228" cy="256" r="8" />
                        <path d="M92 241v7m68-7v7m68-7v7" />
                    </g>
                </svg>
            </div>
        </div>
    );
};

export default Loader;
