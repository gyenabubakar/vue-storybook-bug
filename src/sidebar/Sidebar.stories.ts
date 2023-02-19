import { Meta } from "@storybook/vue3";
import { PhSquaresFour } from "phosphor-vue";
import { Wrapper } from "#ui";
import { NavigationItemLabel } from "#ui/sidebar/types";
import SidebarComponent, { SidebarNavItem } from ".";

interface Props {
  activeItem: NavigationItemLabel;
}

export default {
  title: "Navigation/Sidebar",
  component: SidebarComponent,
  onLogoClick: { action: "on:logo-click" },
  onCreateTweet: { action: "on:create-tweet" },
} as Meta<typeof SidebarComponent>;

export const Sidebar = (args: Props) => ({
  components: { Wrapper, SidebarComponent, SidebarNavItem },
  setup() {
    return { args };
  },
  template: `
    <Wrapper>
      <SidebarComponent v-bind="args">
        <template #logo>
          <div style="background: gray; width: 100%; height: 100%;"></div>
        </template>
        
        <template #navigation>
            <SidebarNavItem id="Dashboard">
                Dashboard
            </SidebarNavItem>
        </template>
      </SidebarComponent>

      <component is="style" type="text/css">
        html, body {
          margin: 0;
        }
        #root {
          height: 100%;
        }
        body {
          background-color: #f5f5f5;
          height: 100vh;
        }
      </component>
    </Wrapper>
  `,
});

Sidebar.args = {
  activeItem: "Dashboard",
};
