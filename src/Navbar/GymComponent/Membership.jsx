import Features from "./Features";

const Membership = ({types}) => {
    // console.log(types.optionName);
    const {price, optionName, features} = types;
    const featuresNaem = features;
    return (
        <div className="bg-purple-400 text-black p-4 rounded-xl flex flex-col">
            <p className="font-semibold text-2xl">{price}</p>
            <p className="text-xl">{optionName}</p>
            <div className="flex-grow">
                    {
                        featuresNaem.map( (feature, idx) => <Features
                        key={idx}
                        feachr={feature}
                        ></Features>)
                    }
            </div>
            <button className="w-full bg-purple-800 hover:bg-purple-700 rounded-lg p-2">Get</button>
        </div>
    );
};

export default Membership;