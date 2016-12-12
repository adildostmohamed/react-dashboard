import React from 'react';

export function renderCardTitle(content){
  if(content && content.hasOwnProperty("title")) {
    return (
      <h3 className="m-card__title">{content.title}</h3>
    )
  }
  return null;
};

export function renderCardSubtitle(content) {
  if(content && content.hasOwnProperty("subtitle")) {
    return (
      <p className="m-card__subtitle">{content.subtitle}</p>
    )
  }
  return null;
}

export function renderCardBody(content) {
  if(content && content.hasOwnProperty("body")) {
    return (
      <p className="m-card__body">{content.body}</p>
    )
  }
  return null;
}

export function renderCardActions(content) {
  if(content && content.hasOwnProperty("actions")) {
    const actionKeys = Object.keys(content.actions);
    return actionKeys.map((actionKey, index) => {
      const action = content.actions[actionKey];
      return (
        <a className="m-card__action" key={index} href={action.target}>
          {action.label}
        </a>
      )
    });
  }
  return null;
}

export function renderCardImage(content) {
  if(content && content.hasOwnProperty("image")) {
    return (
      <img className="m-card__image" src={content.image} alt="Background for card" />
    )
  }
}
