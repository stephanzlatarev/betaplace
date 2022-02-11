sap.ui.define([], function() {
  "use strict";

  const agenda = new sap.ui.layout.VerticalLayout({
    content: {
      path: "/agenda/following",
      template: new sap.m.Text({ text: "{topic}" })
    },
    content: [
      new sap.m.Panel({
        headerText: "Following progress in",
        width: "auto",
        expandable: true,
        expanded: true,
        content: {
          path: "/agenda/following",
          template: new sap.f.Card({ header: new sap.f.cards.Header({ title: "{topic}" }) }).addStyleClass("sapUiSmallMarginBottom")
        }
      }),
      new sap.m.Panel({
        headerText: "Watching for regress in",
        width: "100%",
        expandable: true,
        content: {
          path: "/agenda/watching",
          template: new sap.f.Card({ header: new sap.f.cards.Header({ title: "{topic}" }) }).addStyleClass("sapUiSmallMarginBottom")
        }
      }),
      new sap.m.Panel({
        headerText: "Recommended for you",
        width: "100%",
        expandable: true,
        expanded: true,
        content: {
          path: "/agenda/recommended",
          template: new sap.f.Card({ header: new sap.f.cards.Header({ title: "{topic}" }) }).addStyleClass("sapUiSmallMarginBottom")
        }
      }),
    ]
  });

  const progress = new sap.suite.ui.commons.Timeline({
    enableScroll: false,
    showHeaderBar: false,
    content: {
      path: "/progress",
      template: new sap.suite.ui.commons.TimelineItem({ title: "{title}", text: "{details}" }),
    }
  });

  const calendar = new sap.m.SinglePlanningCalendar({
    views: new sap.m.SinglePlanningCalendarDayView({})
  });

  const shell = new sap.m.Shell({
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

  shell.setModel(new sap.ui.model.json.JSONModel(persona.ulf));

});
