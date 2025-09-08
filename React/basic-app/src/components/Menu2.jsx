/**
 * 메뉴 컴포넌트
 */
export function Menu2({data}) {
    // console.log();
    const {title, href, color, bg} = data;
    return (
        <a href="#" className="menu" 
        style={{ color:data.color, background: data.bg}}>{title}</a>
    );
}