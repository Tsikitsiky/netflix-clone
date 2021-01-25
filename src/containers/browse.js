import React, { Profiler, useState } from 'react';
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase'
import FooterContainer from './footer';
import SelectProfilesContainer from './profiles';

export default function BrowseContainer() {
    const [profile, setProfile] = useState({})
    const user = {
        displayName: "Meee",
        photoUrl: "1"
    };
    return profile.displayName ? (
        <>
            BrowseContainer
            <FooterContainer />
        </>
    ) : (<SelectProfilesContainer user={user} setProfile={setProfile} />);
}
