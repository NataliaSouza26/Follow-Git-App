/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type OrganizationListItem_organization = {
    readonly id: string;
    readonly avatarUrl: unknown;
    readonly login: string;
    readonly name: string | null;
    readonly location: string | null;
    readonly email: string | null;
    readonly url: unknown;
    readonly " $refType": "OrganizationListItem_organization";
};
export type OrganizationListItem_organization$data = OrganizationListItem_organization;
export type OrganizationListItem_organization$key = {
    readonly " $data"?: OrganizationListItem_organization$data;
    readonly " $fragmentRefs": FragmentRefs<"OrganizationListItem_organization">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrganizationListItem_organization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "login",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "location",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "url",
      "storageKey": null
    }
  ],
  "type": "Organization",
  "abstractKey": null
};
(node as any).hash = '090c1227eaa28d3680fc301943720556';
export default node;
