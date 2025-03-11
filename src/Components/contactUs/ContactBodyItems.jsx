import PropTypes from 'prop-types';

const ContactBodyItems = ({ title, desc, Icon }) => {
    return (
        <div className="w-full md:w-[30%] p-6 border border-orange-500 flex flex-col items-center justify-center gap-3 bg-white rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-lg">

            {/* Icon Section */}
            <div className="w-16 h-16 flex items-center justify-center border border-orange-400 rounded-full text-orange-400 hover:bg-red-400 hover:text-white cursor-pointer transition duration-300 ease-in-out">
                <Icon className="text-3xl md:text-4xl" />
            </div>

            {/* Title */}
            <span className="font-bold text-lg md:text-xl text-center">{title}</span>

            {/* Description */}
            {desc.map((item, index) => (
                <span key={index} className="text-sm md:text-base text-center text-gray-700">
                    {item}
                </span>
            ))}
        </div>
    );
};

// Prop validation using PropTypes
ContactBodyItems.propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.arrayOf(PropTypes.string).isRequired,
    Icon: PropTypes.elementType.isRequired,  // elementType allows for any component type (like MUI icons)
};

export default ContactBodyItems;
