



# command

    $ crontab -u username -e

    # how about 5 minutes later do a one time command:
    # sleep 5m; play my-music.mp3


In the editor you will see some thing like:

    1 2 3 4 5 /path/and/command arg1 arg2

    Where,

    1: Minute (0-59)
    2: Hours (0-23)
    3: Day (0-31)
    4: Month (0-12 12 == December)
    5: Day of the week(0-7 7 or 0 == sunday)

    wildcards/asterisks means: any

    * * * * * command to be executed
    - - - - -
    | | | | |
    | | | | ----- Day of week (0 - 7) (Sunday=0 or 7)
    | | | ------- Month (1 - 12)
    | | --------- Day of month (1 - 31)
    | ----------- Hour (0 - 23)
    ------------- Minute (0 - 59)


# referrences

    man  crontab
    info crontab
    google crontab linux

    Vivek Gite on April 16, 2006:
    http://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/



# description

## cron and crontab

'cron' is the deamon to run scheduled commands, Vixie Cron.

'crontab'  is the program used to install, deinstall or list the tables
used to drive the cron daemon in Vixie Cron.  Each user  can  have
their    own    crontab,    and    though    these   are   files   in
/var/spool/cron/crontabs,  they  are  not  intended  to   be   edited
directly.

If you read man documents, you'd get a lot more details, settings, and
configuration files about it.

Basicaly, 

    Cron allows Linux users to run commands or scripts at a given date and
    time. You can schedule scripts to be executed periodically. Cron is one of the
    most useful tool in a Linux or UNIX like operating systems. It is usually used
    for sysadmin jobs such as backups or cleaning /tmp/ directories and more. The
    cron service (daemon) runs in the background and constantly checks the
    /etc/crontab file, and `/etc/cron.*/` directories. It also checks the
    /var/spool/cron/ directory.


    You need to use the crontab command to edit/create, install, deinstall or list
    the cron jobs in Vixie Cron. Each user can have their own crontab file, and
    though these are files in /var/spool/cron/crontabs, they are not intended to be
    edited directly. You need to use crontab command for editing or setting up your
    own cron jobs.

    Types of cron configuration files

    There are different types of configuration files:

    The UNIX / Linux system crontab : Usually, used by system services and critical
    jobs that requires root like privileges. The sixth field (see below for field
    description) is the name of a user for the command to run as. This gives the
    system crontab the ability to run commands as any user.

    The user crontabs: User can install their own cron jobs using the crontab
    command. The sixth field is the command to run, and all commands run as the
    user who created the crontab

    Note: This faq features cron implementations written by Paul Vixie and included
    in many Linux distributions and Unix like systems such as in the popular 4th
    BSD edition. The syntax is compatible with various implementations of crond.

    How Do I install or create or edit my own cron jobs?

    To edit or create your own crontab file, type the following command at the UNIX
    / Linux shell prompt:

        $ crontab -e

    Do I have to restart cron after changing the crontable file?

    No. Cron will examine the modification time on all crontabs and reload those
    which have changed. Thus cron need not be restarted whenever a crontab file is
    modified.


## quirk 1

    cron  requires  that each entry in a crontab end in a newline charac‐
    ter. If the last entry in a crontab is missing the newline, cron will
    consider  the  crontab  (at  least  partially)  broken  and refuse to
    install it.


## Example

To get crontab to run a task every 10 minutes you could type as follow:

    # asterisk per 10 minutes:
    */10 * * * * /path/to/command

    # */10 * * * * /path/to/command  # Yes
    #   10 * * * * /path/to/command  # No, it's the 10th min per hour
    #  10/ * * * * /path/to/command  # No, same



<!--
    2016 0107
    vim: set ft=markdown tw=78:
-->
