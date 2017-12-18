# ionic-sidemenu-issue
used to demonstrate a sidebar issue in ionic apps

 - clone the repo
 - `nmp install`
 - `ionic serve`
 - select _Page1_ to _Page3_ in the sidemenu to see the problem

## Description

Doing heavy calculations during View Initialization does block the closing of the
ionic sidebar menu.  
Neither using `ionViewDidLoad` nor when using `ionViewDidEnter` (which should
_Runs when the page has fully entered and is now the active page._ )
makes the sidebar close until the calculation is finished.

From my point of view the page is fully entered, when it is fully visible.

If you cannot avoid intense calculations while entering a page, it would be much
more user-friendly to show some spinner than to block the whole navigation.

The only way around this was to use `setTimeout(()=>{doStuff();},50);`, which
isn't a nice solution :)

My proposal/request is to not _start_ ionViewDidEnter until the menu is closed.
Problems with this rather simple approach may occur when using
[split pane mode](http://blog.ionicframework.com/testing-split-pane-support/).
