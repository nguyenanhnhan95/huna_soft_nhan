import { useEffect, useRef, useState } from "react";
function HeaderSearch(){
    const [isModalSearchVisible, setIsModalSearchVisible] = useState(false);
    const searchHeaderRef = useRef(null);
    const searchHeaderModalRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchHeaderRef.current && !searchHeaderRef.current.contains(event.target)) {
                setIsModalSearchVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleSearchHeaderClick = () => {
        if (isModalSearchVisible) {
            searchHeaderModalRef.current.style.display = 'none';
            setIsModalSearchVisible(false);
        } else {
            searchHeaderModalRef.current.style.display = 'block';
            setIsModalSearchVisible(true);
        }
    };
    return(
        <>
        <div className="header-search" ref={searchHeaderRef}>
                <i className="header-search-show fa-solid fa-magnifying-glass fa-2x " onClick={handleSearchHeaderClick} />
                <div className="header-search-input   align-items-center" style={{ display: isModalSearchVisible ? 'block' : 'none' }} ref={searchHeaderModalRef}>
                  <div className="d-flex align-items-center">
                    <input className="header-search-input-enter " />
                    <div className="header-search-input-press ">
                      <i className="fa-solid fa-magnifying-glass fa-lg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="header-search-mob">
                <div className="header-search-input d-flex align-items-center">
                  <input className="header-search-input-enter" />
                  <div className="header-search-input-press">
                    <i className="fa-solid fa-magnifying-glass" />
                  </div>
                </div>
              </div>
        </>
    )
}
export default  HeaderSearch;