import React from "react";

interface ComponentProps {
    name: string;
}

const HelloWorld: React.FC<ComponentProps> = ({ name }) => {
    return (
         <div
            className="text-4xl text-cyan-500 bg-black"
        >
            Hello World, {name}
        </div>
    );
};

export default HelloWorld;
