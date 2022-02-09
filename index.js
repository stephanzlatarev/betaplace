sap.ui.define([], function() {
  "use strict";

  const agenda = new sap.ui.layout.VerticalLayout({
    content: [
      new sap.m.Panel({
        headerText: "Following progress in",
        width: "auto",
        expandable: true,
        expanded: true,
        content: [
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "Space Exploration" }) }).addStyleClass("sapUiSmallMarginBottom"),
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "Climate Change" }) }).addStyleClass("sapUiSmallMarginBottom"),
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "COVID-19" }) }).addStyleClass("sapUiSmallMarginBottom"),
        ]
      }),
      new sap.m.Panel({
        headerText: "Watching for regress in",
        width: "100%",
        expandable: true,
        content: [
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "Economy" }) }).addStyleClass("sapUiSmallMarginBottom"),
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "Education" }) }).addStyleClass("sapUiSmallMarginBottom"),
        ]
      }),
      new sap.m.Panel({
        headerText: "Recommended for you",
        width: "100%",
        expandable: true,
        expanded: true,
        content: [
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "Sci-Fi Movies" }) }).addStyleClass("sapUiSmallMarginBottom"),
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "Crypto Currencies" }) }).addStyleClass("sapUiSmallMarginBottom"),
          new sap.f.Card({ header: new sap.f.cards.Header({ title: "High Tech" }) }).addStyleClass("sapUiSmallMarginBottom"),
        ]
      }),
    ]
  });

  const progress = new sap.suite.ui.commons.Timeline({
    enableScroll: false,
    showHeaderBar: false,
    content: [
      new sap.suite.ui.commons.TimelineItem({ title: "SpaceX launches Falcon 9", text: "Falcon 9 is the first orbital class rocket capable of reflight" }),
      new sap.suite.ui.commons.TimelineItem({ title: "Blue Origin brought tourists to space", text: "Blue Origin brought the first official tourists to space" }),
    ]
  });

  const calendar = new sap.m.SinglePlanningCalendar({
    views: new sap.m.SinglePlanningCalendarDayView({})
  });

  new sap.m.Shell({
    app: new sap.m.App({
      pages: new sap.m.Page({
        title: "betaplace",
        content: new sap.m.IconTabBar({
          items: [
            new sap.m.IconTabFilter({ icon: "sap-icon://activities", text: "Agenda", key: "agenda", content: agenda }),
            new sap.m.IconTabFilter({ icon: "sap-icon://feed", text: "Progress", key: "progress", content: progress }),
            new sap.m.IconTabFilter({ icon: "sap-icon://calendar", text: "Calendar", key: "calendar", content: calendar }),
          ]
        }).addStyleClass("sapUiResponsiveContentPadding")
      })
    })
  }).placeAt("content");

});
