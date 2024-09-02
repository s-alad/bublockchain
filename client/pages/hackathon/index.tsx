import React from "react";

import s from './hackathon.module.scss';
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className={s.top}>
                <Link className={s.logo} href={'/'}>
                    <Image src="/bublogo.png" alt="BU Blockchain" width={48} height={48} />
                </Link>
                <Link className={s.bu} href={'/'}>
                    Boston University Blockchain
                </Link>
                <p className={s.spacer}>&lt;&gt;</p>
                <Link href={'https://bostonblockchainassociation.com/'}>
                    <svg width="128" height="29" viewBox="0 0 128 29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32.9 28V25.3L36.1 25.1V3.4C35 3 34 3.4 33 3.1C32.7 2.3 32.8 1.4 32.9 0.499999C34.4 0.0999986 35.8 0.399999 37.3 0.299999C40.5 0.299999 43.6 0.199999 46.8 0.299999C51.9 0.499999 55.1 4.7 53.9 9.5C53.5 11.2 52.4 12.3 51.1 13.3C51.1 13.7 51.4 13.7 51.6 13.8C54.7 15.1 55.7 17.6 55.5 20.8C55.3 24.1 53.6 26.3 50.5 27.4C49.8 27.7 49 27.9 48.2 28C43.1 28 38.1 28 32.9 28ZM39.7 25.2C40.2 25.2 40.4 25.3 40.7 25.3C42.3 25.3 43.9 25.3 45.5 25.3C46.8 25.3 48.2 25 49.4 24.5C51.3 23.6 52.3 21.5 52 19.5C51.8 17.3 50.6 15.8 48.5 15.4C45.6 14.9 42.7 15 39.7 15.1V25.2ZM39.8 3.2V12.3C42 12.3 44 12.4 46.1 12.3C48.8 12.1 50.5 10.5 50.6 8.1C50.7 5.4 49.5 4 46.7 3.4C44.4 3 42.1 3.2 39.8 3.2Z" fill="#3BDF85"></path><path d="M18.2 13.5C20.9 14.6 22.7 16.4 22.8 19.5C23 24.6 20.1 27.9 14.8 28.1C10 28.3 5.1 28.1 0.3 28.1C-0.2 27.2 0.1 26.3 0 25.5C1.1 24.9 2.2 25.5 3.3 25V3.3L0.3 3.1C-0.1 2.2 0 1.4 0.2 0.3C3.5 0.3 6.8 0.3 10.2 0.3C12 0.3 13.8 0.1 15.6 0.5C18.4 1.2 20.4 2.8 21 5.5C21.6 8.2 21.2 11 18.7 12.9C18.5 13.1 18.3 13.3 18.2 13.5ZM7.1 15V25C10.4 25.5 14.7 25.3 16.5 24.5C18.7 23.6 19.6 21.8 19.4 19.3C19.1 17 17.9 15.6 15.7 15.2C12.8 14.8 10 14.9 7.1 15ZM7.1 12.4C9.8 12.2 12.3 12.8 14.8 12C16.8 11.5 18.1 9.7 17.9 7.7C17.8 5.5 16.7 4.1 14.5 3.6C12.1 3 9.6 3.3 7.1 3.3V12.4Z" fill="#3BDF85"></path><path d="M65.2 28C65 27.1 65 26.2 65.2 25.3L68.1001 25.1L76.3001 3.6C75.7001 2.8 74.8 3.3 74.1 3C73.7001 2.2 74.0001 1.4 73.9001 0.299999C76.1001 0.299999 78.1 0.199999 80.2 0.299999C81.7 0.399999 82.0001 1.9 82.4001 3C85.0001 9.7 87.5 16.4 90.1 23C90.3001 23.8 90.7 24.6 91.2 25.3H93.9001C94.2001 26.2 94.2001 27.2 93.9001 28.1H84.5001C84.2001 27.2 84.3001 26.4 84.4001 25.6C85.3001 25.1 86.2001 25.5 87.3001 25.2C86.9001 22.9 85.7001 20.9 85.1 18.7H74.1L71.8001 25C72.7001 25.7 73.8 25.1 74.7 25.6C74.9 26.5 74.9 27.3 74.7 28.2L65.2 28ZM79.7 4.8L79.3001 4.7L75.2 15.6H83.8001C82.4001 11.9 81.1 8.3 79.7 4.8Z" fill="#3BDF85"></path><path d="M100.2 12.2V0.100006H111.8C112 4.10001 112 8.20001 111.8 12.2H100.2ZM110.5 10.7V1.30001H101.6V10.7H110.5Z" fill="#FF9100"></path><path d="M115.9 0H127.4V12.2H115.9V0ZM126.2 1.3H117.3V10.7H126.2V1.3Z" fill="#FF9100"></path><path d="M100.3 16.3C104.1 16 107.9 16.2 111.8 16.2V28.4H100.3V16.3ZM110.5 17.7H101.5V27.1H110.5V17.7Z" fill="#FF9100"></path><path d="M115.9 28.4V16.4H127.5V28.4H115.9ZM117.2 17.6V27H126.1V17.6H117.2Z" fill="#FF9100"></path></svg>
                </Link>
            </div>
            <div className={s.main}>
                <h1>BeanTown Showdown</h1>
                <h2>Hackathon and Pitchathon</h2>
                <div className={s.info}>
                  <div className={s.infoItem}>
                    <h3>Date</h3>
                    <p>November 23-24, 2024</p>
                  </div>
                  <div className={s.infoItem}>
                    <h3>Prizes</h3>
                    <p><i>To be revealed soon</i></p>
                    <p>1st Place: $xxxx</p>
                    <p>2nd Place: $xxxx</p>
                    <p>3rd Place: $xxxx</p>
                  </div>
                  <div className={s.infoItem}>
                    <h3>Location</h3>
                    <p>Boston University</p>
                    <p>Photonics Center</p>
                    <p>8 St Mary's St, Boston, MA 02215</p>
                  </div>
                </div>
            </div>

        </>
    );
}