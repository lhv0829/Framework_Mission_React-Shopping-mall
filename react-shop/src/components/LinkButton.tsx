type LinkButtonType = {
  href:string
  children:string
}
const LinkButton = ({ href, children }:LinkButtonType) => {
  return(
    <a href={href} className="btn btn-sm rounded-btn flex items-center font-bold light:text-gray-700 text-white">{children}</a>
  )
};

export default LinkButton;