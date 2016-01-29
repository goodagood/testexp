
# Use Network Manager Command Line Interface: nmcli

on Ubuntu/Lubuntu/Linux, version 14.., version 15..

2016 0129

When we have to use terminal to setup network, it's time to use
`nmcli`, which is command line tool control the network-manager

# ref

man nmcli

google nmcli network manager

https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/html/Networking_Guide/sec-Using_the_NetworkManager_Command_Line_Tool_nmcli.html

http://www.certdepot.net/rhel7-get-started-nmcli/

https://github.com/goodagood/testexp.git
https://github.com/goodagood/gg.git

I am going to tell why I have to use it, because


# network-manager lost it's icon on my Lubuntu v15

It's not working for me, the applet of the network-manager.  Which
is a piece of reliable application I always depend on.

I lost the nm-applet, the icon of the network-manager disappearred.
Tried a few ways to get it back, system settings, command line restart,
even upgrade to Lubuntu v15..., nothing works.

# The Lenove Thinkpad x240

It happend on a Lenove Thinkpad x240, which give me terrible
experiences.  The laptop is small enough and tough enough to endure
toughnesses of many traveling, but the networking and many designs
of the laptop shows it's a product of stupid engineers.

The price of the x240 can buy 2 or 3 netbooks, by the price, what
it gives is a little bit toughness, and a lot troubleness.  It
tought me, next time, I should choose cheap laptops.

# the Lubuntu

For old computer, lubuntu is a good option, it use light weight
window enviroment, tax less on cpu, memory and all kind of
resources.  This means less heat, and more efficient, and less
fancy graphic eye candy.  So it's good for programmers.  So i am
using it even with new laptops.

But recently Lubuntu got trouble with nm-applet.  Search it
online, you get a few clues how it happen.

One way to make thing going is to not use the applet, 
the graphic interfaces.

# The 'nmcli'

       nmcli - command‐line tool for controlling NetworkManager

    SYNOPSIS
           nmcli  [ OPTIONS ] OBJECT { COMMAND | help }

       OPTIONS := {
       -t[erse]
       -p[retty]
       -m[mode] tabular | multiline
       -f[ields] <field1,field2,...> | all | common
       -e[scape] yes | no
       -v[ersion]
       -h[elp]
       }

       OBJECT := { nm | con | dev }

for high version, there should be more OBJECT:

    general:    it deals with NetworkManager’s general status and operations,
    networking: it’s about overall networking control,
    radio:      it manages NetworkManager radio switches,
    connection: it’s all about NetworkManager’s connections,
    device:     it deals with devices managed by NetworkManager.


# man nmcli





