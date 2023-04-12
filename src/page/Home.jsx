import React from 'react'
import { Col, Divider, Row, Input, Button, Space } from 'antd';
import { DownloadOutlined, LinkOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const { Search } = Input;


const { Meta } = Card;

const gridStyle = {
    width: '33%',
    textAlign: 'center',
};
const Home = () => {

    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };
    return (
        <>
            <div>
                <main id="main">
                    <div className="hero" id="hero">
                        <div className="container">
                            <div className="hero-title">
                                <h1 className="hero-h1">Download video Tiktok, Facebook, Instagram, Youtube</h1>
                                <h2 className="hero-h2">Snapin Downloader Tanpa Watermark. Cepat. Semua perangkat</h2>
                            </div>
                            <div className="hero-form" style={{ paddingBottom: 20 }}>
                                {/* <form action="abc2.php" name="formurl" method="get">
                                    <div className="hero-input">
                                        <div className="alert alert-warning" role="alert" id="alert" />
                                        <div className="progress-box">
                                            <div className="progress-text">Tolong tunggu sebentar<div className="spinner-grow text-light" role="status"><span className="visually-hidden">Loading...</span></div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar bg-success" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} />
                                            </div>
                                        </div>
                                        <div className="hero-input-left">
                                            <div className="icon-link"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.317 3.0441C13.598 1.76308 15.675 1.76308 16.956 3.0441C18.237 4.32511 18.237 6.40205 16.956 7.68306L13.9331 10.7059C12.6521 11.9869 10.5752 11.9869 9.29416 10.7059C9.19999 10.6117 9.11291 10.5135 9.03283 10.4118C8.81933 10.1405 8.42638 10.0937 8.15515 10.3072C7.88392 10.5207 7.83713 10.9137 8.05063 11.1849C8.1612 11.3254 8.2811 11.4606 8.41028 11.5898C10.1794 13.359 13.0478 13.359 14.817 11.5898L17.8399 8.56694C19.609 6.79777 19.609 3.92938 17.8399 2.16021C16.0707 0.391044 13.2023 0.391043 11.4331 2.16021L8.93309 4.66024C8.68902 4.90432 8.68902 5.30005 8.93309 5.54413C9.17717 5.78821 9.5729 5.78821 9.81698 5.54413L12.317 3.0441Z" fill="#C6C6D5" />
                                                <path d="M6.06698 9.2941C7.348 8.01308 9.42493 8.01308 10.7059 9.2941C10.8002 9.38831 10.8872 9.48655 10.9673 9.58821C11.1808 9.85944 11.5737 9.90623 11.845 9.69272C12.1162 9.47922 12.163 9.08627 11.9495 8.81504C11.8389 8.67454 11.7189 8.53933 11.5898 8.41021C9.82066 6.64104 6.95227 6.64104 5.1831 8.41021L2.16025 11.4331C0.391082 13.2022 0.391082 16.0706 2.16025 17.8398C3.92942 19.609 6.79781 19.609 8.56698 17.8398L11.067 15.3398C11.3111 15.0957 11.3111 14.7 11.067 14.4559C10.8229 14.2118 10.4272 14.2118 10.1831 14.4559L7.6831 16.9559C6.40208 18.2369 4.32515 18.2369 3.04413 16.9559C1.76312 15.6749 1.76312 13.598 3.04413 12.3169L6.06698 9.2941Z" fill="#C6C6D5" />
                                                <path d="M12.317 3.0441C13.598 1.76308 15.675 1.76308 16.956 3.0441C18.237 4.32511 18.237 6.40205 16.956 7.68306L13.9331 10.7059C12.6521 11.9869 10.5752 11.9869 9.29416 10.7059C9.19999 10.6117 9.11291 10.5135 9.03283 10.4118C8.81933 10.1405 8.42638 10.0937 8.15515 10.3072C7.88392 10.5207 7.83713 10.9137 8.05063 11.1849C8.1612 11.3254 8.2811 11.4606 8.41028 11.5898C10.1794 13.359 13.0478 13.359 14.817 11.5898L17.8399 8.56694C19.609 6.79777 19.609 3.92938 17.8399 2.16021C16.0707 0.391044 13.2023 0.391043 11.4331 2.16021L8.93309 4.66024C8.68902 4.90432 8.68902 5.30005 8.93309 5.54413C9.17717 5.78821 9.5729 5.78821 9.81698 5.54413L12.317 3.0441Z" stroke="#C6C6D5" strokeWidth="0.6" strokeLinecap="round" />
                                                <path d="M6.06698 9.2941C7.348 8.01308 9.42493 8.01308 10.7059 9.2941C10.8002 9.38831 10.8872 9.48655 10.9673 9.58821C11.1808 9.85944 11.5737 9.90623 11.845 9.69272C12.1162 9.47922 12.163 9.08627 11.9495 8.81504C11.8389 8.67454 11.7189 8.53933 11.5898 8.41021C9.82066 6.64104 6.95227 6.64104 5.1831 8.41021L2.16025 11.4331C0.391082 13.2022 0.391082 16.0706 2.16025 17.8398C3.92942 19.609 6.79781 19.609 8.56698 17.8398L11.067 15.3398C11.3111 15.0957 11.3111 14.7 11.067 14.4559C10.8229 14.2118 10.4272 14.2118 10.1831 14.4559L7.6831 16.9559C6.40208 18.2369 4.32515 18.2369 3.04413 16.9559C1.76312 15.6749 1.76312 13.598 3.04413 12.3169L6.06698 9.2941Z" stroke="#C6C6D5" strokeWidth="0.6" strokeLinecap="round" />
                                            </svg></div>
                                            <input name="url" id="url" type="text" className="form-control" defaultValue placeholder="Tempel tautan TikTok di sini" required aria-label="Name" autoComplete="off" autoCapitalize="none" />
                                            <div className="paste"><button type="button" className="btn btn-paste"><i className="icon icon-paste" /><span>Tempel</span></button></div>
                                        </div>
                                        <div className="hero-input-right"><button type="submit" className="btn btn-go flex-center"><i className="icon icon-download" />Download</button></div>
                                    </div>
                             
                                </form> */}


                                <Row
                                    gutter={{
                                        xs: 8,
                                        sm: 16,
                                        md: 24,
                                        lg: 32,
                                    }}
                                >

                                    <Col className="gutter-row" span={3}>

                                    </Col>
                                    <Col className="gutter-row" span={18}>
                                        {/* <Space.Compact
                                            style={{
                                                width: '100%',
                                                height: '100%'

                                            }}
                                        >

                    
                                            <Input size='large' placeholder="Tempelkan tautan di sini" autoComplete='off' style={{ lineHeight: 1.5, width: '100%' }} />
                                            <Button type="primary" style={{ backgroundColor: 'green', height: 52, fontSize: '18px' }} icon={<DownloadOutlined style={{ fontSize: '30px' }} />}>Download</Button>
                                        </Space.Compact> */}
                                        <Search
                                            enterButton="Download"
                                            size='large'
                                            prefix={<LinkOutlined style={{ fontSize: '20px' }} />}
                                            placeholder='Tempelkan Tautan Link Di sini!'



                                        >

                                        </Search>
                                    </Col>

                                    <Col className="gutter-row" span={3}>

                                    </Col>

                                </Row>
                            </div>
                        </div>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            
                            

                        </div>
                    </div>

                    <div className='content' id='content'>
                        <div className='container'>
                            <div className='row'>
                                <h3 class="h3">Download video Tiktok, Facebook, Instgram, Youtube Tanpa Watermark GRATIS</h3>
                                <p>Snapin adalah salah satu Platform video Tiktok, Facebook, Instgram, Youtube Downloader terbaik yang tersedia online untuk semua platform
                                    tanpa tanda air. Anda tidak perlu menginstal perangkat lunak apa pun di komputer atau ponsel
                                    Anda, yang Anda butuhkan hanyalah tautan video dari semua platform, dan semua pemrosesan dilakukan di
                                    pihak kami, sehingga Anda dapat unduh video Tiktok, Facebook, Instgram, Youtube dengan sangat cepat ke perangkat Anda
                                    dengan satu klik.</p>
                                <h4 class="h4 mt-3">Fitur utama</h4>
                                <ul style={{ marginLeft: 30 }}>
                                    <li >Kecepatan Cepat... Kami membuat Snapin sangat cepat, Hampir tidak ada penundaan.</li>
                                    <li>Download Tiktok, Facebook, Instgram, Youtube No watermark untuk kualitas yang lebih baik, yang sebagian besar alat di
                                        luar sana tidak bisa.</li>
                                    <li>Unduh video Tiktok, Facebook, Instgram, Youtube, Musically video di perangkat apa pun yang Anda inginkan: seluler,
                                        PC, atau tablet. Tiktok, Facebook, Instgram, Youtube hanya memungkinkan pengguna untuk download video dengan
                                        aplikasinya Tiktok, Facebook, Instgram, Youtube dan video yang diunduh berisi tanda air.</li>
                                    <li>Download dengan menggunakan browser Anda: Kami ingin mempermudah Anda. Tidak perlu
                                        mengunduh atau menginstal perangkat lunak apa pun. Kami membuat aplikasi untuk tujuan
                                        ini juga tetapi Anda hanya dapat menginstal kapan pun Anda mau.</li>
                                    <li>Itu selalu gratis. Kami hanya menempatkan beberapa iklan, yang mendukung pemeliharaan
                                        layanan kami, dan pengembangan lebih lanjut.</li>
                                    <li>Snapin Baru memberikan pengguna kemampuan untuk mengunduh tampilan slide foto Tiktok
                                        sebagai format Video Mp4. Gambar dan musik di tayangan slide Tiktok akan digabungkan
                                        secara otomatis oleh Snapin. Selain itu, Anda juga dapat mengunduh setiap gambar dalam
                                        tampilan slide ke komputer Anda segera.</li>
                                </ul>
                                <Collapse accordion ghost>
                                    <Panel header="Bagaimana caranya Download video Tiktok Facebook, Instagram, Youtube tanpa watermark?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="1">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>Buka aplikasi TikTok, Facebook, Instagram, Youtube di ponsel Anda/atau Situs Web di komputer Anda.</li>
                                            <li>Pilih video apa pun yang ingin Anda unduh.</li>
                                            <li>Klik untuk <span class="btn-click"> Bagikan</span> tombol di kanan bawah.</li>
                                            <li>Klik <span class="btn-click"> Salin tautan</span> tombol.</li>
                                            <li>Unduh video TikTok, Facebook, Instagram, Youtube, video di perangkat apa pun yang Anda inginkan: seluler, PC, atau tablet. TikTok hanya memungkinkan pengguna untuk download video dengan aplikasinya Tiktok, Facebook, Instagram, Youtube dan video yang diunduh berisi tanda air.</li>
                                            <li>Kembali ke <span class="btn-click">Snapin</span> dan tempel tautan unduhan Anda ke bidang di atas lalu klik ke <span class="btn-click"> Download</span> tombol.</li> <li>Tunggu server kami melakukan pekerjaan dan kemudian, Pilih Server 1 atau 3 untuk Save video Tiktok, Facebook, Instagram, Youtube ke perangkat Anda.</li>
                                        </ul>
                                    </Panel>
                                    <Panel header="Cara mendapatkan TikTok, Facebook, Instagram, Youtube video download tautan?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="2">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>Buka situs web atau aplikasi TikTok, Facebook, Instagram, Youtube Anda</li>
                                            <li>Pilih video TikTok, Facebook, Instagram, Youtube yang ingin Anda unduh</li>
                                            <li>Temukan tombol <span class="btn-click"> Bagikan</span>, Klik. Di sana temukan tombol <span class="btn-click">Salin tautan</span> dan Pilih salin tautan</li>
                                            <li>URL video unduhan Anda sudah siap di papan klip.</li>
                                        </ul>
                                    </Panel>
                                    <Panel header="Dimanakah TikTok, Facebook, Instagram, Youtube videos saved setelah diunduh?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="3">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>

                                                Saat Anda mengunduh file, mereka biasanya disimpan ke folder apa pun yang telah Anda tetapkan sebagai default. Browser Anda biasanya mengatur folder ini untuk Anda. Dalam pengaturan browser, Anda dapat mengubah dan memilih secara manual folder tujuan untuk Download TikTok videos anda.
                                            </li>
                                        </ul>
                                    </Panel>
                                    <Panel header="Apakah Snapin menyimpan video yang diunduh atau menyimpan salinan video?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="4">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>


                                                Oh tidak, Snapin tidak menyimpan video, kami juga tidak menyimpan salinan video yang diunduh. Semua video di-host di server TikTok. Selain itu, kami tidak melacak riwayat unduhan pengguna kami, sehingga penggunaan Snapin benar-benar anonim.
                                            </li>
                                        </ul>
                                    </Panel>
                                    <Panel header="Apakah saya perlu menginstal instruksi atau ekstensi?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="5">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>


                                                Tidak. Kami mencoba untuk menjaga hal-hal semudah mungkin bagi pengguna kami. Yang Anda butuhkan hanyalah tautan unduhan TikTok Anda. dan itu masuk ke situs web kami. .
                                            </li>
                                        </ul>
                                    </Panel>
                                    <Panel header="Apakah saya harus membayar ke Tiktok, Facebook, Instagram, Youtube Downloader?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="6">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>


                                                Tidak, Anda tidak perlu membayar apa pun karena perangkat lunak kami selalu gratis. Anda dapat mendukung kami dengan menonaktifkan Ad Blocks di browser Anda. Ini mendukung pengembangan lebih lanjut kami.
                                            </li>
                                        </ul>
                                    </Panel>
                                    <Panel header="Apakah ada batasan untuk Unduh video Tiktok, Facebook, Instagram, Youtube di Snapin?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="7">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>


                                                Tidak, Anda dapat mengunduh banyak video TikTok, Facebook, Instagram, Youtube favorit Anda di SnapTik tanpa batas unduhan.
                                            </li>
                                        </ul>
                                    </Panel>
                                    {/* <Panel header="Dimanakah TikTok videos saved setelah diunduh?" style={{ fontSize: "20px", fontWeight: 'bold' }} key="8">
                                        <ul style={{ fontWeight: 'normal' }}>
                                            <li>

                                                Saat Anda mengunduh file, mereka biasanya disimpan ke folder apa pun yang telah Anda tetapkan sebagai default. Browser Anda biasanya mengatur folder ini untuk Anda. Dalam pengaturan browser, Anda dapat mengubah dan memilih secara manual folder tujuan untuk Download TikTok videos anda.
                                            </li>
                                        </ul>
                                    </Panel> */}
                                </Collapse>
                            </div>

                        </div>

                    </div>





                </main>
                <footer>
                    <div className="copyright">
                        <div className="container">
                            <div className="copyright-link">
                                <ul className="list-unstyled">
                                    <li><a href={window.location.origin + "/contact"}>Kontak</a></li>
                                    <li><a href={window.location.origin + "/terms-of-service"}>Ketentuan Layanan</a></li>
                                    <li><a href={window.location.origin + "/privacy-policy"}>Kebijakan pribadi</a></li>
                                </ul>
                            </div>
                            <div className="copyright-text">© 2023 <a href="#" title="Snapin">Snapin</a>. All rights reserved.</div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Home
