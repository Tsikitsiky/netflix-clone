import React, { useState } from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import {FirebaseContext} from '../context/firebase'
import FooterContainer from './footer';
import SelectProfilesContainer from './profiles';

export default function BrowseContainer() {
  const [ profile, setProfile ] = useState({})
  const [ loading,setLoading ] = useState(true)
  const [ category,setCategory ] = useState('series')
  const [searchTerm, setSearchTerm] = useState('');
  const user = {
    displayName: 'Mee',
    photoUrl : 1
  }
  return profile.displayName ? (
    <React.Fragment>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to={ROUTES.HOME} src='/images//misc/logo.svg' alt="Netflix"/>
            <Header.Link
              active={ category === 'series' ? 'true' : 'false' }
              onClick={ () => setCategory("series") }
            >Series</Header.Link>
            <Header.Link
              active={ category === 'films' ? 'true' : 'false' }
              onClick={ () => setCategory("films") }
            >Films</Header.Link>
          </Header.Group>
          <Header.Group>
            <Header.Search searchTerm={ searchTerm } setSearchTerm={ setSearchTerm }>
              <Header.Profile>
                <Header.Picture src={ user.photoUrl } />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={ user.photoUrl } />
                    <Header.Link onClick={() => FirebaseContext.auth().signOut()}>{user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group>
                    <Header.Link>Sign out</Header.Link>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Search>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </React.Fragment>)
    : (
      <SelectProfilesContainer user={ user } setProfile={setProfile}/>
    )
}