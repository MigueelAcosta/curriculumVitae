import React from "react";
import './carousel.scss';
import { FAKE_DB } from "../../DB/db";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const { basics, work, volunteer, education } = FAKE_DB;
const img1 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d94a9cdd-7cc0-49ef-98ad-f4769b5f04a8/dfpeixc-aac5939f-aca0-4ca7-a132-58fcf9364f45.png/v1/fill/w_1024,h_576,q_80,strp/evening_song_by_linked_memories_dfpeixc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDk0YTljZGQtN2NjMC00OWVmLTk4YWQtZjQ3NjliNWYwNGE4XC9kZnBlaXhjLWFhYzU5MzlmLWFjYTAtNGNhNy1hMTMyLTU4ZmNmOTM2NGY0NS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.HUk4gujrosIzIxhhF3fBqty_BTElPNdONiEAtFJOKu4';
const img2 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d94a9cdd-7cc0-49ef-98ad-f4769b5f04a8/dekpigh-0b929733-742a-4d97-bcdb-133b6f4ce275.jpg/v1/fill/w_1024,h_576,q_75,strp/where_the_flowers_shine_like_stars_by_linked_memories_dekpigh-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDk0YTljZGQtN2NjMC00OWVmLTk4YWQtZjQ3NjliNWYwNGE4XC9kZWtwaWdoLTBiOTI5NzMzLTc0MmEtNGQ5Ny1iY2RiLTEzM2I2ZjRjZTI3NS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.E15TGHCzRnQPWLYmCK7Zrei1BVKB0E8wEGvCTlMkhvA';
const img3 = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d94a9cdd-7cc0-49ef-98ad-f4769b5f04a8/deo71vr-77136ce7-28ca-4510-8283-621fed7819c0.jpg/v1/fill/w_1024,h_576,q_75,strp/restless_by_linked_memories_deo71vr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZDk0YTljZGQtN2NjMC00OWVmLTk4YWQtZjQ3NjliNWYwNGE4XC9kZW83MXZyLTc3MTM2Y2U3LTI4Y2EtNDUxMC04MjgzLTYyMWZlZDc4MTljMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8rxSSWY3BUcPTIZDAy9x1deViwiDEv1x_JIcUdzfrPI';
const Carousel = () => {
    return (
        <CCarousel controls>
  <CCarouselItem>
    <CImage className="d-block w-100" src={img1} alt="slide 1" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={img2} alt="slide 2" />
  </CCarouselItem>
  <CCarouselItem>
    <CImage className="d-block w-100" src={img3} alt="slide 3" />
  </CCarouselItem>
</CCarousel>
    )
}

export default Carousel;