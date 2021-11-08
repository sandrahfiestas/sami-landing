import { CONTACT_ENDPOINT } from '../core/appConstants';

import BaseApi from './BaseApi';

class ContactService {
  static saveContact = (body) => BaseApi.post(`${CONTACT_ENDPOINT}/saveContact`, body);
}

export default ContactService;
