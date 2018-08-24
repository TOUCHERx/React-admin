import React from 'react';
import { Delete, Admin, Resource } from 'react-admin';
import loopbackRestClient from 'aor-loopback';
import { PostCreate , PostList, PostEdit, PostFilter} from './posts';


const dataProvider = loopbackRestClient('http://localhost:3000/api/posts?access_token=H2TWSyAVHg2PenPKwo2puBoAJFEiFhIojaAYtjqTHUtn3C4D1KSj9YqGEfFin37f');
const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit}
        remove={Delete} filter={PostFilter} />

  </Admin>
);
export default App;