DESCRIPTION

       nmcli is a command‐line tool for controlling NetworkManager and
       reporting on its status.  It is not meant as a full replacement for
       nm‐applet or other similar clients but as a complementary utility to
       those programs.  The main usage for nmcli is on servers, headless
       machines or for power users who prefer the command line.

       Typical applications include:

       —   Initscripts: ifup/ifdown can utilize NetworkManager via nmcli
           instead of having to manage connections itself and possibly
           interfere with NetworkManager.

       —   Servers, headless machines: No GUI is available; then nmcli can
           be used to activate/deactivate connections.  However, if a con‐
           nection requires a secret in order to activate and if that secret
           is not stored at the system level, nmcli will not be able to
           activate it; it is currently unable to supply the secrets to Net‐
           workManager.

       —   User sessions: nmcli can be used to activate/deactivate connec‐
           tions from the command line, but a client with a secret agent
           (like nm‐applet) is needed for supplying secrets not stored at
           the system level. Keyring dialogs and password prompts may appear
           if this happens.

   OPTIONS ...

       -t, --terse
              Output is terse.  This mode is designed and suitable for com‐
              puter (script) processing.

       -p, --pretty
              Output is pretty. This causes nmcli to produce easily readable
              outputs for humans, i.e. values are aligned, headers are
              printed, etc.

       -m, --mode tabular | multiline
              Switch between tabular and multiline output.  If omitted,
              default is tabular for most commands. For the commands produc‐
              ing more structured information, that cannot be displayed on a
              single line, default is multiline. Currenly, they are:
                'nmcli con list id|uuid <name>'
                'nmcli dev list'
              tabular   – Output is a table where each line describes a sin‐
              gle entry.  Columns define particular properties of the entry.
              multiline – Each entry comprises multiple lines, each property
              on its own line. The values are prefixed with the property
              name.

       -f, --fields <field1,field2,...> | all | common
              This option is used to specify what fields (column names)
              should be printed.  Valid field names differ for specific com‐
              mands. List available fields by providing an invalid value to
              the --fields option.
              all is used to print all valid field values of the command.
              common is used to print common field values of the command.
              If omitted, default is common.  The option is mandatory when
              --terse is used.  In this case, generic values all and common
              cannot be used.  (This is to maintain compatibility when new
              fields are added in the future).

       -e, --escape yes | no
              Whether to escape ':' and '\' characters in terse tabular
              mode.  The escape character is '\'.  If omitted, default is
              yes.

       -v, --version
              Show nmcli version.

       -h, --help
              Print help information.

   OBJECT

       nm     NetworkManager
              Use this object to inquire and change state of NetworkManager.


          COMMAND := { status | permissions | enable | sleep | wifi | wwan | wimax }


              status
                     Show overall status of NetworkManager. This is the
                     default action, when no command is provided to nm
                     object.
                     Reference to D‐Bus:
                     No simple reference.

              permissions
                     Show the permissions a caller has for various authenti‐
                     cated operations that NetworkManager provides, like
                     enable/disable networking, changing Wi‐Fi, WWAN, and
                     WiMAX state, modifying connections, etc.
                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager
                     method:    GetPermissions
                     arguments: none

              enable [true|false]
                     Get networking‐enabled status or enable/disable net‐
                     working by NetworkManager.  All interfaces managed by
                     NetworkManager are deactivated when networking has been
                     disabled.
                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager
                     method:    Enable
                     arguments: TRUE or FALSE

              sleep [true|false]
                     Get sleep status or put to sleep/awake NetworkManager.
                     All interfaces managed by NetworkManager are deacti‐
                     vated when it falls asleep. This command is not meant
                     for user to enable/disable networking, use enable for
                     that. D‐Bus Sleep method is designed to put NetworkMan‐
                     ager to sleep or awake for suspending/resuming the com‐
                     puter.
                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager
                     method:    Sleep
                     arguments: TRUE or FALSE

              wifi [on|off]
                     Inquire or set status of Wi‐Fi in NetworkManager. If no
                     arguments are supplied, Wi‐Fi status is printed; on
                     enables Wi‐Fi; off disables Wi‐Fi.
                     Reference to D‐Bus:
                     No simple reference.

              wwan [on|off]
                     Inquire or set status of WWAN in NetworkManager. If no
                     arguments are supplied, WWAN status is printed; on
                     enables WWAN; off disables WWAN.
                     Reference to D‐Bus:
                     No simple reference.

              wimax [on|off]
                     Inquire or set status of WiMAX in NetworkManager. If no
                     arguments are supplied, WiMAX status is printed; on
                     enables WiMAX; off disables WiMAX.
                     Note: WiMAX support is a compile‐time decision, so it
                     may be unavailable on some installations.
                     Reference to D‐Bus:
                     No simple reference.


       con    Connections
              Get information about NetworkManager's connections.


          COMMAND := { list | status | up | down | delete }


              list [id <id> | uuid <id>]
                     List configured connections.  Without a parameter, all
                     connections are listed.  In order to get connection
                     details, id with connection's name or uuid with connec‐
                     tion's UUID shall be specified.  When no command is
                     given to the con object, the default action is 'nmcli
                     con list'.
                     Reference to D‐Bus:
                     No simple reference.

              status
                     Print status of active connections.
                     Reference to D‐Bus:
                     No simple reference.

              up id <id> | uuid <id> [iface <iface>] [ap <BSSID>] [nsp
              <name>] [--nowait] [--timeout <timeout>]
                     Activate a connection.  The connection is identified by
                     its name using id or UUID using uuid. When requiring a
                     particular device to activate the connection on, the
                     iface option with interface name should be given. In
                     case of a VPN connection, the iface option specify the
                     device of the base connection. The ap option specify
                     what particular AP should be used in case of a Wi‐Fi
                     connection.

                     Available options are:

                     iface        – interface that will be used for activa‐
                                  tion

                     ap           – BSSID of the AP which the command should
                                  connect to (for Wi‐Fi connections)

                     nsp          – NSP (Network Service Provider) which the
                                  command should connect to (for WiMAX con‐
                                  nections)

                     --nowait     – exit immediately without waiting for
                                  command completion

                     --timeout    – how long to wait for command completion
                                  (default is 90 s)

                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager
                     method:    ActivateConnection
                     arguments: according to arguments


              down id <id> | uuid <id>
                     Deactivate a connection.  The connection is identified
                     by its name using id or UUID using uuid.
                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager
                     method:    DeactivateConnection
                     arguments: according to arguments

              delete id <id> | uuid <id>
                     Delete a configured connection. The connection to
                     delete is specified with id (connection name) or uuid
                     (connection UUID).
                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager.Settings.Connection
                     method:    Delete
                     arguments: none


       dev    Devices
              Get information about devices.


          COMMAND := { status | list | disconnect | wifi }


              status
                     Print status of devices.  This is the default action,
                     when no command is specified to dev object.
                     Reference to D‐Bus:
                     No simple reference.

              list [iface <iface>]
                     Get detailed information about devices.  Without an
                     argument, all devices are examined. To get information
                     for a specific device, the iface argument with the
                     interface name should be provided.
                     Reference to D‐Bus:
                     No simple reference.

              disconnect iface <iface> [--nowait] [--timeout <timeout>]
                     Disconnect a device and prevent the device from auto‐
                     matically activating further connections without
                     user/manual intervention.

                     Available options are:

                     --nowait     – exit immediately without waiting for
                                  command completion

                     --timeout    – how long to wait for command completion
                                  (default is 10 s)

                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager.Device
                     method:    Disconnect
                     arguments: none

              wifi [list [iface <iface>] [bssid <BSSID>]]
                     List available Wi‐Fi access points. The iface and bssid
                     options can be used to list APs for a particular inter‐
                     face or with a specific BSSID, respectively.
                     Reference to D‐Bus:
                     No simple reference.

              wifi connect <(B)SSID> [password <password>] [wep-key-type
              key|phrase] [iface <iface>] [bssid <BSSID>] [name <name>]
              [--private] [--nowait] [--timeout <timeout>]
                     Connect to a Wi‐Fi network specified by SSID or BSSID.
                     The command creates a new connection and then activates
                     it on a device. This is a command‐line counterpart of
                     clicking an SSID in a GUI client. The command always
                     creates a new connection and thus it is mainly useful
                     for connecting to new Wi‐Fi networks. If a connection
                     for the network already exists, it's better to connect
                     through it using nmcli con up id <name>. Note that only
                     open, WEP and WPA‐PSK networks are supported at the
                     moment. It is also supposed that IP configuration is
                     obtained via DHCP.

                     Available options are:

                     password     – password for secured networks (WEP or
                                  WPA)

                     wep-key-type – type of WEP secret, either key for
                                  ASCII/HEX key or phrase for passphrase

                     iface        – interface that will be used for activa‐
                                  tion

                     bssid        – if specified, the created connection
                                  will be restricted just for the BSSID

                     name         – if specified, the connection will use
                                  the name (else NM creates a name itself)

                     --private    – the connection will only be visible to
                                  the user who created it (else the connec‐
                                  tion is system‐wide)

                     --nowait     – exit immediately without waiting for
                                  command completion

                     --timeout    – how long to wait for command completion
                                  (default is 90 s)

                     Reference to D‐Bus:
                     interface: org.freedesktop.NetworkManager
                     method:    AddAndActivateConnection
                     arguments: according to arguments


