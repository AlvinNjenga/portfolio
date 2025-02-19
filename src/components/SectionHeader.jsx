import PropTypes from 'prop-types';

const SectionHeader = ({ title, number }) => {
    return (
        <div className="flex items-center gap-5 text-3xl">
            <span className="text-primaryColor relative self-end font-dm-mono-regular text-xl">{number}. </span>
            <h2 className="text-[#ccd6f6] font-bold">{title}</h2>
            <hr className="border-[1px] w-60 rounded-full text-[#233554] font-light" />
        </div>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default SectionHeader;