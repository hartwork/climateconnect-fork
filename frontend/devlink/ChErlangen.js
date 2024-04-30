"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./ChErlangen.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e-130":{"id":"e-130","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-131"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698241822486},"e-131":{"id":"e-131","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-130"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698241822488},"e-132":{"id":"e-132","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-133"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698242422226},"e-133":{"id":"e-133","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-132"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698242422226},"e-134":{"id":"e-134","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-135"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698242422784},"e-135":{"id":"e-135","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-134"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698242422784},"e-136":{"id":"e-136","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-137"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698242423243},"e-137":{"id":"e-137","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-136"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698242423243},"e-146":{"id":"e-146","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-147"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698659490909},"e-147":{"id":"e-147","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-146"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698659490909},"e-201":{"id":"e-201","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698243192416},"e-202":{"id":"e-202","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1698243192417},"e-203":{"id":"e-203","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698243609892},"e-204":{"id":"e-204","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698243609893},"e-205":{"id":"e-205","name":"","animationType":"custom","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-206"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698243647464},"e-206":{"id":"e-206","name":"","animationType":"custom","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-205"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1698243647491},"e-211":{"id":"e-211","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-212"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705052732920},"e-212":{"id":"e-212","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-211"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705052732920},"e-213":{"id":"e-213","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-214"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705052732920},"e-214":{"id":"e-214","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-213"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705052732920},"e-223":{"id":"e-223","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-224"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705052732920},"e-224":{"id":"e-224","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-223"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"64f06d4a31cd707991282add|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705052732920},"e-243":{"id":"e-243","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-244"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d85","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d85","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572017541},"e-244":{"id":"e-244","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-243"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d85","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d85","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705572017541},"e-249":{"id":"e-249","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-250"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572017541},"e-250":{"id":"e-250","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-249"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d8e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d8e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572017541},"e-255":{"id":"e-255","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-256"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572017541},"e-256":{"id":"e-256","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-255"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d97","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|4813718c-a89f-4137-05ed-c12ddc214d97","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572017541},"e-261":{"id":"e-261","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-262"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-262":{"id":"e-262","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-261"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6254","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6254","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-263":{"id":"e-263","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-264"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff625d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff625d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-264":{"id":"e-264","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-263"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff625d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff625d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-265":{"id":"e-265","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-266"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6266","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6266","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-266":{"id":"e-266","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-265"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6266","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6266","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-267":{"id":"e-267","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-268"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6271","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6271","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-268":{"id":"e-268","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-267"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6271","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff6271","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-269":{"id":"e-269","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-270"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff627c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff627c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-270":{"id":"e-270","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-269"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff627c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|3e863cb7-6095-7e1c-94b5-c0bd4eff627c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705572122758},"e-271":{"id":"e-271","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-272"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|801ee2a1-4e75-4d8d-adea-7773731ef4a1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|801ee2a1-4e75-4d8d-adea-7773731ef4a1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705573098049},"e-272":{"id":"e-272","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-271"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba108c4476f657|801ee2a1-4e75-4d8d-adea-7773731ef4a1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba108c4476f657|801ee2a1-4e75-4d8d-adea-7773731ef4a1","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705573098049},"e-275":{"id":"e-275","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-276"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-276":{"id":"e-276","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-275"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7c9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7c9","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705612890494},"e-281":{"id":"e-281","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-282"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-282":{"id":"e-282","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-281"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7d2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7d2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-289":{"id":"e-289","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-290"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7db","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7db","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-290":{"id":"e-290","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-289"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7db","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7db","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-291":{"id":"e-291","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-292"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-292":{"id":"e-292","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-291"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7f6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b7f6","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-293":{"id":"e-293","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-294"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-294":{"id":"e-294","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-293"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b801","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b801","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-295":{"id":"e-295","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-296"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b80c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b80c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-296":{"id":"e-296","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-295"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b80c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b80c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-297":{"id":"e-297","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-298"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-298":{"id":"e-298","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-297"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b815","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b815","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-299":{"id":"e-299","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-300"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b81e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b81e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-300":{"id":"e-300","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-299"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b81e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b81e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-301":{"id":"e-301","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-302"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b829","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b829","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-302":{"id":"e-302","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-301"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b829","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b432247005c93ed4104d6|30137e44-8e03-affa-db73-e6885a20b829","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705612890494},"e-305":{"id":"e-305","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-306"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e03b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e03b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-306":{"id":"e-306","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-305"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e03b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e03b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705659094987},"e-309":{"id":"e-309","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-310"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e044","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e044","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-310":{"id":"e-310","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-309"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e044","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e044","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-315":{"id":"e-315","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-316"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e04d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e04d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-316":{"id":"e-316","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-315"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e04d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e04d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-325":{"id":"e-325","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-326"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e062","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e062","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-326":{"id":"e-326","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-325"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e062","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e062","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705659094987},"e-331":{"id":"e-331","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-332"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e06b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e06b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-332":{"id":"e-332","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-331"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e06b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e06b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-333":{"id":"e-333","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-334"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e074","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e074","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-334":{"id":"e-334","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-333"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e074","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|4d183245-b9d8-10a3-2325-8930ae77e074","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705659094987},"e-339":{"id":"e-339","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-340"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-340":{"id":"e-340","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-339"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-341":{"id":"e-341","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-342"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-342":{"id":"e-342","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-341"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-343":{"id":"e-343","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-344"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-344":{"id":"e-344","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-343"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-345":{"id":"e-345","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-346"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-346":{"id":"e-346","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-345"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-355":{"id":"e-355","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-356"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-356":{"id":"e-356","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-355"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-363":{"id":"e-363","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-364"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-364":{"id":"e-364","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-363"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705669682275},"e-365":{"id":"e-365","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-366"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-366":{"id":"e-366","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-365"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-367":{"id":"e-367","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-368"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-368":{"id":"e-368","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-367"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-373":{"id":"e-373","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-374"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-374":{"id":"e-374","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-373"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1705669682275},"e-375":{"id":"e-375","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-376"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-376":{"id":"e-376","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-375"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-385":{"id":"e-385","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-386"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-386":{"id":"e-386","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-385"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65aa743c0c870bc3c48f3e50|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1705669682275},"e-387":{"id":"e-387","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-388"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787127405},"e-388":{"id":"e-388","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-387"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787127407},"e-389":{"id":"e-389","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-390"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787198622},"e-390":{"id":"e-390","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-389"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787198624},"e-391":{"id":"e-391","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-392"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787213701},"e-392":{"id":"e-392","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-391"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787213703},"e-393":{"id":"e-393","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-394"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787228996},"e-394":{"id":"e-394","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-393"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787228998},"e-395":{"id":"e-395","name":"","animationType":"custom","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-396"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787243482},"e-396":{"id":"e-396","name":"","animationType":"custom","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-395"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"654b41c808e6fa559ded7511|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"654b41c808e6fa559ded7511|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706787243486},"e-401":{"id":"e-401","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-402"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-402":{"id":"e-402","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-401"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8f5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8f5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1706876418739},"e-407":{"id":"e-407","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-408"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-408":{"id":"e-408","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-407"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8fe","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff8fe","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-415":{"id":"e-415","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-416"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff907","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff907","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-416":{"id":"e-416","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-415"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff907","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff907","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-417":{"id":"e-417","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-418"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff922","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff922","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-418":{"id":"e-418","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-417"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff922","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff922","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-419":{"id":"e-419","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-420"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff92d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff92d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-420":{"id":"e-420","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-419"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff92d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff92d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-421":{"id":"e-421","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-422"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff938","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff938","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-422":{"id":"e-422","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-421"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff938","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff938","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-423":{"id":"e-423","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-424"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff941","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff941","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-424":{"id":"e-424","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-423"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff941","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff941","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-425":{"id":"e-425","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-426"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff94a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff94a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-426":{"id":"e-426","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-425"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff94a","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff94a","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-427":{"id":"e-427","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-428"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff955","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff955","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-428":{"id":"e-428","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-427"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff955","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"62611a5459ba1002c876f662|ea313190-48a3-cfe7-5d0f-27b18c9ff955","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1706876418739},"e-430":{"id":"e-430","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-431"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-431":{"id":"e-431","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-430"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-432":{"id":"e-432","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-433"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-433":{"id":"e-433","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-432"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|46e6a8bb-8e60-7398-6013-a9777a8f61d7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-434":{"id":"e-434","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-435"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-435":{"id":"e-435","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-434"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|a37d5bf6-532f-c872-db63-d69ae4efe77e","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-436":{"id":"e-436","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-437"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-437":{"id":"e-437","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-436"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|85b5e294-3340-bc85-fe60-a4e1eceafd2c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-446":{"id":"e-446","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-447"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-447":{"id":"e-447","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-446"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|3868cf35-4929-f594-44ef-3fc0257b25ca","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-454":{"id":"e-454","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-455"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-455":{"id":"e-455","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-454"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686e5","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1707116910375},"e-456":{"id":"e-456","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-457"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-457":{"id":"e-457","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-456"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686ee","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-458":{"id":"e-458","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-459"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-459":{"id":"e-459","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-458"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ec3874cf-463f-8c54-6012-c4ca04e686f7","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-464":{"id":"e-464","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-465"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-465":{"id":"e-465","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-464"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d06","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1707116910375},"e-466":{"id":"e-466","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-467"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-467":{"id":"e-467","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-466"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d0f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-476":{"id":"e-476","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-477"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-477":{"id":"e-477","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-476"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"65c0897a67c2d3e364c72ac8|ac157afc-119d-2b7d-ac08-4beac6fd0d18","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707116910375},"e-478":{"id":"e-478","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-479"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e346308d-4ec2-aa7c-cf06-c676a7a4831c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e346308d-4ec2-aa7c-cf06-c676a7a4831c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707151161635},"e-479":{"id":"e-479","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-478"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"e346308d-4ec2-aa7c-cf06-c676a7a4831c","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"e346308d-4ec2-aa7c-cf06-c676a7a4831c","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1707151161635},"e-480":{"id":"e-480","name":"","animationType":"custom","eventTypeId":"PAGE_SCROLL","action":{"id":"","actionTypeId":"GENERAL_CONTINUOUS_ACTION","config":{"actionListId":"a-74","affectedElements":{},"duration":0}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]},"targets":[{"id":"wf-page-id","appliesTo":"PAGE","styleBlockIds":[]}],"config":[{"continuousParameterGroupId":"a-74-p","smoothing":50,"startsEntering":true,"addStartOffset":false,"addOffsetValue":50,"startsExiting":false,"addEndOffset":false,"endOffsetValue":50}],"createdOn":1708090291958},"e-483":{"id":"e-483","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-484"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594da","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-484":{"id":"e-484","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-483"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594da","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-485":{"id":"e-485","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-486"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab99359504","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-486":{"id":"e-486","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-485"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab99359504","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-487":{"id":"e-487","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-488"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-488":{"id":"e-488","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-487"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594ee","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-489":{"id":"e-489","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-490"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-490":{"id":"e-490","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-489"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594e5","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-491":{"id":"e-491","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-492"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-492":{"id":"e-492","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-491"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1714489671038},"e-493":{"id":"e-493","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-494"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-494":{"id":"e-494","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-493"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-495":{"id":"e-495","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-496"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-496":{"id":"e-496","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-495"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-499":{"id":"e-499","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-52","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-500"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594f9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-500":{"id":"e-500","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-53","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-499"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993594f9","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-501":{"id":"e-501","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-502"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-502":{"id":"e-502","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-501"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1714489671038},"e-503":{"id":"e-503","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-504"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-504":{"id":"e-504","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-503"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-505":{"id":"e-505","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-506"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-506":{"id":"e-506","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-505"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-507":{"id":"e-507","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-508"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-508":{"id":"e-508","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-507"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593bf","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1714489671038},"e-509":{"id":"e-509","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-510"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-510":{"id":"e-510","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-509"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593c8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-511":{"id":"e-511","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-512"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-512":{"id":"e-512","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-511"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593d1","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-513":{"id":"e-513","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-514"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-514":{"id":"e-514","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-513"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1714489671038},"e-515":{"id":"e-515","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-516"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-516":{"id":"e-516","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-515"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1714489671038},"e-517":{"id":"e-517","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-518"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-518":{"id":"e-518","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-517"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593e6","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":0,"direction":null,"effectIn":true},"createdOn":1714489671038},"e-519":{"id":"e-519","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-520"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-520":{"id":"e-520","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-519"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-521":{"id":"e-521","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-522"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-522":{"id":"e-522","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-521"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-523":{"id":"e-523","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-524"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-524":{"id":"e-524","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-523"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593ef","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-525":{"id":"e-525","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-526"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-526":{"id":"e-526","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-525"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-527":{"id":"e-527","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-55","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-528"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-528":{"id":"e-528","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-54","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-527"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-529":{"id":"e-529","name":"","animationType":"preset","eventTypeId":"TAB_ACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-69","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-530"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038},"e-530":{"id":"e-530","name":"","animationType":"preset","eventTypeId":"TAB_INACTIVE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-70","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-529"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"9d5595e3-742e-a0fc-b13d-fcab993593f8","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1714489671038}},"actionLists":{"a-52":{"id":"a-52","title":"accordeon open","actionItemGroups":[{"actionItems":[{"id":"a-52-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d"},"heightValue":60,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-52-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-6","selectorGuids":["984290d3-8c44-082c-7acf-c8a5a177106a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-52-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d"},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-52-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-6","selectorGuids":["984290d3-8c44-082c-7acf-c8a5a177106a"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1698241859126},"a-53":{"id":"a-53","title":"accordeon close","actionItemGroups":[{"actionItems":[{"id":"a-53-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"64f06d4a31cd707991282add|f8d192c8-1c21-8612-c6c1-bfbf0c9c3f9d"},"heightValue":60,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-53-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-6","selectorGuids":["984290d3-8c44-082c-7acf-c8a5a177106a"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698242174804},"a-69":{"id":"a-69","title":"Tab in view 2","actionItemGroups":[{"actionItems":[{"id":"a-69-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-block-46","selectorGuids":["5a530494-ae5d-000e-16bf-3439c8092b0e"]},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698243351131},"a-70":{"id":"a-70","title":"Tab not active animation 2","actionItemGroups":[{"actionItems":[{"id":"a-70-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-block-46","selectorGuids":["5a530494-ae5d-000e-16bf-3439c8092b0e"]},"value":"block"}}]},{"actionItems":[{"id":"a-70-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"CHILDREN","selector":".text-block-46","selectorGuids":["5a530494-ae5d-000e-16bf-3439c8092b0e"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698243233294},"a-74":{"id":"a-74","title":"Uncoder utopie","continuousParameterGroups":[{"id":"a-74-p","type":"SCROLL_PROGRESS","parameterLabel":"Scroll","continuousActionGroups":[{"keyframe":5,"actionItems":[{"id":"a-74-n-4","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image-155","selectorGuids":["c9b6aabd-2cf7-4ff7-b7de-bf5bc9a9dac6"]},"widthValue":0,"heightValue":250,"widthUnit":"px","heightUnit":"px","locked":false}}]},{"keyframe":10,"actionItems":[{"id":"a-74-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"selector":".image-155","selectorGuids":["c9b6aabd-2cf7-4ff7-b7de-bf5bc9a9dac6"]},"widthValue":385,"heightValue":250,"widthUnit":"px","heightUnit":"px","locked":false}}]}]}],"createdOn":1708090301788},"a-55":{"id":"a-55","title":"Tab in view","actionItemGroups":[{"actionItems":[{"id":"a-55-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698243351131},"a-54":{"id":"a-54","title":"Tab not active animation","actionItemGroups":[{"actionItems":[{"id":"a-54-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"block"}}]},{"actionItems":[{"id":"a-54-n-2","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1698243233294}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function ChErlangen({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component tag="div">
      <_Builtin.Section
        className={_utils.cx(_styles, "section-header-ch-desktop")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-67")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "line-1")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/659680ce18c9fd0e673be88a_Line%201.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-190")}
            tag="div"
          >
            <_Builtin.SliderWrapper
              className={_utils.cx(_styles, "slider-9")}
              navSpacing={3}
              navShadow={false}
              autoplay={true}
              delay={4000}
              iconArrows={true}
              animation="slide"
              navNumbers={true}
              easing="ease"
              navRound={true}
              hideArrows={false}
              disableSwipe={false}
              duration={500}
              infinite={true}
              autoMax={0}
              navInvert={false}
            >
              <_Builtin.SliderMask className={_utils.cx(_styles, "mask-5")}>
                <_Builtin.SliderSlide tag="div">
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-180-copy", "pic1")}
                    tag="div"
                  />
                </_Builtin.SliderSlide>
                <_Builtin.SliderSlide tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "div-headerpic-ch-er",
                      "pic2"
                    )}
                    tag="div"
                  />
                </_Builtin.SliderSlide>
                <_Builtin.SliderSlide tag="div">
                  <_Builtin.Block
                    className={_utils.cx(
                      _styles,
                      "div-headerpic-ch-er",
                      "pic-3"
                    )}
                    tag="div"
                  />
                </_Builtin.SliderSlide>
              </_Builtin.SliderMask>
              <_Builtin.SliderArrow
                className={_utils.cx(_styles, "left-arrow-6")}
                dir="left"
              >
                <_Builtin.Icon
                  widget={{
                    type: "icon",
                    icon: "slider-left",
                  }}
                />
              </_Builtin.SliderArrow>
              <_Builtin.SliderArrow
                className={_utils.cx(_styles, "right-arrow-6")}
                dir="right"
              >
                <_Builtin.Icon
                  widget={{
                    type: "icon",
                    icon: "slider-right",
                  }}
                />
              </_Builtin.SliderArrow>
              <_Builtin.SliderNav
                className={_utils.cx(_styles, "slide-nav-5")}
              />
            </_Builtin.SliderWrapper>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-195")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-117-copy")}
              tag="h1"
            >
              <_Builtin.Span
                className={_utils.cx(_styles, "text-span-22-copy")}
              >
                {"Gemeinsam "}
              </_Builtin.Span>
              {"für Erlangen Anpacken"}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-31-copy")}
              tag="div"
            >
              {
                "Der ClimateHub zeigt dir die großen Hebel im Klimaschutz. Finde Erlanger Projekte und Gruppen um selber an zu packen und deinen Handabdruck zu vergrößern."
              }
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cj(
                _utils.cx(_styles, "div-block-168"),
                "w-clearfix"
              )}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "button-gradient")}
                button={true}
                block=""
                options={{
                  href: "https://climateconnect.earth/de/hubs/erlangen",
                }}
              >
                {"zum ClimateHub"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
        <_Builtin.Link
          className={_utils.cx(_styles, "div-block-118-copy")}
          button={false}
          block="inline"
          options={{
            href: "#Handprint1",
          }}
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "text-block-19-copy")}
            tag="div"
          >
            {"Mehr über den ClimateHub"}
          </_Builtin.Block>
          <_Builtin.Image
            loading="lazy"
            width="39"
            height="auto"
            alt="Pfeil nach unten"
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/653919892456c0cc8a05cc5d_Pfad%2013399.svg"
          />
        </_Builtin.Link>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-104")}
        grid={{
          type: "section",
        }}
        tag="aside"
        id="Handprint1"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-66")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-134")}
            loading="lazy"
            width="183"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/65941be2e6398748e3c0ce2d_Pfad%2013421.svg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-182")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-125")}
              tag="h2"
            >
              {"Lass dein schlechtes Klima-Gewissen zu Hause!"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-143")}>
              {
                "Bist du auch oft demotiviert vom CO2 Fußabdruck? Die meisten Menschen fühlen sich unter Druck gesetzt oder sogar hilflos, wenn sie ihren Fußabdruck berechnen. Dabei ist es so einfach eine viel größere Wirkung zu erzielen! "
              }
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-183")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-125-copy")}
              tag="h2"
            >
              {"Wir zeigen dir, wie..."}
            </_Builtin.Heading>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-218")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-155")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Grüne Straße mit Fußgängern und Radfaheren"
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/65cf634dee821446d0eba5c5_Torstrasse-autofrei-Berlin-by-Tom-Meiser-Timo-Schmid-2048x1365.webp"
              />
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-58")}
              tag="div"
            >
              {
                "Torstraße autofrei Berlin by Tom Meiser & Timo Schmid, CC BY-NC-SA 4.0"
              }
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-your-ch")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-60")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-135")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/65950e6a9f9d9ac3981b0213_Pfad%2013403.svg"
          />
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-116-copy")}
            tag="h1"
          >
            {"Dein Klimanetzwerk in Erlangen"}
          </_Builtin.Heading>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-186")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-154-copy-2")}
              tag="div"
            >
              <_Builtin.Paragraph>
                {
                  "Im ClimateHub kommen alle Klimaaktiven in Erlangen zusammen. Ob Projekte die erst noch starten, alt eingesessene Organisationen oder Events zum einfach mal vorbei schauen. Für jeden ist etwas dabei. Probiere es aus und mach mit!"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.TabsWrapper
              className={_utils.cx(_styles, "tabs-2")}
              current="Mitmachen"
              easing="ease-in-out"
              fadeIn={500}
              fadeOut={500}
            >
              <_Builtin.TabsMenu
                className={_utils.cx(_styles, "tabs-menu-4")}
                tag="div"
              >
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tab-link-ch")}
                  data-w-id="9d5595e3-742e-a0fc-b13d-fcab993593bf"
                  data-w-tab="Mitmachen"
                  block="inline"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-184")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-187")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-185")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-45")}
                        tag="div"
                      >
                        {"Mitmachen"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-46")}
                        tag="div"
                      >
                        {"Bring dich ein und vergrößere deinen Handabdruck"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-188")}
                    tag="div"
                  />
                </_Builtin.TabsLink>
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tab-link-ch")}
                  data-w-id="9d5595e3-742e-a0fc-b13d-fcab993593c8"
                  data-w-tab="Teilen"
                  block="inline"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-184")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-187")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-185")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-45")}
                        tag="div"
                      >
                        {"Teilen"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-46")}
                        tag="div"
                      >
                        {
                          "Zeig anderen woran du arbeitest und finde Mitstreiter"
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-188")}
                    tag="div"
                  />
                </_Builtin.TabsLink>
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tab-link-ch")}
                  data-w-id="9d5595e3-742e-a0fc-b13d-fcab993593d1"
                  data-w-tab="Treffen"
                  block="inline"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-184")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-187")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-185")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-45")}
                        tag="div"
                      >
                        {"Treffen"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-46")}
                        tag="div"
                      >
                        {"Finde lokale Events mit Impact und mehr...."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.TabsLink>
              </_Builtin.TabsMenu>
              <_Builtin.TabsContent
                className={_utils.cx(_styles, "tabs-content-3")}
                tag="div"
              >
                <_Builtin.TabsPane tag="div" data-w-tab="Mitmachen">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-132")}
                    width="auto"
                    height="auto"
                    loading="eager"
                    alt="Junge Frau sprich mit zweiter Person welche man von hinten sieht"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/659581382dac22c7dfe509b5_nmb-Klimakonferenz-2022-1017.jpg"
                  />
                </_Builtin.TabsPane>
                <_Builtin.TabsPane tag="div" data-w-tab="Teilen">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-132")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt="Person tippt auf PC und hat den ClimateHub geöffnet"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655de928163d061812bcd062_nmb-ClimateConnect230707-0003%20(Klein).jpg"
                  />
                </_Builtin.TabsPane>
                <_Builtin.TabsPane tag="div" data-w-tab="Treffen">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-132")}
                    width="auto"
                    height="auto"
                    loading="eager"
                    alt="große Gruppe sitz um einen Tisch"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655de9504992345f2708452a__DSC4482%20(Klein).jpg"
                  />
                </_Builtin.TabsPane>
              </_Builtin.TabsContent>
            </_Builtin.TabsWrapper>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-186-copy")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-154-copy-2")}
              tag="div"
            >
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-138-copy-2")}
              >
                {
                  "Im ClimateHub kommen alle Klimaaktiven in Erlangen zusammen. Ob Projekte die erst noch starten, alt eingesessene Organisationen oder Events zum einfach mal anschauen. Für jeden ist etwas dabei. Probiere es aus und sei dabei!"
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.TabsWrapper
              className={_utils.cx(_styles, "tabs-2-copy")}
              current="Mitmachen"
              easing="ease-in-out"
              fadeIn={500}
              fadeOut={500}
            >
              <_Builtin.TabsMenu
                className={_utils.cx(_styles, "tabs-menu-4-copy")}
                tag="div"
              >
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tab-link-ch")}
                  data-w-id="9d5595e3-742e-a0fc-b13d-fcab993593e6"
                  data-w-tab="Mitmachen"
                  block="inline"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-184")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-187")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-185")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-45")}
                        tag="div"
                      >
                        {"Mitmachen"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-46-copy")}
                        tag="div"
                      >
                        {"Bring dich ein und vergrößere deinen Handabdruck"}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-188")}
                    tag="div"
                  />
                </_Builtin.TabsLink>
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tab-link-ch")}
                  data-w-id="9d5595e3-742e-a0fc-b13d-fcab993593ef"
                  data-w-tab="Teilen"
                  block="inline"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-184")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-187")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-185")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-45")}
                        tag="div"
                      >
                        {"Teilen"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-46-copy")}
                        tag="div"
                      >
                        {
                          "Zeig anderen woran du arbeitest und finde Mitstreiter"
                        }
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-188")}
                    tag="div"
                  />
                </_Builtin.TabsLink>
                <_Builtin.TabsLink
                  className={_utils.cx(_styles, "tab-link-ch")}
                  data-w-id="9d5595e3-742e-a0fc-b13d-fcab993593f8"
                  data-w-tab="Treffen"
                  block="inline"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-184")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-187")}
                      tag="div"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-185")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-45")}
                        tag="div"
                      >
                        {"Treffen"}
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "text-block-46-copy")}
                        tag="div"
                      >
                        {"Finde lokale Events mit Impact und mehr...."}
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.TabsLink>
              </_Builtin.TabsMenu>
              <_Builtin.TabsContent
                className={_utils.cx(_styles, "tabs-content-3-copy")}
                tag="div"
              >
                <_Builtin.TabsPane tag="div" data-w-tab="Mitmachen">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-132")}
                    width="auto"
                    height="auto"
                    loading="eager"
                    alt="Junge Frau sprich mit zweiter Person welche man von hinten sieht"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/659581382dac22c7dfe509b5_nmb-Klimakonferenz-2022-1017.jpg"
                  />
                </_Builtin.TabsPane>
                <_Builtin.TabsPane tag="div" data-w-tab="Teilen">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-132")}
                    width="auto"
                    height="auto"
                    loading="lazy"
                    alt="Person tippt auf PC und hat den ClimateHub geöffnet"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655de928163d061812bcd062_nmb-ClimateConnect230707-0003%20(Klein).jpg"
                  />
                </_Builtin.TabsPane>
                <_Builtin.TabsPane tag="div" data-w-tab="Treffen">
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-132")}
                    width="auto"
                    height="auto"
                    loading="eager"
                    alt="große Gruppe sitz um einen Tisch"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655de9504992345f2708452a__DSC4482%20(Klein).jpg"
                  />
                </_Builtin.TabsPane>
              </_Builtin.TabsContent>
            </_Builtin.TabsWrapper>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "line-3")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6597fb8985e69fb7ae100543_Gruppe%208363.svg"
          />
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-ch-projects")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-61")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-123")}
            tag="h1"
          >
            {"Was wir gemeinsam schon erreicht haben"}
          </_Builtin.Heading>
          <_Builtin.SliderWrapper
            className={_utils.cx(_styles, "slider-projects")}
            navSpacing={3}
            navShadow={false}
            autoplay={false}
            delay={4000}
            iconArrows={true}
            animation="slide"
            navNumbers={false}
            easing="ease"
            navRound={true}
            hideArrows={false}
            disableSwipe={false}
            duration={500}
            infinite={true}
            autoMax={0}
            navInvert={false}
          >
            <_Builtin.SliderMask className={_utils.cx(_styles, "mask-4")}>
              <_Builtin.SliderSlide
                className={_utils.cx(_styles, "slide-12")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "slide-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cj(
                      _utils.cx(_styles, "div-project-card-slide"),
                      "w-clearfix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-120")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Stecker-Solaer Gruppenbild"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bdeebd308f8ac4a32c201_DSC04561_edited%20(Mittel).jpg"
                    />
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-118")}
                      tag="h2"
                    >
                      {"Stecker-Solaer: die Balkonsolarberatung in Erlangen "}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-33")}
                      tag="div"
                    >
                      {"Durch den ClimateHub möglich gemacht"}
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "paragraph-139")}
                    >
                      {
                        "Stecker-Solaer ist eine ehrenamtliche Balkonsolarberatung die durch den ClimateHub Erlangen und unseren Klimaverentzer ermöglicht wurde. Mit inzwischen mehreren hundert Beratungen und vielen Infoständen und Vortägen konnten unzählige Anlagen möglich gemacht werden."
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-158")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-159")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-121")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Herz icon"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-34")}
                          tag="div"
                        >
                          {"5"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-159")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-121")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Kommentar Icon"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-34")}
                          tag="div"
                        >
                          {"2"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button-in-main-color")}
                      button={true}
                      block=""
                      options={{
                        href: "https://climateconnect.earth/post/stecker-solaer-solarstrom-ganz-einfach-fur-dein-zu-hause",
                      }}
                    >
                      {"Mehr erfahren"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "slide-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cj(
                      _utils.cx(_styles, "div-project-card-slide"),
                      "w-clearfix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-120")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt=""
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf9ba4e33d016c1da2c9c_1013944031e70ee06f7743005c3dedcc73268601.jpeg"
                    />
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-118")}
                      tag="h3"
                    >
                      {"Klimafreundliche Großküchen in Erlangen"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-33")}
                      tag="div"
                    >
                      {"Durch den ClimateHub möglich gemacht"}
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "paragraph-139")}
                    >
                      {
                        "Erlanger Großküchen dabei helfen klimafreundlich zu werden; Genau dem hat sich die Gruppe verschrieben. Mit Infoveranstaltungen für die Leiter*innen konnte bereits einiges Bewegt werden. Nach dem Neustart im Dezember 23 ist noch viel mehr geplant!"
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-158")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-159")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-121")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Herz icon"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-34")}
                          tag="div"
                        >
                          {"5"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-159")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-121")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Kommentar Icon"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-34")}
                          tag="div"
                        >
                          {"2"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button-in-main-color")}
                      button={true}
                      block=""
                      options={{
                        href: "https://climateconnect.earth/de/projects/klima-kantinen?hubPage=erlangen",
                        target: "_blank",
                      }}
                    >
                      {"Mehr erfahren"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.SliderSlide>
              <_Builtin.SliderSlide tag="div">
                <_Builtin.Block
                  className={_utils.cx(_styles, "slide-wrapper")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cj(
                      _utils.cx(_styles, "div-project-card-slide"),
                      "w-clearfix"
                    )}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-120")}
                      width="auto"
                      height="auto"
                      loading="lazy"
                      alt="Klimakonferenz Erlangen 2022 Gruppenbild"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/65578094380f50fff167d9cd_nmb-Klimakonferenz-2022-0265-min%20(Mittel).jpg"
                    />
                    <_Builtin.Heading
                      className={_utils.cx(_styles, "heading-118")}
                      tag="h3"
                    >
                      {"Klima-Mitmach-Tage"}
                    </_Builtin.Heading>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-33")}
                      tag="div"
                    >
                      {"Durch den ClimateHub organisiert"}
                    </_Builtin.Block>
                    <_Builtin.Paragraph
                      className={_utils.cx(_styles, "paragraph-139")}
                    >
                      {
                        "Bereits 3 Erlanger Klima-Mitmach-Tage haben wir organisiert. So konnten insgesamt fast 300 Menschen zum mitmachen motiviert werden. Außerdem sind so zahlreiche neue Projekt für Erlangen entstanden."
                      }
                    </_Builtin.Paragraph>
                    <_Builtin.Block
                      className={_utils.cx(_styles, "div-block-158")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-159")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-121")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Herz icon"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-34")}
                          tag="div"
                        >
                          {"10"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-block-159")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-121")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Kommentar Icon"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-34")}
                          tag="div"
                        >
                          {"3"}
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                    <_Builtin.Link
                      className={_utils.cx(_styles, "button-in-main-color")}
                      button={true}
                      block=""
                      options={{
                        href: "https://www.klimatag-erlangen.de/",
                      }}
                    >
                      {"Mehr erfahren"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.SliderSlide>
            </_Builtin.SliderMask>
            <_Builtin.SliderArrow
              className={_utils.cx(_styles, "left-arrow-7")}
              dir="left"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "slider-left",
                }}
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderArrow
              className={_utils.cx(_styles, "right-arrow-7")}
              dir="right"
            >
              <_Builtin.Icon
                widget={{
                  type: "icon",
                  icon: "slider-right",
                }}
              />
            </_Builtin.SliderArrow>
            <_Builtin.SliderNav className={_utils.cx(_styles, "slide-nav-4")} />
          </_Builtin.SliderWrapper>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-142")}>
            {
              "Der ClimateHub und unsere Klimavernetzerin Sophia haben schon viele neue Projekte und Initiativen möglich gemacht! Bei unseren regelmäßigen Veranstaltungen zu ganz unterschiedlichen Themen kann jede:r mitmachen. Dabei bringen wir ganz aktiv funktionierende Projekte aus anderen Städten auch nach Erlangen. "
            }
          </_Builtin.Paragraph>
          <_Builtin.Block
            className={_utils.cx(_styles, "bullet-points-wrapper-ass")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "bullet-points-ch", "ass")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="78"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6597e23553aab5ce1c098350_Group%20icon.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-48")}
                tag="div"
              >
                {"54"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-49")}
                tag="div"
              >
                {"Erlanger Klima-Organisation sind dabei"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "bullet-points-ch", "ass")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="78"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6597e252dd71645e2a7799a8_Gruppe%208362.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-48")}
                tag="div"
              >
                {"12+"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-49")}
                tag="div"
              >
                {"Neue Klima-Projekte und Initiativen ermöglicht"}
              </_Builtin.Block>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "bullet-points-ch", "ass")}
              tag="div"
            >
              <_Builtin.Image
                loading="lazy"
                width="78"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/646bc53bdebf2b39a2dd72a7_Komponente%2057%20%E2%80%93%204.svg"
              />
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-48")}
                tag="div"
              >
                {"5000+"}
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-49")}
                tag="div"
              >
                {"Erreichte Erlanger:innen"}
                <br />{" "}
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-157", "div-block-176")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cj(
                _utils.cx(_styles, "div-project-card"),
                "w-clearfix"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-120")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Stecker-Solaer Gruppenbild"
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bdeebd308f8ac4a32c201_DSC04561_edited%20(Mittel).jpg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-118")}
                tag="h3"
              >
                {"Stecker-Solaer: die Balkonsolarberatung in Erlangen "}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-33")}
                tag="div"
              >
                {"Durch den ClimateHub möglich gemacht"}
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-139")}
              >
                {
                  "Stecker-Solaer ist eine ehrenamtliche Balkonsolarberatung die durch den ClimateHub Erlangen und unseren Klimaverentzer ermöglicht wurde. Mit inzwischen xxx Beratungen und vielen Infoständen konnten unzählige Anlagen möglich gemacht werden."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-158")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Herz icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"5"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Kommentar Icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"2"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-in-main-color")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Mehr erfahren"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cj(
                _utils.cx(_styles, "div-project-card"),
                "w-clearfix"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-120")}
                loading="lazy"
                width="auto"
                height="auto"
                alt=""
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf9ba4e33d016c1da2c9c_1013944031e70ee06f7743005c3dedcc73268601.jpeg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-118")}
                tag="h3"
              >
                {"Klimafreundliche Großküchen in Erlangen"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-33")}
                tag="div"
              >
                {"Durch den ClimateHub möglich gemacht"}
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-139")}
              >
                {
                  "Stecker-Solaer ist eine ehrenamtliche Balkonsolarberatung die durch den ClimateHub Erlangen und unseren Klimaverentzer ermöglicht wurde. Mit inzwischen xxx Beratungen und vielen Infoständen konnten unzählige Anlagen möglich gemacht werden."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-158")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Herz icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"5"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Kommentar Icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"2"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-in-main-color")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Mehr erfahren"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cj(
                _utils.cx(_styles, "div-project-card"),
                "w-clearfix"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-120")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Stecker-Solaer Gruppenbild"
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bdeebd308f8ac4a32c201_DSC04561_edited%20(Mittel).jpg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-118")}
                tag="h3"
              >
                {"Stecker-Solaer: die Balkonsolarberatung in Erlangen "}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-33")}
                tag="div"
              >
                {"Durch den ClimateHub möglich gemacht"}
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-139")}
              >
                {
                  "Stecker-Solaer ist eine ehrenamtliche Balkonsolarberatung die durch den ClimateHub Erlangen und unseren Klimaverentzer ermöglicht wurde. Mit inzwischen xxx Beratungen und vielen Infoständen konnten unzählige Anlagen möglich gemacht werden."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-158")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Herz icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"5"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Kommentar Icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"2"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-in-main-color")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Mehr erfahren"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cj(
                _utils.cx(_styles, "div-project-card"),
                "w-clearfix"
              )}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-120")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Stecker-Solaer Gruppenbild"
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bdeebd308f8ac4a32c201_DSC04561_edited%20(Mittel).jpg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-118")}
                tag="h3"
              >
                {"Stecker-Solaer: die Balkonsolarberatung in Erlangen "}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-33")}
                tag="div"
              >
                {"Durch den ClimateHub möglich gemacht"}
              </_Builtin.Block>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-139")}
              >
                {
                  "Stecker-Solaer ist eine ehrenamtliche Balkonsolarberatung die durch den ClimateHub Erlangen und unseren Klimaverentzer ermöglicht wurde. Mit inzwischen xxx Beratungen und vielen Infoständen konnten unzählige Anlagen möglich gemacht werden."
                }
              </_Builtin.Paragraph>
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-158")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Herz icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"5"}
                  </_Builtin.Block>
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-159")}
                  tag="div"
                >
                  <_Builtin.Image
                    className={_utils.cx(_styles, "image-121")}
                    loading="lazy"
                    width="auto"
                    height="auto"
                    alt="Kommentar Icon"
                    src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-34")}
                    tag="div"
                  >
                    {"2"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-in-main-color")}
                button={true}
                block=""
                options={{
                  href: "#",
                }}
              >
                {"Mehr erfahren"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-160")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-119")}
              tag="h1"
            >
              {'"Werde auch du Teil davon!"'}
            </_Builtin.Heading>
            <_Builtin.Link
              className={_utils.cx(_styles, "button-on-main-color-ch")}
              button={true}
              block=""
              options={{
                href: "https://climateconnect.earth/de/hubs/erlangen",
              }}
            >
              {"Zum ClimateHub"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image-136")}
            loading="lazy"
            width="auto"
            height="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/65980190f8e42d4058885029_Gruppe%208364.svg"
          />
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-la-ch")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-163")}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-124")}
                tag="h1"
              >
                {"Immer für dich da: deine Klimavernetzerin"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Ob du aktiv werden möchtest, Verbündete für deine Idee suchst oder eine Frage zum Klimaschutz in Erlangen hast - Sophia ist die Klimavernetzerin des ClimateHub Erlangen und hilft dir gerne weiter. "
                }
                <br />
                {
                  "Sophia ist mit allen ClimateHub-Mitgliedern in Kontakt, vernetzt die lokalen Initiativen und ermöglicht ganz aktiv neue wirkungsvolle Klimaprojekte. Falls du also auf dem ClimateHub nicht das findest, was du suchst, kannst du dich jederzeit bei ihr melden und sie hilft dir weiter."
                }
                <br />
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-162")}
              tag="div"
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-122")}
                loading="lazy"
                width="auto"
                height="auto"
                alt="Profilbild Sophia Thomas Klimakoordinatorin Erlangen"
                src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655de9d926c33aacb4766f5c_KMTMR23%201415_7595%20(Klein).jpg"
              />
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-120")}
                tag="h2"
              >
                {"Sophia Thomas"}
              </_Builtin.Heading>
              <_Builtin.Block
                className={_utils.cx(_styles, "text-block-35")}
                tag="div"
              >
                {
                  '"Lasst uns Klimaschutz in Erlangen zur Gemeinschaftsaufgabe machen!"'
                }
              </_Builtin.Block>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-on-main-color")}
                button={true}
                block=""
                options={{
                  href: "mailto:sophia.thomas@climateconnect.earth",
                }}
              >
                {"Nachricht schreiben"}
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-102")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-73")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-164")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-165")}
              tag="div"
            >
              <_Builtin.Heading tag="h1">
                {"Wie funktioniert der ClimateHub?"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Der ClimateHub ist ein gemeinnütziger Anlaufpunkt für alle Menschen die sich in Erlangen für Klimaschutz einsetzten und die die Lust haben sich zu engagieren. Es gibt eine eigene Online-Plattform als digitale Austauschmöglichkeit und unsere lokale Vernetzerin Sophia vor Ort. "
                }
                <br />
                {
                  "Gemeinsam bringen wir alle Akteur*innen der Stadt zusammen, um gemeinsam die Klimakrise zu bekämpfen. Mit vielen Events und Aktionen begeistern wir noch mehr Menschen für ein Klimaschutz Engagement."
                }
              </_Builtin.Paragraph>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-166")}
              tag="div"
            >
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "accordeon-ch")}
                data-w-id="9d5595e3-742e-a0fc-b13d-fcab993594da"
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-3")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-6")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-36")}
                    tag="div"
                  >
                    {"Online Plattform"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-167")}
                    tag="div"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cj(
                    _utils.cx(_styles, "dropdown-list-4"),
                    "w-clearfix"
                  )}
                  tag="nav"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-140")}
                  >
                    {
                      "Die Plattform vereint alle Gruppen aus Erlangen und macht sie so leicht auffindbar. Sie ist zentraler Austauschort für Interessierte und Aktive."
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button-in-main-color")}
                    button={true}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/hubs/erlangen",
                      target: "_blank",
                    }}
                  >
                    {"Zum ClimateHub Erlangen"}
                  </_Builtin.Link>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "accordeon-ch")}
                data-w-id="9d5595e3-742e-a0fc-b13d-fcab993594e5"
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-3")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-6")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-36")}
                    tag="div"
                  >
                    {"Eventkalender"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-167")}
                    tag="div"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-list-4")}
                  tag="nav"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-140")}
                  >
                    {
                      "Hier findest du bevorstehende Veranstaltungen in Erlangen. Der Kalender wird von Sophia betreut und die Events über unsere Email und Social Media Kanäle regelmäßig beworben."
                    }
                  </_Builtin.Paragraph>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "accordeon-ch")}
                data-w-id="9d5595e3-742e-a0fc-b13d-fcab993594ee"
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-3")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-6")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-36")}
                    tag="div"
                  >
                    {"ClimateMatch"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-167")}
                    tag="div"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cj(
                    _utils.cx(_styles, "dropdown-list-4"),
                    "w-clearfix"
                  )}
                  tag="nav"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-140")}
                  >
                    {
                      "Beantworte 4 kurze Fragen und schon hast du das passende Projekt gefunden. Schreib gleich die Verantwortliche Person an und leg los!"
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button-in-main-color")}
                    button={true}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/climatematch?from_hub=erlangen",
                    }}
                  >
                    {"jetzt machen"}
                  </_Builtin.Link>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "accordeon-ch")}
                data-w-id="9d5595e3-742e-a0fc-b13d-fcab993594f9"
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-3")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-6")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-36")}
                    tag="div"
                  >
                    {"Ideen"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-167")}
                    tag="div"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cj(
                    _utils.cx(_styles, "dropdown-list-4"),
                    "w-clearfix"
                  )}
                  tag="nav"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-140")}
                  >
                    {
                      "Hast du eine Ideen und suchst Unterstützung um diese Umzusetzen? Über das Ideen boardfindest du die passenden Mitstreiter:innen. "
                    }
                  </_Builtin.Paragraph>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button-in-main-color")}
                    button={true}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/hubs/erlangen?&#ideas",
                    }}
                  >
                    {"Idee Teilen"}
                  </_Builtin.Link>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
              <_Builtin.DropdownWrapper
                className={_utils.cx(_styles, "accordeon-ch")}
                data-w-id="9d5595e3-742e-a0fc-b13d-fcab99359504"
                tag="div"
                delay={0}
                hover={false}
              >
                <_Builtin.DropdownToggle
                  className={_utils.cx(_styles, "dropdown-toggle-3")}
                  tag="div"
                >
                  <_Builtin.Icon
                    className={_utils.cx(_styles, "icon-6")}
                    widget={{
                      type: "icon",
                      icon: "dropdown-toggle",
                    }}
                  />
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-36")}
                    tag="div"
                  >
                    {"Der Chat"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-167")}
                    tag="div"
                  />
                </_Builtin.DropdownToggle>
                <_Builtin.DropdownList
                  className={_utils.cx(_styles, "dropdown-list-4")}
                  tag="nav"
                >
                  <_Builtin.Paragraph
                    className={_utils.cx(_styles, "paragraph-140")}
                  >
                    {
                      "Über den Climate Connect Chat erreichst du alle Klimaakiven aus deiner Stadt. Schreibe eine Nachricht wenn du gerne bei einem Projekt mitmachen möchtest oder eine Frage hast."
                    }
                  </_Builtin.Paragraph>
                </_Builtin.DropdownList>
              </_Builtin.DropdownWrapper>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-supporter-ch")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-121")}
            tag="h1"
          >
            {"Unsere Unterstützer:innen über den ClimateHub"}
          </_Builtin.Heading>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "quotes-donate-2")}
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Image
          className={_utils.cx(_styles, "image-79")}
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/638db96c0d5f31c3b0ca3c57_Icon%20material-format-quote.svg"
        />
        <_Builtin.Block
          className={_utils.cx(_styles, "quoteswrapper")}
          tag="div"
        >
          <_Builtin.NotSupported _atom="DynamoWrapper" />
        </_Builtin.Block>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-orgs-ch")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-200")}
            tag="div"
          >
            <_Builtin.Block tag="div">
              <_Builtin.Heading tag="h1">
                {"Finde deine Gruppe"}
              </_Builtin.Heading>
              <_Builtin.Paragraph>
                {
                  "Auf dem ClimateHub findest du alle aktiven Klimagruppen in Erlangen"
                }
              </_Builtin.Paragraph>
              <_Builtin.SliderWrapper
                className={_utils.cx(_styles, "slider-orgs-ch")}
                navSpacing={3}
                navShadow={false}
                autoplay={false}
                delay={4000}
                iconArrows={true}
                animation="slide"
                navNumbers={false}
                easing="ease"
                navRound={true}
                hideArrows={false}
                disableSwipe={false}
                duration={500}
                infinite={true}
                autoMax={0}
                navInvert={false}
              >
                <_Builtin.SliderMask className={_utils.cx(_styles, "mask-4")}>
                  <_Builtin.SliderSlide
                    className={_utils.cx(_styles, "slide-12")}
                    tag="div"
                  >
                    <_Builtin.Block
                      className={_utils.cx(_styles, "slide-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cx(_styles, "div-org-cards")}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-org-logo")}
                          loading="lazy"
                          width="auto"
                          height="auto"
                          alt="sneep Logo"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf7dd5f3329028b31effb_277ad08ee6ea0f75097b7b79cf31f0c28358daa2.jpeg"
                        />
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-38")}
                          tag="div"
                        >
                          {"Hochschulgruppe"}
                        </_Builtin.Block>
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-118")}
                          tag="h2"
                        >
                          {"sneep"}
                        </_Builtin.Heading>
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "paragraph-139")}
                        >
                          {
                            "Wir sind eine studentische Organisation an der Friedrich-Alexander-Universität, die sich mit Nachhaltigkeitsthemen beschäftigt."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-158")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "div-block-159")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-124")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Icon Gruppe"
                              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f26f6e865b2f5ebeea_Pfad%2010815.svg"
                            />
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-block-34")}
                              tag="div"
                            >
                              {"15"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "div-block-159")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-124")}
                              loading="lazy"
                              width="auto"
                              height="auto"
                              alt="Icon Projekt"
                              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f2d308f8ac4a487899_content_paste_black_24dp.svg"
                            />
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-block-34")}
                              tag="div"
                            >
                              {"7"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                  <_Builtin.SliderSlide tag="div">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "slide-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cj(
                          _utils.cx(_styles, "div-project-card-slide"),
                          "w-clearfix"
                        )}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-120")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt=""
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf9ba4e33d016c1da2c9c_1013944031e70ee06f7743005c3dedcc73268601.jpeg"
                        />
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-118")}
                          tag="h3"
                        >
                          {"Klimafreundliche Großküchen in Erlangen"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-33")}
                          tag="div"
                        >
                          {"Durch den ClimateHub möglich gemacht"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "paragraph-139")}
                        >
                          {
                            "Stecker-Solaer ist eine ehrenamtliche Balkonsolarberatung die durch den ClimateHub Erlangen und unseren Klimaverentzer ermöglicht wurde. Mit inzwischen xxx Beratungen und vielen Infoständen konnten unzählige Anlagen möglich gemacht werden."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-158")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "div-block-159")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-121")}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Herz icon"
                              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                            />
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-block-34")}
                              tag="div"
                            >
                              {"5"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "div-block-159")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-121")}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Kommentar Icon"
                              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                            />
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-block-34")}
                              tag="div"
                            >
                              {"2"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "button-in-main-color")}
                          button={true}
                          block=""
                          options={{
                            href: "#",
                          }}
                        >
                          {"Mehr erfahren"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                  <_Builtin.SliderSlide tag="div">
                    <_Builtin.Block
                      className={_utils.cx(_styles, "slide-wrapper")}
                      tag="div"
                    >
                      <_Builtin.Block
                        className={_utils.cj(
                          _utils.cx(_styles, "div-project-card-slide"),
                          "w-clearfix"
                        )}
                        tag="div"
                      >
                        <_Builtin.Image
                          className={_utils.cx(_styles, "image-120")}
                          width="auto"
                          height="auto"
                          loading="lazy"
                          alt="Klimakonferenz Erlangen 2022 Gruppenbild"
                          src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/65578094380f50fff167d9cd_nmb-Klimakonferenz-2022-0265-min%20(Mittel).jpg"
                        />
                        <_Builtin.Heading
                          className={_utils.cx(_styles, "heading-118")}
                          tag="h3"
                        >
                          {"Klima-Mitmach-Tage"}
                        </_Builtin.Heading>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "text-block-33")}
                          tag="div"
                        >
                          {"Durch den ClimateHub möglich gemacht"}
                        </_Builtin.Block>
                        <_Builtin.Paragraph
                          className={_utils.cx(_styles, "paragraph-139")}
                        >
                          {
                            "Bereits 3 Erlanger Klima-Mitmach-Tage haben wir organisiert. So konnten insgeamt über 200 Menschen zum mitmachen motiviert werden. Außerdem sind so zahlreiche neue Projekt für Erlangen entstanden."
                          }
                        </_Builtin.Paragraph>
                        <_Builtin.Block
                          className={_utils.cx(_styles, "div-block-158")}
                          tag="div"
                        >
                          <_Builtin.Block
                            className={_utils.cx(_styles, "div-block-159")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-121")}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Herz icon"
                              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e0_favorite_FILL1_wght400_GRAD0_opsz48.svg"
                            />
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-block-34")}
                              tag="div"
                            >
                              {"10"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                          <_Builtin.Block
                            className={_utils.cx(_styles, "div-block-159")}
                            tag="div"
                          >
                            <_Builtin.Image
                              className={_utils.cx(_styles, "image-121")}
                              width="auto"
                              height="auto"
                              loading="lazy"
                              alt="Kommentar Icon"
                              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bd91736364e7718c3a6e4_mode_comment_FILL0_wght400_GRAD0_opsz48.svg"
                            />
                            <_Builtin.Block
                              className={_utils.cx(_styles, "text-block-34")}
                              tag="div"
                            >
                              {"3"}
                            </_Builtin.Block>
                          </_Builtin.Block>
                        </_Builtin.Block>
                        <_Builtin.Link
                          className={_utils.cx(_styles, "button-in-main-color")}
                          button={true}
                          block=""
                          options={{
                            href: "#",
                          }}
                        >
                          {"Mehr erfahren"}
                        </_Builtin.Link>
                      </_Builtin.Block>
                    </_Builtin.Block>
                  </_Builtin.SliderSlide>
                </_Builtin.SliderMask>
                <_Builtin.SliderArrow dir="left">
                  <_Builtin.Icon
                    widget={{
                      type: "icon",
                      icon: "slider-left",
                    }}
                  />
                </_Builtin.SliderArrow>
                <_Builtin.SliderArrow dir="right">
                  <_Builtin.Icon
                    widget={{
                      type: "icon",
                      icon: "slider-right",
                    }}
                  />
                </_Builtin.SliderArrow>
                <_Builtin.SliderNav
                  className={_utils.cx(_styles, "slide-nav-4")}
                />
              </_Builtin.SliderWrapper>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-orgs")}
              tag="div"
            >
              <_Builtin.Link
                className={_utils.cx(_styles, "div-org-cards")}
                button={false}
                block="inline"
                options={{
                  href: "https://climateconnect.earth/de/organizations/sneepErlangen12",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-org-logo")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="sneep Logo"
                  src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf7dd5f3329028b31effb_277ad08ee6ea0f75097b7b79cf31f0c28358daa2.jpeg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-38")}
                  tag="div"
                >
                  {"Hochschulgruppe"}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-118")}
                  tag="h3"
                >
                  {"sneep"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-139")}
                >
                  {
                    "Wir sind eine studentische Organisation an der Friedrich-Alexander-Universität, die sich mit Nachhaltigkeitsthemen beschäftigt."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-158")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-159")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-124")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Icon Gruppe"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f26f6e865b2f5ebeea_Pfad%2010815.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-34")}
                      tag="div"
                    >
                      {"15"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-159")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-124")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Icon Projekt"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f2d308f8ac4a487899_content_paste_black_24dp.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-34")}
                      tag="div"
                    >
                      {"8"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "div-org-cards")}
                button={false}
                block="inline"
                options={{
                  href: "https://climateconnect.earth/de/organizations/EnergiewendeER(H)langene.V.9",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-org-logo")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt="Logo Energiewende ER(H)langen e.V."
                  src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf832b7a633cd6bb8ffbe_Logo_EWERH_eV-2x.jpg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-38")}
                  tag="div"
                >
                  {"Verein"}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-118")}
                  tag="h3"
                >
                  {"Energiewende ER(H)langen e.V."}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-139")}
                >
                  {
                    "Für die Energiewende und den Klimaschutz in Erlangen und im Landkreis Erlangen-Höchstadt"
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-158")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-159")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-124")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Icon Gruppe"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f26f6e865b2f5ebeea_Pfad%2010815.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-34")}
                      tag="div"
                    >
                      {"10"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-159")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-124")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Icon Projekt"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f2d308f8ac4a487899_content_paste_black_24dp.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-34")}
                      tag="div"
                    >
                      {"5"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
              <_Builtin.Link
                className={_utils.cx(_styles, "div-org-cards")}
                button={false}
                block="inline"
                options={{
                  href: "https://climateconnect.earth/de/organizations/KlimafreundlicheGro%C3%9Fk%C3%BCchenER177",
                }}
              >
                <_Builtin.Image
                  className={_utils.cx(_styles, "image-org-logo")}
                  loading="lazy"
                  width="auto"
                  height="auto"
                  alt=""
                  src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf9ba4e33d016c1da2c9c_1013944031e70ee06f7743005c3dedcc73268601.jpeg"
                />
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-38")}
                  tag="div"
                >
                  {"Ehrenamtliche Gruppe"}
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "heading-118")}
                  tag="h3"
                >
                  {"Klimafreundliche Großküchen ER"}
                </_Builtin.Heading>
                <_Builtin.Paragraph
                  className={_utils.cx(_styles, "paragraph-139")}
                >
                  {
                    "Wir vernetzen Großküchenleiter:innen in Erlangen und der Region, um eine Transformation hin zu klimafreundlicheren Speiseplänen zu ermöglichen."
                  }
                </_Builtin.Paragraph>
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-158")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-159")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-124")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Icon Gruppe"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f26f6e865b2f5ebeea_Pfad%2010815.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-34")}
                      tag="div"
                    >
                      {"8"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "div-block-159")}
                    tag="div"
                  >
                    <_Builtin.Image
                      className={_utils.cx(_styles, "image-124")}
                      loading="lazy"
                      width="auto"
                      height="auto"
                      alt="Icon Projekt"
                      src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf5f2d308f8ac4a487899_content_paste_black_24dp.svg"
                    />
                    <_Builtin.Block
                      className={_utils.cx(_styles, "text-block-34")}
                      tag="div"
                    >
                      {"3"}
                    </_Builtin.Block>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.Link>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Link
            className={_utils.cx(_styles, "link-block-7")}
            button={false}
            block="inline"
            options={{
              href: "https://climateconnect.earth/de/hubs/erlangen?&#organizations",
            }}
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "text-block-37")}
              tag="div"
            >
              {"Entdecke alle Organisationen "}
            </_Builtin.Block>
            <_Builtin.Image
              className={_utils.cx(_styles, "image-123")}
              loading="lazy"
              width="auto"
              height="auto"
              alt="arrow donw"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6166b718196ee9648f418a7a_Icon%20ionic-ios-arrow-down.svg"
            />
          </_Builtin.Link>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "climatematch")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-214")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cj(
                _utils.cx(_styles, "div-block-215"),
                "w-clearfix"
              )}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "heading-138")}
                tag="h2"
              >
                {"In 4 Fragen zum Glück "}
              </_Builtin.Heading>
              <_Builtin.Paragraph
                className={_utils.cx(_styles, "paragraph-153")}
              >
                {
                  "Das ClimateMatch hilft dir dabei in 4 kurzen Fragen die passende passende Gruppe oder das perfekte Projekt für dein Engagement zu finden. "
                }
              </_Builtin.Paragraph>
              <_Builtin.Link
                className={_utils.cx(_styles, "button-in-main-color")}
                button={true}
                block=""
                options={{
                  href: "https://climateconnect.earth/de/climatematch?from_hub=erlangen",
                  target: "_blank",
                }}
              >
                {"Zum ClimateMatch"}
              </_Builtin.Link>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "cm-4-points-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "cm-point-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-56")}
                  tag="div"
                >
                  {"1."}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-57")}
                  tag="div"
                >
                  {"Dein Herzensthema"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cm-point-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-56")}
                  tag="div"
                >
                  {"2."}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-57")}
                  tag="div"
                >
                  {"Deine Fähigkeiten"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cm-point-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-56")}
                  tag="div"
                >
                  {"3."}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-57")}
                  tag="div"
                >
                  {"Dein Perfektes Engagement"}
                </_Builtin.Block>
              </_Builtin.Block>
              <_Builtin.Block
                className={_utils.cx(_styles, "cm-point-wrapper")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-56")}
                  tag="div"
                >
                  {"4."}
                </_Builtin.Block>
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-57")}
                  tag="div"
                >
                  {"Deine Wirkung 🎉"}
                </_Builtin.Block>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "nl-signup")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          className={_utils.cx(_styles, "container-72")}
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-217")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-137")}
              tag="h1"
            >
              {"Bleibe auf dem Laufenden"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-154")}>
              {
                "Wir halten alle ClimateHub Mitglieder regelmäßig auf dem laufenden mit unserem monatlichen Newsletter. Anstehende Events, Projekte zum Mitmachen oder Neuerungen auf der Plattform. Melde dich einfach auf dem ClimateHub an und setze dabei den Haken zum Newsletter. Oder du schaust dir erstmal unsere vergangenen Newsletter an. "
              }
            </_Builtin.Paragraph>
            <_Builtin.Link
              className={_utils.cx(_styles, "button-on-main-color")}
              button={true}
              block=""
              options={{
                href: "#",
              }}
            >
              {"Zum Newsletter Archiv"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-216")}
            tag="div"
          />
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-org-supporter-ch")}
        grid={{
          type: "section",
        }}
        tag="section"
      >
        <_Builtin.BlockContainer
          grid={{
            type: "container",
          }}
          tag="div"
        >
          <_Builtin.Heading
            className={_utils.cx(_styles, "heading-122")}
            tag="h1"
          >
            {"Unsere Unterstützer und Partner"}
          </_Builtin.Heading>
          <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-141")}>
            {
              "Die Mitglieder des ClimateHubs bringen ihn zum Leben - unsere Partner haben den ClimateHub erst möglich gemacht. "
            }
          </_Builtin.Paragraph>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-178")}
            tag="div"
          >
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="200"
              alt="Logo FAU"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/653916042221d135dd06a034_friedrich-alexander-universitaet-fau-logo.jpg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-201")}
              tag="div"
            />
            <_Builtin.Image
              loading="lazy"
              width="auto"
              height="150"
              alt="sneep Logo"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/651bf7dd5f3329028b31effb_277ad08ee6ea0f75097b7b79cf31f0c28358daa2.jpeg"
            />
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-202")}
              tag="div"
            />
            <_Builtin.Image
              loading="lazy"
              width="200"
              height="auto"
              alt="Logo gefördert durch Unser klimafonds "
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6569ae7608c6f80c4014afbd_gefo%E2%95%A0%C3%AArdert-durch_unser-klimafonds.jpg"
            />
          </_Builtin.Block>
        </_Builtin.BlockContainer>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "section-ch-donate")}
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "container-50")}
          tag="div"
        >
          <_Builtin.Image
            className={_utils.cx(_styles, "image-81")}
            loading="lazy"
            width="316"
            height="auto"
            alt="Chris steht am Climate Connect infostand"
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655780cb021512c5dd02a62c_DSC09085%20(Mittel).JPG"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "image-82")}
            loading="lazy"
            width="399"
            height="auto"
            alt="Climate Connect Team steht an Infostand"
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/655de70183fc7da42342309c__DSC3970%20(Klein).jpg"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-111-copy")}
            tag="div"
          >
            <_Builtin.Heading
              className={_utils.cx(_styles, "heading-101-copy")}
              tag="h1"
            >
              {"Jetzt Spenden und den ClimateHub Erlangen möglich machen!"}
            </_Builtin.Heading>
            <_Builtin.Paragraph className={_utils.cx(_styles, "paragraph-124")}>
              {
                "Schon ab 2€ im Monat kannst du dazu beitragen, dass der ClimateHub langfristig einen Unterschied machen kann. So machen wir uns unabhängiger von jährlichen Förderungen und Zuschüssen. Das gibt uns viel Planungssicherheit und wir können mehr bewirken. "
              }
            </_Builtin.Paragraph>
            <_Builtin.Block
              className={_utils.cx(_styles, "dono-page-button-wrapper")}
              tag="div"
            >
              <_Builtin.Block
                className={_utils.cx(_styles, "div-block-112")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "text-block-16")}
                  tag="div"
                >
                  {"Den Climate Connect gUG unterstützen:"}
                </_Builtin.Block>
                <_Builtin.Link
                  className={_utils.cx(
                    _styles,
                    "button-in-main-color",
                    "dono-page"
                  )}
                  button={true}
                  block=""
                  options={{
                    href: "#Donation-setction",
                  }}
                >
                  {"Jetzt Spenden"}
                </_Builtin.Link>
              </_Builtin.Block>
            </_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Image
            className={_utils.cx(_styles, "image-83")}
            loading="lazy"
            width="200"
            height="auto"
            alt="Projekt Karte von der Climate Connect plattform: Klimakalender 2023"
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/638a753c8a6a0bb7dfa8678b_Gruppe%208312.png"
          />
          <_Builtin.Image
            className={_utils.cx(_styles, "image-84")}
            loading="lazy"
            width="341"
            height="auto"
            alt="Mann zeigt auf Karten die an einer Pinnwand hängen"
            src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/644bbeadad2e7a5201012830__DSC4692.jpg"
          />
        </_Builtin.Container>
      </_Builtin.Section>
      <_Builtin.Section
        className={_utils.cx(_styles, "footer")}
        grid={{
          type: "section",
        }}
        tag="footer"
        id="footer"
      >
        <_Builtin.Container
          className={_utils.cx(_styles, "container-2")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-flex-container")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-6-lleft")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "footer-heading")}
                tag="h2"
              >
                {"Allgemein"}
              </_Builtin.Heading>
              <_Builtin.List
                className={_utils.cx(_styles, "list-footer")}
                tag="ul"
                unstyled={true}
              >
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/faq",
                      target: "_blank",
                    }}
                  >
                    {"FAQ"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/donate",
                      target: "_blank",
                    }}
                  >
                    {"Spenden"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/about",
                      target: "_blank",
                    }}
                  >
                    {"Über uns"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/team",
                    }}
                  >
                    {"Team"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/blog",
                      target: "_blank",
                    }}
                  >
                    {"Blog"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-6")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "footer-heading")}
                tag="h2"
              >
                {"Kontakt"}
              </_Builtin.Heading>
              <_Builtin.List
                className={_utils.cx(_styles, "list-footer")}
                tag="ul"
                unstyled={true}
              >
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "mailto:contact@climateconnect.earth",
                    }}
                  >
                    {"Email senden"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "tel:+4915730101056",
                    }}
                  >
                    {"+4915730101056"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-6")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "footer-heading")}
                tag="h2"
              >
                {"Browse"}
              </_Builtin.Heading>
              <_Builtin.List
                className={_utils.cx(_styles, "list-footer")}
                tag="ul"
                unstyled={true}
              >
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/hubs/erlangen?&#projects",
                      target: "_blank",
                    }}
                  >
                    {"Projekte"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/hubs/erlangen?&#organizations",
                      target: "_blank",
                    }}
                  >
                    {"Organisationen"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/hubs/erlangen?&#members",
                      target: "_blank",
                    }}
                  >
                    {"Mitglieder"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/hubs",
                      target: "_blank",
                    }}
                  >
                    {"Hubs"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-6")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "footer-heading")}
                tag="h2"
              >
                {"Rechtliches"}
              </_Builtin.Heading>
              <_Builtin.List
                className={_utils.cx(_styles, "list-footer")}
                tag="ul"
                unstyled={true}
              >
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/imprint",
                      target: "_blank",
                    }}
                  >
                    {"Impressum"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/privacy",
                      target: "_blank",
                    }}
                  >
                    {"Datenschutz"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
                <_Builtin.ListItem
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "https://climateconnect.earth/de/terms",
                      target: "_blank",
                    }}
                  >
                    {"AGBs"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
            <_Builtin.Block
              className={_utils.cx(_styles, "div-block-6-nl")}
              tag="div"
            >
              <_Builtin.Heading
                className={_utils.cx(_styles, "footer-heading")}
                tag="h2"
              >
                {"Newsletter"}
              </_Builtin.Heading>
              <_Builtin.List tag="ul" unstyled={true}>
                <_Builtin.ListItem
                  className={_utils.cj(
                    _utils.cx(_styles, "list-item-4"),
                    "w-clearfix"
                  )}
                  list={{
                    type: "",
                  }}
                >
                  <_Builtin.Link
                    className={_utils.cx(_styles, "footer-link")}
                    button={false}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    <_Builtin.Strong
                      className={_utils.cx(_styles, "bold-text")}
                    >
                      {
                        "Registriere dich, um jeden Monat Neuigkeiten aus dem ClimateHub zu erhalten und keine Events zu verpassen."
                      }
                    </_Builtin.Strong>
                  </_Builtin.Link>
                  <_Builtin.Link
                    className={_utils.cx(_styles, "button-in-main-color")}
                    button={true}
                    block=""
                    options={{
                      href: "#",
                    }}
                  >
                    {"Newsletter Archiv"}
                  </_Builtin.Link>
                </_Builtin.ListItem>
              </_Builtin.List>
            </_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Container>
        <_Builtin.Container className={_utils.cx(_styles, "sm-con")} tag="div">
          <_Builtin.Link
            className={_utils.cx(_styles, "social-media-icons")}
            button={false}
            block="inline"
            options={{
              href: "https://www.instagram.com/climatehub_erlangen/",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-3")}
              loading="lazy"
              width="33"
              height="auto"
              alt="Instagram Logo"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6165793f36636ded08114831_Icon%20awesome-instagram.svg"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "social-media-icons")}
            button={false}
            block="inline"
            options={{
              href: "https://github.com/climateconnect/climateconnect",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-3")}
              loading="lazy"
              width="33"
              height="auto"
              alt="Github Logo"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6165793f8a2cfa62b31b4c86_Icon%20awesome-github.svg"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "social-media-icons")}
            button={false}
            block="inline"
            options={{
              href: "https://www.linkedin.com/company/climateconnect",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-3")}
              loading="lazy"
              width="33"
              height="auto"
              alt="Linkedin Logo"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6165793f18e75a6992617a98_iconmonstr-linkedin-3.svg"
            />
          </_Builtin.Link>
          <_Builtin.Link
            className={_utils.cx(_styles, "social-media-icons")}
            button={false}
            block="inline"
            options={{
              href: "#https://www.youtube.com/channel/UC10rPriptUxYilMfvt-8Tkw",
              target: "_blank",
            }}
          >
            <_Builtin.Image
              className={_utils.cx(_styles, "image-4")}
              loading="lazy"
              width="auto"
              height="33"
              alt="Youtube Logo"
              src="https://uploads-ssl.webflow.com/615d9a37fbb2467a53e09161/6165793f68b1ea5ebe51bc2e_Icon%20awesome-youtube.svg"
            />
          </_Builtin.Link>
        </_Builtin.Container>
        <_Builtin.Block
          className={_utils.cx(_styles, "text-block-3")}
          tag="div"
        >
          {"Made with 💚 for 🌎"}
        </_Builtin.Block>
      </_Builtin.Section>
    </_Component>
  );
}