ENVIRONMENT VARIABLES
       nmcli's behavior is affected by the following environment variables.

       LC_ALL       If set to a non‐empty string value, it overrides the
                    values of all the other internationalization variables.

       LC_MESSAGES  Determines the locale to be used for internationalized
                    messages.

       LANG         Provides a default value for the internationalization
                    variables that are unset or null.

       Internationalization notes:
       Be aware that nmcli is localized and that's why the output depends on
       your environment. This is important to realize especially when you
       parse the output.
       Call nmcli as LC_ALL=C nmcli to be sure the locale is set to "C"
       while executing in a script.

       LC_ALL, LC_MESSAGES, LANG variables specify the LC_MESSAGES locale
       category (in that order), which determines the language that nmcli
       uses for messages.  The "C" locale is used if none of these variables
       are set, and this locale uses English messages.


EXIT STATUS
       nmcli exits with status 0 if it succeeds, a value greater than 0 is
       returned if an error occurs.

       0   Success – indicates the operation succeeded

       1   Unknown or unspecified error

       2   Invalid user input, wrong nmcli invocation

       3   Timeout expired (see commands with --timeout option)

       4   Connection activation failed

       5   Connection deactivation failed

       6   Disconnecting device failed

       7   Connection deletion failed

       8   NetworkManager is not running

       9   nmcli and NetworkManager versions mismatch


