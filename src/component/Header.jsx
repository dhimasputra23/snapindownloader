import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-left">
                            <a class="navbar-brand" href={window.location.origin+"/"}
                                title="Unduh Video Tiktok, Instagram, Facebook, Youtube">Sna<span>Pin</span></a>
                    
                        </div>
                        <div class="navbar-right">
                            <div class="nav-item dropdown">
                                <button class="reset-button navbar-btn btn-darkmode" type="button" role="button"
                                    onclick="if (!window.__cfRLUnblockHandlers) return false; sendEvent('click_darkmode')"
                                    data-cf-modified-3edb70752add16ca361692ad->
                                    <i class="icon navbar-darkmode"></i>
                                </button>
                                <button class="reset-button navbar-btn navbar-lang" type="button"
                                    onclick="if (!window.__cfRLUnblockHandlers) return false; toggleLang()"
                                    data-cf-modified-3edb70752add16ca361692ad-><span>Languages</span><svg width="20" height="20"
                                        viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_1_714)">
                                            <path
                                                d="M10 18.3333C14.6024 18.3333 18.3333 14.6024 18.3333 10C18.3333 5.39763 14.6024 1.66667 10 1.66667C5.39763 1.66667 1.66667 5.39763 1.66667 10C1.66667 14.6024 5.39763 18.3333 10 18.3333Z"
                                                stroke="black" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path d="M1.66667 10H18.3333" stroke="black" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                            <path
                                                d="M10 1.66667C12.0844 3.94863 13.269 6.91003 13.3333 10C13.269 13.09 12.0844 16.0514 10 18.3333C7.9156 16.0514 6.73104 13.09 6.66667 10C6.73104 6.91003 7.9156 3.94863 10 1.66667V1.66667Z"
                                                stroke="black" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clippath id="clip0_1_714">
                                                <rect width="20" height="20" fill="white" />
                                            </clippath>
                                        </defs>
                                    </svg></button>
                                <ul class="dropdown-menu dropdown-lang">
                                    <li class="lang-item" data-id="en"><a class="dropdown-item" href="/">English</a></li>
                                    <li class="lang-item" data-id="ID"><a class="dropdown-item" href="/ID">Bahasa Indonesia</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header
