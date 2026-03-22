import { OrbitingCircles } from "./orbitingcircle"

export function Frameworks() {
    const skills = [
        "css3",
        "git",
        "html5",
        "javascript",
        "microsoft",
        "react",
        "tailwindcss",
        "vitejs",
    ];

    return (
        <div className="relative flex h-60 w-full flex-col items-center justify-center sm:right-12.5 sm:filter sm:grayscale sm:brightness-[1.2] sm:hover:filter-none
">
            <OrbitingCircles iconSize={40}>
                {skills.map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
            <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
                {skills.reverse().map((skill, index) => (
                    <Icon key={index} src={`assets/logos/${skill}.svg`} />
                ))}
            </OrbitingCircles>
        </div>
    );
}
const Icon = ({ src }) => (
    <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);