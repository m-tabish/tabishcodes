
// eslint-disable-next-line react/prop-types
function Social_logo({ url, color, children , className}) {
    return (
        <a href={url} target="_blank" className={`${className} rounded-lg  w-12 h-12 flex items-center justify-center`} style={{ backgroundColor: color }}> 
            {children} 
        </a>

    )
}

export default Social_logo