EXAMPLES
       nmcli -t -f RUNNING nm

              tells you whether NetworkManager is running or not.


       nmcli -t -f STATE nm

              shows the overall status of NetworkManager.


       nmcli nm wifi off

              switches Wi‐Fi off.


       nmcli -p con list

              lists all connections NetworkManager has.


       nmcli -f name,autoconnect con list

              lists all connections' names and their autoconnect settings.


       nmcli con list id "My wired connection"

              lists all details of the connection with "My wired connection"
              name.


       nmcli -p con up id "My wired connection" iface eth0

              activates the connection with name "My wired connection" on
              interface eth0.  The -p option makes nmcli show progress of
              the activation.


       nmcli con up uuid 6b028a27-6dc9-4411-9886-e9ad1dd43761 ap
       00:3A:98:7C:42:D3

              connects the Wi‐Fi connection with UUID
              6b028a27-6dc9-4411-9886-e9ad1dd43761 to the AP with BSSID
              00:3A:98:7C:42:D3.


       nmcli dev status

              shows the status for all devices.


       nmcli dev disconnect iface em2

              disconnects a connection on interface em2 and marks the device
              as unavailable for auto‐connecting. That's why no connection
              will automatically be activated on the device until the
              device's "autoconnect" is set to TRUE or user manually acti‐
              vates a connection.


       nmcli -f GENERAL,WIFI-PROPERTIES dev list iface wlan0

              lists details for wlan0 interface; only GENERAL and WIFI-PROP‐
              ERTIES sections will be shown.


       nmcli dev wifi

              lists available Wi‐Fi access points known to NetworkManager.


       nmcli dev wifi con "Cafe Hotspot 1" password caffeine name "My cafe"

              creates a new connection named "My cafe" and then connects it
              to "Cafe Hotspot 1" SSID using "caffeine" password. This is
              mainly useful when connecting to "Cafe Hotspot 1" for the
              first time. Next time, it is better to use 'nmcli con up id
              "My cafe"' so that the existing connection profile can be used
              and no additional is created.


BUGS
       There are probably some bugs.  If you find a bug, please report it to
       https://bugzilla.gnome.org/ — product NetworkManager.


SEE ALSO
       nm-tool(1), nm-online(1), NetworkManager(8), nm-settings(5),
       nm...pplet(1), nm-connection-editor(1).



                               17 January 2013                      NMCLI(1)





<!--
    vim: set ft=markdown tw=66:
-->
