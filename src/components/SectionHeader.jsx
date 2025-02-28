import PropTypes from 'prop-types';

const SectionHeader = ({ title, number }) => {
    return (
        <div className="flex items-center gap-5 text-3xl mb-10">
            <span className="text-primaryColor relative self-end font-dm-mono-regular text-xl">{number}. </span>
            <h2 className="text-[#ccd6f6] text-[clamp(22px,5vw,32px)] font-bold text-nowrap">{title}</h2>
            <hr className="border-[1px] w-full md:w-60 rounded-full text-[#233554] font-light" />
        </div>
    )
}

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

export default SectionHeader;